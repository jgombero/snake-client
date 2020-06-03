const { MOVE_UP_KEY,
  MOVE_DOWN_KEY,
  MOVE_LEFT_KEY,
  MOVE_RIGHT_KEY,
  TRASH_TALK
} = require('./constants');

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
  if (key === MOVE_UP_KEY) {
    connection.write('Move: up');
  } else if (key === MOVE_DOWN_KEY) {
    connection.write('Move: down');
  } else if (key === MOVE_LEFT_KEY) {
    connection.write('Move: left');
  } else if (key === MOVE_RIGHT_KEY) {
    connection.write('Move: right');
  }
  
  // Banter commands
  if (TRASH_TALK.hasOwnProperty(key)) {
    connection.write('Say: ' + TRASH_TALK[key])
  }
};

module.exports = { setupInput };