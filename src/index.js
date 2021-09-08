#! /usr/bin/env node
const { WORKSPACE_DIR } = require('./core/workspace');

// Setup
const { program } = require('commander');
program
  .name('cino')
  .option('-w, --ws <name>', 'the workspace to be used')
  .option('-y, --yes', 'skips verification prompt')
  .version('0.1.0')
  .command('dir').action(() => {
    console.log(WORKSPACE_DIR);
  });

// Commands
require('./commands/create');
require('./commands/clock');
require('./commands/view');
require('./commands/remove');

// Runs
program.parse(process.argv);