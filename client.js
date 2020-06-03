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

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    //prints name to the server
    conn.write('Name: JIG');
  })

  // receives message from server
  conn.on('data', (message) => {
    console.log('Data: ', message);
  })

  return conn;
}

module.exports = { connect };