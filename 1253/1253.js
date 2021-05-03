var input = require('fs').readFileSync('stdin', 'utf-8'); 
var lines = input.split('\n'); 

let lenght = parseInt(lines.shift())

while(lenght-- > 0){ 

    let str = lines.shift(); 
    let qtd = parseInt(lines.shift()); 
    let newStr = ''; 
    let char; 

    for(let i=0; i < str.length; i++ ){ 
        char = str.charCodeAt(i) - qtd; 
        if(char < 65) char = char + 26; 
        newStr += String.fromCharCode(char); 
    }
    console.log(newStr); 
}

