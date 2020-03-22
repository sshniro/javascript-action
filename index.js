const core = require('@actions/core');
const exec = require('@actions/exec');
const fs = require('fs');
const yaml = require('js-yaml')
const github = require('@actions/github');
const _ = require('lodash');
const request = require('request');
// var unzip = require('unzip');

// require('./dev-helper').fillEnvironmentVariables();
const actionHelper = require('./action-helper');

let octokit;
let context;

async function run() {

    try {
        let workspace = core.getInput('workspace');
        let token = core.getInput('token');
        let repoName = core.getInput('repo_name');
        let zapWorkDir = core.getInput('zap_work_dir');
        let branch = core.getInput('branch');
        let mdReportName = core.getInput('report_name');
        let zapYAMLFileName = core.getInput('zap_conf_file_name');
        let docker_name = core.getInput('docker_name');
        let target = core.getInput('target');
        let rulesFileName = core.getInput('rules_file_name');
        let githubRunID = core.getInput('github_run_id');

        console.log('starting the program')
        console.log('github run id :' + githubRunID);

        if (!fs.existsSync(zapWorkDir)){
            fs.mkdirSync(`${workspace}/${zapWorkDir}`);
        }

        let jsonReportName = 'report_json.json';

        octokit = new github.GitHub(token);
        context = github.context;

        let plugins = [];
        if (rulesFileName) {
            plugins = await actionHelper.processLineByLine(`${workspace}/${zapWorkDir}/${rulesFileName}`);
        }

        let command = (`docker run --user root -v ${workspace}/${zapWorkDir}:/zap/wrk/:rw --network="host" -t ${docker_name} zap-baseline.py -t ${target} -g gen.conf -J ${jsonReportName} -w ${mdReportName}`);

        if (plugins.length !== 0) {
            command = command + ` -c ${zapWorkDir}/${rulesFileName}`
        }

        try {
            let result = await exec.exec(command);
        } catch (err) {
            console.log('The ZAP Baseline scan has failed, starting to analyze the alerts. err: ' + err.toString());
        }
        let res = await processReport(token, repoName, workspace, zapYAMLFileName, branch, jsonReportName, zapWorkDir, plugins, mdReportName, githubRunID);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();


async function processReport(token, repoName, workSpace, zapYAMLFileName, branch, jsonReportName, zapWorkDir, plugins, mdReportName, runnerID) {

    let jsonReport;
    let configReport = {};
    let originalReport;
    let create_new_issue = false;
    let issue = null;

    let tmp = repoName.split('/');
    let owner = tmp[0];
    let repo = tmp[1];

    let issueTitle = 'ZAP Scan Baseline Report';

    let issues = await octokit.search.issuesAndPullRequests({
        q: `is:issue+:is:open+repo:${repoName}+ZAP+Scan+Baseline+Report`,
        // q: `is:issue+:is:open+repo:${repoName}+test`,
        sort: 'updated'
    });

    // If there is no existing open issue then create a new issue
    if (issues.data.items.length === 0) {
        create_new_issue = true;
    }else {
        issue = issues.data.items[0];

        // TODO: Read the last comment and get the runner ID

        // TODO: Download the last report yaml file
    }

    try {
        let jReportFile = fs.readFileSync(`${workSpace}/${zapWorkDir}/${jsonReportName}`);
        jsonReport = JSON.parse(jReportFile);
    } catch (e) {
        console.log('Failed to locate the json report generated by ZAP Scan!');
        return
    }

    // The following section loads the previous report yaml file
    if(!create_new_issue){
        try {
            let yamlFile = fs.readFileSync(`${workSpace}/${zapWorkDir}/${zapYAMLFileName}`);
            configReport = yaml.safeLoad(yamlFile);

            // If the file is empty create a new issue
            if (configReport === undefined) {
                create_new_issue = true;
            }

        } catch (e) {
            console.log('Previous ZAP results are not available in the dir, creating new Issue!');
            create_new_issue = true;
        }
    }

    // Deep clone the report for further processing
    originalReport = JSON.parse(JSON.stringify(jsonReport));
    if (plugins.length !== 0) {
        console.log(`${plugins.length} plugins will be ignored according to the rules configuration`);
        jsonReport = await actionHelper.filterReport(jsonReport, plugins);
        configReport = await actionHelper.filterReport(configReport, plugins);
    }

    let newAlertExits = actionHelper.checkIfAlertsExists(jsonReport);

    console.log(`New alerts exists: ${newAlertExits}`);

    if (!newAlertExits) {
        // If no new alerts have been found close the issue
        console.log('No new alerts have been identified by the ZAP Scan');
        if (issue != null && issue.data.state === 'open') {
            // close the issue with a comment
            try{
                await octokit.issues.createComment({
                    owner: owner,
                    repo: repo,
                    issue_number: issue.data.number,
                    body: 'All the alerts have been resolved during the last ZAP Scan!'
                });
                await octokit.issues.update({
                    owner: owner,
                    repo: repo,
                    issue_number: issue.data.number,
                    state: 'closed'
                });
                console.log(`No alerts have been found, closing the issue #${issue.data.number}`)
            }catch (err) {
                console.log(`Error occurred while closing the issue with a comment! err: ${err}`)
            }
        }else if (issue != null && issue.data.state === 'closed') {
            console.log('No alerts found by ZAP Scan and no active issue is found in the repository, exiting the program!');
        }
        return;
    }

    let runnerInfo = `RunnerID:${runnerID}`;

    if (create_new_issue) {
        let res = await createNewIssue(owner, repo, workSpace, zapYAMLFileName, jsonReport, runnerInfo, zapWorkDir);
        console.log(res);
    } else {
        let siteClone = actionHelper.generateDifference(jsonReport, configReport);

        if (jsonReport.updated) {

            try{
                let msg = actionHelper.createMessage(siteClone, runnerInfo);
                await octokit.issues.createComment({
                    owner: owner,
                    repo: repo,
                    issue_number: configReport.issue,
                    body: msg
                });
                console.log(`The issue #${issue.data.number} has been updated with the latest ZAP Scan!`);

                let yamlString = Buffer.from(yaml.safeDump(originalReport)).toString("base64");
                fs.writeFileSync(`${workSpace}/${zapWorkDir}/${zapYAMLFileName}`, yamlString);

                console.log('ZAP Scan process completed successfully!');
            }catch (err) {
                console.log(`Error occurred while updating the repository with the latest ZAP Scan: ${err}`)
            }

        } else {
            console.log('No changes have been observed from the previous scan and current scan!, exiting the program!')
        }
    }
}


async function createNewIssue(owner, repo, workSpace, zapYAMLFileName, jsonReport, runnerInfo, zapWrkDir) {
    let msg = actionHelper.createMessage(jsonReport['site'], runnerInfo);

    const newIssue = await octokit.issues.create({
        owner: owner,
        repo: repo,
        title: 'ZAP Scan Baseline Report',
        body: msg
    });

    console.log(`Created a new issue #${newIssue.data.number} for the ZAP Scan.`);

    fs.writeFileSync(`${workSpace}/${zapWrkDir}/${zapYAMLFileName}`, yaml.safeDump(jsonReport));
    console.log(`Process completed successfully, and the new alerts have been reported in the issue ${newIssue.data.number}!`);
}
