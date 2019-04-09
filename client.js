const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '?? '
});



const connectionToServer = net.createConnection(5500, '', () => {
  // console.log('Marty connected');
  rl.prompt();
  rl.on('line', line => {
    connectionToServer.write(line);
    rl.prompt();
  });
  connectionToServer.write('Hello, I is a client');
});

connectionToServer.on('data', data => {
  console.log(data.toString());
  rl.prompt();
  // rl.write(`${data}`);
})