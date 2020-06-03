const { connect } = require('./client');

console.log('Connecting ...');
connect();

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf-8');
  stdin.resume();
  stdin.data()
  stdin.on('data', () => {
    handleUserInput();
  })
  return stdin;
};

// If CTRL + C is pressed, exits game
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
};