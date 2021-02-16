const input = require('fs').readFileSync('stdin', 'utf-8'); 
const lines = input.split('\n'); 

const salary = ( n, hours, value  ) => {
    const payment = [ n, hours * value ]; 
    return payment; 
}; 

let result = salary(lines[0], lines[1], lines[2]); 

console.log(`NUMBER = ${result[0]}`); 
console.log(`SALARY = U$ ${result[1].toFixed(2)}`);