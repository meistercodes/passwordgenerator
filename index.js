const program = require('commander');

program.version('1.0.0').description('CLI Password Generator');

program
  .command('generate')
  .action(() => {
    console.log('Test');
  })
  .parse();