const input = require('fs').readFileSync('stdin', 'utf-8'); 
const lines = input.split('\n'); 

const payment = ( salary, sales ) => {
    let fee = 0.15; 
    return ((fee * sales) + Number(salary)); 
}

let result = payment(lines[1], lines[2]); 
console.log(`TOTAL = R$ ${result.toFixed(2)}`); 