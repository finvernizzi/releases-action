const core = require('@actions/core');
const github = require('@actions/github');
import fs from 'fs'

try {
  // `who-to-greet` input defined in action metadata file
  const path = core.getInput('path');
  console.log(`Reading releases meta info from  ${path}!`);
  const metaInfo = fs.readFileSync(`${path}/releases/releases.yml`,{encoding:'utf8'});
  core.info(`metainfo:`,metaInfo);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}