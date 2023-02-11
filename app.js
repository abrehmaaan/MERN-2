const fs = require('fs');
fs.writeFileSync('data.txt', 'This is my first file');
const buf_data = fs.readFileSync('data.txt', 'utf-8');
console.log(buf_data);
