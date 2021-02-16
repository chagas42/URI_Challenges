const input = require('fs').readFileSync('stdin', 'utf-8'); 
const lines = input.split('\n'); 

const PI = 3.14159; 

const volume = ( rate ) => {
    rate = Math.pow(Number(rate), 3); 
    return (4/3) * PI * rate; 
}; 

let result = volume(lines[0]); 

console.log(`VOLUME = ${result.toFixed(3)}`); 

// formula =: (4/3) * PI * R³