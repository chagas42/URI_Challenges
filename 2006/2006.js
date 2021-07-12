var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let i = 0; 
let result = lines.shift()
let data = lines[0].split(' '); 
let winners = []
while(i<data.length){
    if ( result == data[i] ) {
        winners.push(data[i]); 
    }  
    i++; 
}
console.log(winners.length); 