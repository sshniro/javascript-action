const core = require('@actions/core');
const exec = require('@actions/exec');
const wait = require('./wait');
const fs = require('fs');
const yaml = require('js-yaml')
const github = require('@actions/github');
const _ = require('lodash');
const readline = require('readline');

// const helper = require('./dev-helper')
// helper.fillEnvironmentVariables();

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
        let zap_config_file_name = core.getInput('zap_conf_file_name');
        let docker_name = core.getInput('docker_name');
        let target = core.getInput('target');
        let rulesFileName = core.getInput('rules_file_name');

        let jsonReportName = 'report_json.json';

        console.log('workspace: ' + workspace);
        console.log('token: ' + token);
        console.log('repoName: ' + repoName);
        console.log('zapWorkDir: ' + zapWorkDir);
        console.log('branch: ' + branch);
        console.log('md_report_name: ' + mdReportName);
        console.log('zap_config_file_name: ' + zap_config_file_name);
        console.log('docker_name: ' + docker_name);
        console.log('target: ' + target);
        console.log('rulesFileName: ' + rulesFileName);

        octokit = new github.GitHub(token);
        context = github.context;
        let plugins = [];
        if (rulesFileName) {
            plugins = await processLineByLine(`${workspace}/${zapWorkDir}/${rulesFileName}`);
        }

        let command = (`docker run --user root -v ${workspace}:/zap/wrk/:rw -t ${docker_name} zap-baseline.py -t ${target} -g gen.conf -J ${jsonReportName} -w ${mdReportName}`);

        if (plugins.length !== 0) {
            command = command + ` -c ${zapWorkDir}/${rulesFileName}`
        }

        try {
            // let result = await exec.exec(command);
        } catch (err) {
            console.log(err);
        }
        let res = await compute(token, repoName, workspace, zap_config_file_name, branch, jsonReportName, zapWorkDir, plugins, mdReportName);
        core.setOutput('time', new Date().toTimeString());
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();

async function processLineByLine(tsvFile) {
    let plugins = [];
    try {
        const fileStream = fs.createReadStream(tsvFile);
        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });
        for await (const line of rl) {
            if (line.charAt(0) !== '#') {
                let tmp = line.split('\t');
                if (tmp[0].trim() !== '' && tmp[1].trim().toUpperCase() === 'IGNORE') {
                    plugins.push(tmp[0].trim());
                }
            }
        }
    } catch (err) {
        console.log('Error when reading the rules file!')
    }

    return plugins;
}

function createMessage(sites) {
    const NXT_LINE = '\n';
    const TAB = "\t";
    const BULLET = "-";
    let msg = '';

    sites.forEach((site => {
        msg = msg + `${BULLET} Site[${site["@name"]}] ${NXT_LINE}`
        if (site.hasOwnProperty('alerts')) {
            if (site.alerts.length !== 0) {
                msg = `${msg} ${TAB} **New Alerts** ${NXT_LINE}`;
                site.alerts.forEach((alert) => {
                    msg = msg + TAB + `${BULLET} Alert[${alert.pluginid}] count(${alert.instances.length}): ${alert.name} ${NXT_LINE}`
                });
            }
        }

        if (site.hasOwnProperty('removedAlerts')) {
            if (site.removedAlerts.length !== 0) {
                msg = `${msg} ${TAB} **Removed Alerts** ${NXT_LINE}`;
                site.removedAlerts.forEach((alert) => {
                    msg = msg + TAB + `${BULLET} Alert[${alert.pluginid}] count(${alert.instances.length}): ${alert.name} ${NXT_LINE}`
                });
            }

        }

        if (site.hasOwnProperty('updatedAlerts')) {
            if (site.updatedAlerts.length !== 0) {
                msg = `${msg} ${TAB} **Updated Alerts** ${NXT_LINE}`;
                site.updatedAlerts.forEach((alert) => {
                    msg = msg + TAB + `${BULLET} Alert[${alert.pluginid}] count(${alert.instances.length}): ${alert.name} 
                added: ${alert.added} , removed: ${alert.removed}${NXT_LINE}`
                });
            }
        }

        msg = msg + NXT_LINE
    }));

    return msg;
}

async function filterReport(jsonReport, plugins) {
    jsonReport.forEach();
    return jsonReport;
}

