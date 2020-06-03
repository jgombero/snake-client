const net = require('net');
const { IP, PORT } = require('./constants');
const username = process.argv[2];

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT    
  });
  
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log('Successfully connected to game server');

    //prints name to the server
    conn.write('Name: ' + username);
  })

  // receives message from server
  conn.on('data', (message) => {
    console.log('Data: ', message);
  })

  return conn;
}

module.exports = { connect };