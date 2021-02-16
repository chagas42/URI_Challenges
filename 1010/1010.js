const input = require('fs').readFileSync('stdin', 'utf-8'); 
const lines = input.split('\n'); 
const n1 = lines[0].split(' '); 
const n2 = lines[1].split(' '); 

const simpleCalc = ( n1, n2 ) => {
    n1 = n1[1] * n1[2]; 
    n2 = n2[1] * n2[2]; 
    return (Number(n1) + Number(n2)); 
}; 

const result = simpleCalc(n1, n2); 

console.log(`VALOR A PAGAR: R$ ${result.toFixed(2)}`);
