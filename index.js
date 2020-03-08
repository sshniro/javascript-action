const core = require('@actions/core');
const exec = require('@actions/exec');
const wait = require('./wait');
const fs = require('fs');
const yaml = require('js-yaml')
const github = require('@actions/github');
const _ = require('lodash');




// most @actions toolkit packages have async methods
async function run() {
  try {
    const wd = core.getInput('workspace');
    const dockerImage = core.getInput('docker');
    const hooks = core.getInput('hookFile');
    // let wd = '/home/nirojan/za/javascript-action'


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

    // fs.writeFileSync(wd + '/niro.txt', 'hwllo worl');

    const options = {};
    options.failOnStdErr = false;
    options.silent = true;

    // let path = '/home/nirojan/za/javascript-action'
    let command = (`docker run --user root -v ${workspace}:/zap/wrk/:rw \
    -t ${docker_name} zap-baseline.py -t ${target} -g gen.conf -J ${reportName} || echo 0`);

    let result = await exec.exec(command, options);

    // fs.writeFileSync('Dockerfile', pythonCode);
    await exec.exec('ls -l');

    // try {
    //   let result = await exec.exec(command);
    //   console.log(result)
    // }
    // catch(err) {
    //   console.log('err occurred');
    // }finally {
    //   process python script
      // console.log('finally');
    // }
    await exec.exec(`cat ${wd}/report_json.json`);
    // fs.writeFileSync(executeScriptPath, pythonCode);
    core.setOutput('time', new Date().toTimeString());
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run();
