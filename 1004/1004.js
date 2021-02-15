const input = require('fs').readFileSync('stdin', 'utf-8'); 
const lines = input.split('\n'); 

const setProd = ( n1, n2 ) => {
    return n1 * n2; 
}; 

const PROD = setProd(lines[0], lines[1]); 
console.log(`PROD = ${PROD}`); 