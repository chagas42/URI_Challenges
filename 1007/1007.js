const input = require('fs').readFileSync('stdin', 'utf-8'); 
const lines = input.split('\n'); 

const diff = ( a, b, c, d ) => {
    return (a * b - c * d); 
}; 

let result = diff(lines[0], lines[1], lines[2], lines[3]); 

console.log(`DIFERENÇA = ${result}`); 