async function compute(token, repoName, workSpace, configFileName, branch, jsonReportName, zapPath, plugins, mdReportName) {

    let jsonReport;
    let configReport;
    let create_new_issue = false;
    let issue = null;

    let tmp = repoName.split('/');
    let owner = tmp[0];
    let repo = tmp[1];

    try {
        let jReportFile = fs.readFileSync(workSpace + "/" + jsonReportName);
        jsonReport = JSON.parse(jReportFile);

        let alertsFound = false;
        jsonReport['site'].forEach((site) => {
            if (site['alerts'].length !== 0) {
                alertsFound = true
            }
        });

        if (!alertsFound) {
            console.log('no alerts found by ZAP Scan, exiting the program!');
            return;
        }
    } catch (e) {
        console.log('Cannot find the report exiting program');
        return
    }

    let originalReport = JSON.parse(JSON.stringify(jsonReport));


    try {
        let yamlFile = fs.readFileSync(`${workSpace}/${zapPath}/${configFileName}`);
        configReport = yaml.safeLoad(yamlFile);

        if (configReport === undefined) {
            create_new_issue = true;
        }

        if (configReport.hasOwnProperty("issue"))
            issue = await octokit.issues.get({
                owner: owner,
                repo: repo,
                number: configReport.issue,
            });

        if (issue.data.state === 'closed') {
            create_new_issue = true;
        }

    } catch (e) {
        console.log('Previous ZAP results are not available in the dir, creating new Issue!');
        create_new_issue = true;
    }

    if (create_new_issue) {
        let msg = createMessage(jsonReport['site']);
        const newIssue = await octokit.issues.create({
            owner: owner,
            repo: repo,
            title: 'ZAP Scan Baseline Report',
            body: msg
        });
        jsonReport.issue = newIssue.data.number;

        // fs.writeFileSync(`${config_file_dir}/${zapPath}/${config_file_name}`, yamlDump);
        let yamlString = yaml.safeDump(jsonReport);
        // let reportString = JSON.stringify(jsonReport);
        let reportString = await readMDFile(`${workSpace}/${mdReportName}`);

        let upsertResponse = await createOrUpdateReportAndConfig(yamlString, reportString, configFileName, jsonReportName, zapPath, repo, owner);
        if (upsertResponse.reportUpsertResult != null && upsertResponse.zapYAMLUpsertResult != null) {
            console.log('process completed successfully!');
        }
    } else {
        console.log('Updating the issue with new changed');
        let siteClone = generateDifference(jsonReport, configReport);

        if (jsonReport.updated) {
            let msg = createMessage(siteClone);
            console.log('The following is the change in report', msg)
            let commentRes = await octokit.issues.createComment({
                owner: owner,
                repo: repo,
                issue_number: configReport.issue,
                body: msg
            });

            let yamlString = yaml.safeDump(jsonReport);
            // let reportString = JSON.stringify(jsonReport);
            let reportString = await readMDFile(`${workSpace}/${mdReportName}`);

            let upsertResponse = await createOrUpdateReportAndConfig(yamlString, reportString, configFileName, jsonReportName, zapPath, repo, owner);
            if (upsertResponse.reportUpsertResult != null && upsertResponse.zapYAMLUpsertResult != null) {
                console.log('process completed successfully!');
            }
        } else {
            console.log('No changes have been observed!')
        }
    }
}

async function readMDFile(reportName) {
    let res = '';
    try {
        res = fs.readFileSync(reportName, {encoding: 'base64'});
    } catch (err) {
        console.log('error while reading the markdown file!')
    }
    return res;
}

async function createOrUpdateReportAndConfig(yamlString, jsonString, configFileName, reportName, zapPath, repo, owner) {
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

    let zapFile = _.find(zapFolderContents.data, {name: configFileName});
    let reportFile = _.find(zapFolderContents.data, {name: reportName});

    let yamlDump = Buffer.from(yamlString).toString("base64");
    let jsonReportBase64 = Buffer.from(JSON.stringify(jsonString)).toString("base64");

    let zapYAMLUpsertResult = null;
    if (zapFile) {
        zapYAMLUpsertResult = await updateFile(owner, repo, `${zapPath}/${configFileName}`, 'updating new zap config', (yamlDump), zapFile.sha);

    } else {
        zapYAMLUpsertResult = await createFile(owner, repo, `${zapPath}/${configFileName}`, 'adding new zap config', (yamlDump));

    }
    let reportUpsertResult = null;
    if (reportFile) {
        reportUpsertResult = await updateFile(owner, repo, `${zapPath}/${reportName}`, 'updating the report', jsonReportBase64, reportFile.sha);
    } else {
        reportUpsertResult = await createFile(owner, repo, `${zapPath}/${reportName}`, 'adding the new report', jsonReportBase64);
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

function generateDifference(newReport, oldReport) {
    // If have to update a file
    newReport.updated = false;
    let siteClone = [];
    newReport.site.forEach((newReportSite) => {
        // Check if the new report site already exists in the previous report
        let previousSite = _.filter(oldReport.site, s => s['@name'] === newReportSite['@name']);
        // If does not exists add it to the array without further processing
        if (previousSite.length === 0) {
            newReport.updated = true;
            siteClone.push(newReportSite);
        } else {
            // deep clone the variable for further processing
            let newSite = JSON.parse(JSON.stringify(newReportSite));
            let alerts = newReportSite.alerts;
            let previousAlerts = previousSite[0].alerts;

            let updatedAlerts = [];
            let newAlerts = _.differenceBy(alerts, previousAlerts, 'pluginid');
            let removedAlerts = _.differenceBy(previousAlerts, alerts, 'pluginid');
            let existingAlerts = _.intersectionBy(previousAlerts, alerts, 'pluginid');

            existingAlerts.forEach((existing) => {
                let prevAl = _.find(previousAlerts, {pluginid: existing.pluginid});
                let newAl = _.find(alerts, {pluginid: existing.pluginid});

                let previousInstances = prevAl['instances'];
                let newInstances = newAl['instances'];

                let removeCount = 0;
                let addCount = 0;

                previousInstances.forEach(preObj => {
                    const found = newInstances.find(newObj => JSON.stringify(newObj) === JSON.stringify(preObj));
                    if (!found) {
                        removeCount++;
                    }
                });

                newInstances.forEach(newObj => {
                    const found = previousInstances.find(prevObj => JSON.stringify(prevObj) === JSON.stringify(newObj));
                    if (!found) {
                        addCount++;
                    }
                });

                if (removeCount !== 0 || addCount !== 0) {
                    newAl.removed = removeCount;
                    newAl.added = addCount;
                    updatedAlerts.push(newAl);
                }

            });

            newSite.alerts = newAlerts;
            newSite.removedAlerts = removedAlerts;
            if (updatedAlerts.length !== 0) {
                newSite.updatedAlerts = updatedAlerts;
            }
            siteClone.push(newSite);

            if (newAlerts.length !== 0 || removedAlerts.length !== 0 || updatedAlerts.length !== 0) {
                newReport.updated = true;
            }
        }
    });
    return siteClone;
}
