const input = require('fs').readFileSync('stdin', 'utf-8'); 
const lines = input.split('\n'); 

let n = parseInt(lines.shift()); 
const validateLower = (str) => {
   
    return str.toUpperCase() != str.toLowerCase(); 
    
}; 

while(n-- > 0){

    let txt = lines.shift().split(""); 
    txt = txt.map((e) => {

        if(validateLower(e)){
            return String.fromCharCode(e.charCodeAt(0) + 3) //primeira passada
        } else { 
            return e; 
        }; 
    }); 

    txt = txt.reverse(); // segunda passada 
    txt = txt.map((e, i) => {
        if(i + 1 <= txt.length / 2){
            return e; 
        } else { 
            return String.fromCharCode(e.charCodeAt(0) - 1)
        }
    }); 

    console.log(txt.join("")); 
}


// const validateString = (str) => {

//     return str.charCodeAt(0)

// }; 

// const result = String.fromCharCode(validateString("A")); 

// console.log(validateString('A')); 

