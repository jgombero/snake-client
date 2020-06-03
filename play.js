const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541    
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  // receives message from server
  conn.on('data', (message) => {
    console.log('Data: ', message);
  })

  return conn;
}

console.log('Connecting ...');
connect();