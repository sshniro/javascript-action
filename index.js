const core = require('@actions/core');
const exec = require('@actions/exec');
const fs = require('fs');
const github = require('@actions/github');
const _ = require('lodash');

// require('./dev-helper').fillEnvironmentVariables();
const actionHelper = require('./action-helper');

// Forward variable declarations
let octokit;
let context;
let owner;
let repo;

// Default file names
let jsonReportName = 'report_json.json';
let mdReportName = 'report_md.md';
let zapWorkDir = '.zap';

async function run() {

    try {
        let workspace = core.getInput('workspace');
        let token = core.getInput('token');
        let repoName = core.getInput('repo_name');
        let branch = core.getInput('branch');
        let docker_name = core.getInput('docker_name');
        let target = core.getInput('target');
        let rulesFileName = core.getInput('rules_file_name');
        let currentRunnerID = core.getInput('github_run_id');

        // let zapWorkDir = core.getInput('zap_work_dir');
        // let mdReportName = core.getInput('report_name');
        // let zapYAMLFileName = core.getInput('zap_conf_file_name');

        console.log('starting the program');
        console.log('github run id :' + currentRunnerID);

        if (!fs.existsSync(zapWorkDir)){
            fs.mkdirSync(`${workspace}/${zapWorkDir}`);
        }

        let tmp = repoName.split('/');
        owner = tmp[0];
        repo = tmp[1];

        octokit = new github.GitHub(token);
        context = github.context;

        let plugins = [];
        if (rulesFileName) {
            plugins = await actionHelper.processLineByLine(`${workspace}/${zapWorkDir}/${rulesFileName}`);
        }

        let command = (`docker run --user root -v ${workspace}/${zapWorkDir}:/zap/wrk/:rw --network="host" ` +
            `-t ${docker_name} zap-baseline.py -t ${target} -g gen.conf -J ${jsonReportName} -w ${mdReportName}`);

        if (plugins.length !== 0) {
            command = command + ` -c ${zapWorkDir}/${rulesFileName}`
        }

        try {
            let result = await exec.exec(command);
        } catch (err) {
            console.log('The ZAP Baseline scan has failed, starting to analyze the alerts. err: ' + err.toString());
        }
        let res = await processReport(token, workspace, branch, plugins, currentRunnerID);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();

async function processReport(token, workSpace, branch, plugins, currentRunnerID) {

    let currentReport;
    let previousReport = {};
    let create_new_issue = false;
    let openIssue = null;
    let previousRunnerID;

    let issues = await octokit.search.issuesAndPullRequests({
        q: `is:issue+:is:open+repo:${owner}/${repo}+ZAP+Scan+Baseline+Report`,
        sort: 'updated'
    });

    // If there is no existing open issue then create a new issue
    if (issues.data.items.length === 0) {
        create_new_issue = true;
    }else {
        openIssue = issues.data.items[0];

        // If there is no comments then read the body
        if (openIssue['comments'] === 0) {
            previousRunnerID = actionHelper.getRunnerID(openIssue['body']);
        }else {
            let comments = await octokit.issues.listComments({
                owner: owner,
                repo: repo,
                issue_number: openIssue['number']
            });

            // TODO get the latest comment by user:github actions
            let lastCommentIndex = comments['data'].length - 1;
            previousRunnerID = actionHelper.getRunnerID(comments['data'][lastCommentIndex]['body'])
        }

        if (previousRunnerID !== null) {
            previousReport = await actionHelper.readPreviousReport(octokit, owner, repo, workSpace, previousRunnerID);
            if (previousReport === undefined) {
                create_new_issue = true;
            }
        }
    }

    try {
        let jReportFile = fs.readFileSync(`${workSpace}/${zapWorkDir}/${jsonReportName}`);
        currentReport = JSON.parse(jReportFile);
    } catch (e) {
        console.log('Failed to locate the json report generated by ZAP Scan!');
        return
    }

    if (plugins.length !== 0) {
        console.log(`${plugins.length} plugins will be ignored according to the rules configuration`);
        currentReport = await actionHelper.filterReport(currentReport, plugins);

        if (previousReport !== undefined) {
            previousReport = await actionHelper.filterReport(previousReport, plugins);
        }
    }

    let newAlertExits = actionHelper.checkIfAlertsExists(currentReport);

    console.log(`Alerts present in the current report: ${newAlertExits}`);

    if (!newAlertExits) {
        // If no new alerts have been found close the issue
        console.log('No new alerts have been identified by the ZAP Scan');
        if (openIssue != null && openIssue.data.state === 'open') {
            // close the issue with a comment
            try{
                await octokit.issues.createComment({
                    owner: owner,
                    repo: repo,
                    issue_number: openIssue.data.number,
                    body: 'All the alerts have been resolved during the last ZAP Scan!'
                });
                await octokit.issues.update({
                    owner: owner,
                    repo: repo,
                    issue_number: openIssue.data.number,
                    state: 'closed'
                });
                console.log(`No alerts have been found, closing the issue #${openIssue.data.number}`)
            }catch (err) {
                console.log(`Error occurred while closing the issue with a comment! err: ${err}`)
            }
        }else if (openIssue != null && openIssue.data.state === 'closed') {
            console.log('No alerts found by ZAP Scan and no active issue is found in the repository, exiting the program!');
        }
        return;
    }

    let runnerInfo = `RunnerID:${currentRunnerID}`;

    if (create_new_issue) {
        let res = await createNewIssue(workSpace, currentReport, runnerInfo);
    } else {
        let siteClone = actionHelper.generateDifference(currentReport, previousReport);
        if (currentReport.updated) {
            console.log('The current report has changes compared to the previous report');
            try{
                let msg = actionHelper.createMessage(siteClone, runnerInfo);
                await octokit.issues.createComment({
                    owner: owner,
                    repo: repo,
                    issue_number: openIssue['number'],
                    body: msg
                });

                console.log(`The issue #${openIssue.number} has been updated with the latest ZAP scan results!`);
                console.log('ZAP Scan process completed successfully!');
            }catch (err) {
                console.log(`Error occurred while updating the issue #${openIssue.number} with the latest ZAP scan: ${err}`)
            }
        } else {
            console.log('No changes have been observed from the previous scan and current scan!, exiting the program!')
        }
    }
}


async function createNewIssue(workSpace, jsonReport, runnerInfo) {
    let msg = actionHelper.createMessage(jsonReport['site'], runnerInfo);

    const newIssue = await octokit.issues.create({
        owner: owner,
        repo: repo,
        title: 'ZAP Scan Baseline Report',
        body: msg
    });

    console.log(`Created a new issue #${newIssue.data.number} for the ZAP Scan.`);
    console.log(`Process completed successfully, and the new alerts have been reported in the issue ${newIssue.data.number}!`);
}
