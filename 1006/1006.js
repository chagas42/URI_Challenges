const input = require('fs').readFileSync('stdin', 'utf-8'); 
const lines = input.split('\n'); 

const average = ( a, b, c ) => {
    a = a * 2; 
    b = b * 3; 
    c = c * 5; 

    return (a + b + c) / 10; 
}; 

let result = average(lines[0], lines[1], lines[2]); 

console.log(result.toFixed(1)); 

