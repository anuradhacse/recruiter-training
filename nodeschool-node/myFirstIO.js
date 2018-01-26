var fs = require('fs');

content = fs.readFileSync(process.argv[2]);

result = content.toString().split('\n');

console.log(result.length - 1);
