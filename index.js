const core = require('@actions/core');
const exec = require('@actions/exec');
const wait = require('./wait');


// most @actions toolkit packages have async methods
async function run() {
  try {
    const ms = core.getInput('milliseconds');
    const ws = core.getInput('workspace');
    console.log(`Waiting ${ms} milliseconds ...`);
    let command = (`docker run -v ${ws}:/zap/wrk/:rw -t owasp/zap2docker-stable zap-baseline.py -t https://www.example.com -g gen.conf -J report_json.json`);

    core.debug((new Date()).toTimeString());
    await wait(parseInt(ms));
    core.debug((new Date()).toTimeString());
    await exec.exec('pwd');
    await exec.exec(command);
    await exec.exec('cat report_json.json');

    core.setOutput('time', new Date().toTimeString());
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run();
