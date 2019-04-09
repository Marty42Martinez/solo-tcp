const fs = require('fs');
const ws = fs.createWriteStream('./write.json', {flags: 'a'});

ws.write('{ "name": ');
ws.write('"fido", ');
ws.write('"speci');
ws.write('es": "dog" }');
ws.end();
