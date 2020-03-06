const core = require('@actions/core');
const exec = require('@actions/exec');
const wait = require('./wait');


// most @actions toolkit packages have async methods
async function run() {
  try {
    const ms = core.getInput('milliseconds');
    console.log(`Waiting ${ms} milliseconds ...`);

    core.debug((new Date()).toTimeString());
    await wait(parseInt(ms));
    core.debug((new Date()).toTimeString());
    await exec.exec('pwd');
    await exec.exec('docker run -t owasp/zap2docker-stable zap-baseline.py -t https://www.example.com');
    await exec.exec('pwd');

    core.setOutput('time', new Date().toTimeString());
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run();
