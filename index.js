const core = require('@actions/core');
const exec = require('@actions/exec');
const wait = require('./wait');
const fs = require('fs');


// most @actions toolkit packages have async methods
async function run() {
  try {
    const ms = core.getInput('milliseconds');
    const path = core.getInput('workspace');

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

    // let path = '/home/nirojan/za/javascript-action'
    let command = (`docker run --user root -v ${path}:/zap/wrk/:rw \
    -t owasp/zap2docker-stable zap-baseline.py -t https://www.example.com -g gen.conf -J report_json.json || echo 0`);

    // Execute notebook
    const pythonCode = `
      import papermill as pm
      import os
      import json
      `;

    fs.writeFileSync(path, pythonCode);
    await exec.exec('ls -l');

    try {
      let result = await exec.exec(command);
      console.log(result)
    }
    catch(err) {
      document.getElementById("demo").innerHTML = err.message;
    }finally {
      // process python script

    }
    await exec.exec('cat report_json.json');
    fs.writeFileSync(executeScriptPath, pythonCode);
    core.setOutput('time', new Date().toTimeString());
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run();
