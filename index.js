const core = require('@actions/core');
const exec = require('@actions/exec');
const wait = require('./wait');
const fs = require('fs');
const yaml = require('js-yaml')
const github = require('@actions/github');
const _ = require('lodash');


let octokit;
let context;

// most @actions toolkit packages have async methods
async function run() {
  try {
    let workspace = core.getInput('workspace');
    let token = core.getInput('git_token');
    let repoName = core.getInput('repo_name');
    let zapWorkDir = core.getInput('zap_word_dir');
    let branch = core.getInput('branch');
    let reportName = core.getInput('report_name');
    let zap_config_file_name = core.getInput('zap_conf_file_name');
    let docker_name = core.getInput('docker_name');
    let target = core.getInput('target');

    console.log('workspace' + workspace);
    console.log('token' + token);
    console.log('repodetails' + repoName);
    console.log('zapWorkDir' + zapWorkDir);
    console.log('branch' + branch);
    console.log('report_name' + reportName);

    octokit = new github.GitHub(token);
    context = github.context;

    let command = (`docker run --user root -v ${workspace}:/zap/wrk/:rw \
    -t ${docker_name} zap-baseline.py -t ${target} -g gen.conf -J ${reportName} || echo 0`);

    try {
      // let result = await exec.exec(command);
    }
    catch(err) {
      console.log(err);
    }
    compute(token, repoName, workspace, zap_config_file_name, branch, reportName, zapWorkDir);
    // await exec.exec(`cat ${workspace}/report_json.json`);
    core.setOutput('time', new Date().toTimeString());
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run();


function createMessage(sites) {

  console.log('starting to create the message')

  const NXT_LINE = '\n';
  const TAB = "\t";
  const BULLET = "-";
  let msg = '';

  sites.forEach((site => {
    msg = msg + `${BULLET} Site[${site["@name"]}] ${NXT_LINE}`
    if(site.hasOwnProperty('alerts')){
      msg = `${msg} ${TAB} **New Alerts** ${NXT_LINE}`;
      site.alerts.forEach((alert) => {
        msg = msg + TAB + `${BULLET} Alert[${alert.pluginid}] count(${alert.instances.length}): ${alert.name} ${NXT_LINE}`
      });
    }

    if(site.hasOwnProperty('removedAlerts')){
      msg = `${msg} ${TAB} **Removed Alerts** ${NXT_LINE}`;
      site.removedAlerts.forEach((alert) => {
        msg = msg + TAB + `${BULLET} Alert[${alert.pluginid}] count(${alert.instances.length}): ${alert.name} ${NXT_LINE}`
      });
    }

    if(site.hasOwnProperty('updatedAlerts')){
      msg = `${msg} ${TAB} **Updated Alerts** ${NXT_LINE}`;
      site.updatedAlerts.forEach((alert) => {
        msg = msg + TAB + `${BULLET} Alert[${alert.pluginid}] count(${alert.instances.length}): ${alert.name} 
                added: ${alert.added} , removed: ${alert.removed}${NXT_LINE}`
      });
    }

    msg = msg + NXT_LINE
  }));

  return msg;
}


async function compute(token, repo_name, config_file_dir, config_file_name, branch, report_name, zapPath) {

  let jsonReport;
  let configReport;
  let create_new_issue = false;
  let issue = null;

  let tmp = repo_name.split('/');
  let owner = tmp[0];
  let repo = tmp[1];

  try{
    let jReportFile = fs.readFileSync(config_file_dir + "/" + report_name);
    jsonReport = JSON.parse(jReportFile);

    console.log('sucessfully loaded the json file');
    console.log(JSON.stringify(jsonReport))

    let alertsFound = false;
    jsonReport['site'].forEach((site) => {
      if (site['alerts'].length !== 0) {
        alertsFound = true
      }
    });

    if(!alertsFound){
      console.log('no alerts found');
      return;
    }
  }catch (e) {
    console.log('Cannot find the report exiting program');
    return
  }


  try{
    let yamlFile = fs.readFileSync(  `${config_file_dir}/${zapPath}/${config_file_name}`);
    configReport = yaml.safeLoad(yamlFile);

    if (configReport === undefined) {
      create_new_issue = true;
    }

    if(configReport.hasOwnProperty("issue"))
      issue = await octokit.issues.get({
        owner: owner,
        repo: repo,
        number: configReport.issue,
      });

    if (issue.state === 'closed') {
      create_new_issue = true;
    }

  }catch (e) {
    console.log('Cannot find the zap configurations')
    create_new_issue = true;
  }

  if (create_new_issue) {
    console.log('starting to create an issue');

    let msg = createMessage(jsonReport['site']);

    console.log('message is' + msg);
    const newIssue = await octokit.issues.create({
      owner: owner,
      repo: repo,
      title: 'ZAP Scan Baseline Report',
      body: msg
    });
    jsonReport.issue = newIssue.data.number;

    let yamlDump = Buffer.from(yaml.safeDump(jsonReport)).toString("base64");
    // fs.writeFileSync(`${config_file_dir}/${zapPath}/${config_file_name}`, yamlDump);

    let zapFolderContents = await octokit.repos.getContents({
      owner: owner,
      repo: repo,
      path: zapPath
    });

    let zapFile = _.find(zapFolderContents.data, {name: config_file_name});
    if (zapFile) {
      let result = await updateFile(owner, repo, `${zapPath}/${config_file_name}`, 'adding new zap config', (yamlDump), zapFile.sha);
    }else {
      let result = await createFile(owner, repo, `${zapPath}/${config_file_name}`, 'adding new zap config', (yamlDump));
    }

    let reportFile = _.find(zapFolderContents.data, {name: repo_name});
    let jsonReportBase64 = Buffer.from(JSON.stringify(jsonReport)).toString("base64");

    if (reportFile) {
      let result = await updateFile(owner, repo, `${zapPath}/${report_name}`, 'adding new zap config', jsonReportBase64, reportFile.sha);
    } else {
      let result = await createFile(owner, repo, `${zapPath}/${report_name}`, 'adding new zap config', jsonReportBase64);
    }
    console.log('The process have been completed!');
    return
  }

  console.log('hello world');
  // Find the difference and update the values
  let siteClone = generateDifference(jsonReport, configReport);
  let msg = createMessage(siteClone);
  console.log(msg);
  console.log(msg)
  return;
  // TODO Create a comment

  // TODO commit the zap file and report file

  // TODO exit

}

async function createFile(owner, repo, path, message, content) {
  return await octokit.repos.createOrUpdateFile({
    owner: owner,
    repo: repo,
    path: path,
    message: message,
    content: content
  });
}

async function updateFile(owner, repo, path, message, content, sha) {
  return await octokit.repos.createOrUpdateFile({
    owner: owner,
    repo: repo,
    path: path,
    message: message,
    content: content,
    sha: sha
  });
}

function generateDifference(jsonReport, configReport) {
  // If have to update a file
  let siteClone = [];
  jsonReport.site.forEach((site) => {
    let previousSite = _.remove(configReport.site, {'@name': site['@name']})
    if (previousSite === undefined) {
      siteClone.push(previousSite)
    } else {
      let newSite = JSON.parse(JSON.stringify(site));
      let alerts = site.alerts;
      let previousAlerts = previousSite[0].alerts;

      let updatedAlerts = [];
      let newAlerts = _.differenceBy(alerts, previousAlerts, 'pluginid');
      let removedAlerts = _.differenceBy(previousAlerts, alerts, 'pluginid');
      let existingAlerts = _.intersectionBy(previousAlerts, alerts, 'pluginid');

      existingAlerts.forEach((existing) => {
        let one = _.find(previousAlerts, {pluginid: existing.pluginid})
        let two = _.find(alerts, {pluginid: existing.pluginid})

        let previousInstances = one['instances'];
        let newInstances = two['instances'];

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
          two.removed = removeCount;
          two.added = addCount;
          updatedAlerts.push(two);
        }

      });

      newSite.alerts = newAlerts;
      newSite.removedAlerts = removedAlerts;
      if (updatedAlerts.length !== 0) {
        newSite.updatedAlerts = updatedAlerts;
      }
      siteClone.push(newSite);
    }
  });
  return siteClone;
}

// run();
