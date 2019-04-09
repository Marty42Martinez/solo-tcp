const net = require('net');
const fs = require('fs');


const server = net.createServer(client => {
  console.log('client connected!');
  // client.pipe(client);
  client.on('data', data => {
    console.log(data);
    client.write(` ECHO FROM SERVER: ${data}`);
  });
});

server.listen(5500);