let str;
const fs = require('fs');
let buf = fs.readFileSync(process.argv[2]);
str = buf.toString();
let result = str.split('\n').length - 1;
console.log(result);
