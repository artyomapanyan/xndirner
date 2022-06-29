const reverse = (array) => {
    let a = [];
  
  for (let i = array.length - 1; i >= 0; i -- ) {
    a.push(array[i]);
  
    
  }
  return a;
   }
   const data = [1, 2, 3];
   console.log(reverse(data)); // [3, 2, 1]