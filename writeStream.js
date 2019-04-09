const fs = require('fs');
const ws = fs.createWriteStream('./write.json', {flags: 'a'});

ws.write('\n{')
ws.write('\n\t')
ws.write('\n\t"name": ');
ws.write('"fido", ');
ws.write('\n\t"speci');
ws.write('es": "dog"');
ws.write('\n}');
ws.end();
