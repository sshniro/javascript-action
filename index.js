const core = require('@actions/core');
const exec = require('@actions/exec');
const fs = require('fs');
const yaml = require('js-yaml')
const github = require('@actions/github');
const _ = require('lodash');

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

        let jsonReportName = 'report_json.json';

        octokit = new github.GitHub(token);
        context = github.context;

        let plugins = [];
        if (rulesFileName) {
            plugins = await actionHelper.processLineByLine(`${workspace}/${zapWorkDir}/${rulesFileName}`);
        }

        let command = (`docker run --user root -v ${workspace}:/zap/wrk/:rw -t ${docker_name} zap-baseline.py -t ${target} -g gen.conf -J ${jsonReportName} -w ${mdReportName}`);

        if (plugins.length !== 0) {
            command = command + ` -c ${zapWorkDir}/${rulesFileName}`
        }

        try {
            let result = await exec.exec(command);
        } catch (err) {
            console.log('The ZAP Baseline scan has failed, starting to analyze the alerts. err: ' + err.toString());
        }
        let res = await processReport(token, repoName, workspace, zapYAMLFileName, branch, jsonReportName, zapWorkDir, plugins, mdReportName);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();


async function processReport(token, repoName, workSpace, zapYAMLFileName, branch, jsonReportName, zapWorkDir, plugins, mdReportName) {

    let jsonReport;
    let configReport;
    let originalReport;
    let create_new_issue = false;
    let issue = null;

    let tmp = repoName.split('/');
    let owner = tmp[0];
    let repo = tmp[1];

    try {
        let jReportFile = fs.readFileSync(workSpace + "/" + jsonReportName);
        jsonReport = JSON.parse(jReportFile);
    } catch (e) {
        console.log('Failed to locate the json report generated by ZAP Scan!');
        return
    }

    try {
        let yamlFile = fs.readFileSync(`${workSpace}/${zapWorkDir}/${zapYAMLFileName}`);
        configReport = yaml.safeLoad(yamlFile);

        if (configReport === undefined) {
            create_new_issue = true;
        }

        if (configReport.hasOwnProperty("issue")){
            try{
                issue = await octokit.issues.get({
                    owner: owner,
                    repo: repo,
                    issue_number: configReport.issue,
                });
                if (issue.data.state === 'closed') {
                    create_new_issue = true;
                }
            }catch (issueError) {
                console.log(issueError.toString());
            }

        }
    } catch (e) {
        console.log('Previous ZAP results are not available in the dir, creating new Issue!');
        create_new_issue = true;
    }

    originalReport = JSON.parse(JSON.stringify(jsonReport));
    if (plugins.length !== 0) {
        jsonReport = await actionHelper.filterReport(jsonReport, plugins);
        configReport = await actionHelper.filterReport(configReport, plugins);
    }
    let newAlertExits = actionHelper.checkIfAlertsExists(jsonReport);
    let prevAlertExits = actionHelper.checkIfAlertsExists(jsonReport);

    if (!newAlertExits) {
        // If no new alerts have been found close the issue
        if (issue != null && issue.data.state === 'open') {
            // close the issue with comment
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

    // New alerts have been identified but all previous alerts were ignored by the rules file
    if (!prevAlertExits) {
        create_new_issue = true;
    }

    let mdLink = `https://github.com/${repoName}/blob/${branch}/${zapWorkDir}/${mdReportName}`;

    if (create_new_issue) {

        let msg = actionHelper.createMessage(jsonReport['site'], mdLink);

        const newIssue = await octokit.issues.create({
            owner: owner,
            repo: repo,
            title: 'ZAP Scan Baseline Report',
            body: msg
        });
        console.log(`Created a new issue #${newIssue.data.number} for the ZAP Scan.`);

        jsonReport.issue = newIssue.data.number;

        let yamlString = Buffer.from(yaml.safeDump(jsonReport)).toString("base64");
        let reportString = await actionHelper.readMDFile(`${workSpace}/${mdReportName}`);

        let upsertResponse = await createOrUpdateReportAndConfig(yamlString, reportString, zapYAMLFileName, mdReportName, zapWorkDir, repo, owner);
        if (upsertResponse.reportUpsertResult != null && upsertResponse.zapYAMLUpsertResult != null) {
            console.log(`Process completed successfully, and the new alerts have been reported in the issue ${newIssue.data.number}!`);
        }
    } else {
        let siteClone = actionHelper.generateDifference(jsonReport, configReport);

        if (jsonReport.updated) {

            try{
                let msg = actionHelper.createMessage(siteClone, mdLink);
                await octokit.issues.createComment({
                    owner: owner,
                    repo: repo,
                    issue_number: configReport.issue,
                    body: msg
                });
                console.log(`The issue #${issue.data.number} has been updated with the latest ZAP Scan!`);

                let yamlString = Buffer.from(yaml.safeDump(originalReport)).toString("base64");
                let reportString = await actionHelper.readMDFile(`${workSpace}/${mdReportName}`);

                let upsertResponse = await createOrUpdateReportAndConfig(yamlString, reportString, zapYAMLFileName, mdReportName, zapWorkDir, repo, owner);
                if (upsertResponse.reportUpsertResult != null && upsertResponse.zapYAMLUpsertResult != null) {
                    console.log('ZAP Scan process completed successfully!');
                }
            }catch (err) {
                console.log(`Error occurred while updating the repository with the latest ZAP Scan: ${err}`)
            }

        } else {
            console.log('No changes have been observed from the previous scan and current scan!, exiting the program!')
        }
    }
}


async function createOrUpdateReportAndConfig(yamlString, reportString, configFileName, reportName, zapPath, repo, owner) {
    let zapFolderContents = [];
    try {
        zapFolderContents = await octokit.repos.getContents({
            owner: owner,
            repo: repo,
            path: zapPath
        });
    } catch (e) {
        console.log('The directory contents are empty! Creating new files for zap and report.')
    }

    // Find if the files already exists in the repository
    let zapFile = _.find(zapFolderContents.data, {name: configFileName});
    let reportFile = _.find(zapFolderContents.data, {name: reportName});

    let zapYAMLUpsertResult = null;
    if (zapFile) {
        zapYAMLUpsertResult = await updateFile(owner, repo, `${zapPath}/${configFileName}`, 'updating new zap config', yamlString, zapFile.sha);

    } else {
        zapYAMLUpsertResult = await createFile(owner, repo, `${zapPath}/${configFileName}`, 'adding new zap config', yamlString);

    }
    let reportUpsertResult = null;
    if (reportFile) {
        reportUpsertResult = await updateFile(owner, repo, `${zapPath}/${reportName}`, 'updating the report', reportString, reportFile.sha);
    } else {
        reportUpsertResult = await createFile(owner, repo, `${zapPath}/${reportName}`, 'adding the new report', reportString);
    }

    return {reportUpsertResult: reportUpsertResult, zapYAMLUpsertResult: zapYAMLUpsertResult}
}


async function createFile(owner, repo, path, message, content) {
    let res = null;
    try {
        res = await octokit.repos.createOrUpdateFile({
            owner: owner,
            repo: repo,
            path: path,
            message: message,
            content: content
        });
    } catch (err) {
        console.log(`Error Occurred while creating the file: ${path} `, err);
    }
    return res;
}

async function updateFile(owner, repo, path, message, content, sha) {
    let res = null;
    try {
        res = await octokit.repos.createOrUpdateFile({
            owner: owner,
            repo: repo,
            path: path,
            message: message,
            content: content,
            sha: sha
        });
    } catch (err) {
        console.log(`Error Occurred while updating the file: ${path} `, err);
    }
    return res;
}
