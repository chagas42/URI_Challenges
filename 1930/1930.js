var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let result, total = 0; 

for(let i=0; i<lines[0].length; i++){
    total += Number(lines[0][i]); 
}

result = total - 3; 
console.log(result); 