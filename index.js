const core = require('@actions/core');
const exec = require('@actions/exec');
const wait = require('./wait');
const fs = require('fs');
const path = require('path');



// most @actions toolkit packages have async methods
async function run() {
  try {
    const ms = core.getInput('milliseconds');
    const wd = core.getInput('workspace');
    // let wd = '/home/nirojan/za/javascript-action'
    // let runner = JSON.parse(process.env.RUNNER || "");
    // console.log(runner)
    // const outputDir = path.join(runner.temp, "nb-runner");
    // fs.mkdirSync(testPath + '/hello');
    fs.writeFileSync(wd + '/niro.txt', 'hwllo worl');

    let myOutput = '';
    let myError = '';

    const options = {};
    options.listeners = {
      stdout: (data) => {
        myOutput += data.toString();
      },
      stderr: (data) => {
        myError += data.toString();
      }
    };
    options.cwd = './lib';
    options.failOnStdErr = false;
    options.silent = true;

    // let path = '/home/nirojan/za/javascript-action'
    let command = (`docker run --user root -v ${wd}:/zap/wrk/:rw \
    -t owasp/zap2docker-stable zap-baseline.py -t https://www.example.com -g gen.conf -J report_json.json || echo 0`);

    // Execute notebook
    const pythonCode = `
      import papermill as pm
      import os
      import json
      `;

    fs.writeFileSync('Dockerfile', pythonCode);
    await exec.exec('ls -l');

    try {
      let result = await exec.exec(command);
      console.log(result)
    }
    catch(err) {
      console.log('err occurred');
    }finally {
      // process python script
      console.log('finally');
    }
    await exec.exec(`cat ${wd}/report_json.json`);
    fs.writeFileSync(executeScriptPath, pythonCode);
    core.setOutput('time', new Date().toTimeString());
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run();
