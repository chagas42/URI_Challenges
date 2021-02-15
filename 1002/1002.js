const input = require('fs').readFileSync('stdin', 'utf-8'); 
const lines = input.split('\n'); 

const circleRate = ( rate ) => {
    const n = 3.14159; 
    rate = rate * rate; 

    return n * rate; 
}; 

const result = circleRate(parseFloat(Number(lines)));
console.log(`A=${result.toFixed(4)}`); 

