const handleText = (str) => {
    
    let box = 0; 
    
    if (str[0]!== "(" || str.lenght <= 1)  return false; 
    
    for (let i of str) {   
        if (i === "(" && box >= 0){
            box++;
        } else { 
            box--; 
        }
    }   
        return ((box === 0) ? true : false); 
    }
  
 console.log(handleText('()()()((()))(())'))