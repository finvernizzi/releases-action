const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');

try {
  const path = core.getInput('path');
  console.log(`Reading releases meta info from  ${path}!`);
  const metaInfo = fs.readFileSync(path, {encoding:'utf8'});
  core.info(`metainfo:`,metaInfo);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  core.info(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}