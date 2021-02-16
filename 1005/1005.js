const input = require('fs').readFileSync('stdin', 'utf-8'); 
const lines = input.split('\n'); 

const average = ( a, b ) => {
    a = 3.5 * a; 
    b = 7.5 * b; 
    return (a + b) / 11; 
}; 

let result = average( lines[0], lines[1] ); 

console.log(`MEADIA = ${result.toFixed(5)}`); 