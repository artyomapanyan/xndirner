//Постройте башню в форме пирамиды по заданному положительному целому 
//числу number of floors. Башенный блок представлен с "*"характером.

function towerBuilder(nFloors) {
    let arr = [];
    let str2 = "**";
    let c = "";
    let b = ""
    
    for (let i = 0; i < nFloors; i ++) {
      b += str2;
      arr.push(b + c); 
    }
    
    let arr1 = arr.map(function(el) {
      return el.slice(1)
    });
  
    let arr1Reversed = arr1.reverse();
  
    for (let i = 1; i < nFloors; i ++) {
      c += " ";
      arr1Reversed[i] = c + arr1Reversed[i] + c; 
    };
  
    let g = arr1Reversed.reverse();
    
    return g
  };
  
  console.log(towerBuilder(3))

//   [
//     "  *  ",
//     " *** ", 
//     "*****"
//   ]