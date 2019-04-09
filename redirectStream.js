const fs = require('fs');
const rs = fs.createReadStream('./1_streams.md');
const ws = fs.createWriteStream('./1_streams-copy.md');

rs
  .pipe(ws)

// rs.on('data', data => {
//   ws.write(data);
// });

// rs.on('end', () => {
//   ws.end();
// });