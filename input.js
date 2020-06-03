// Stores the active TCP connection object
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf-8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  // If CTRL + C is pressed, exits game
  if (key === '\u0003') {
    process.exit();
  }
  // Movement controls
  if (key === 'w') {
    connection.write('Move: up');
  } else if (key === 's') {
    connection.write('Move: down');
  } else if (key === 'a') {
    connection.write('Move: left');
  } else if (key === 'd') {
    connection.write('Move: right');
  }
};

module.exports = { setupInput };