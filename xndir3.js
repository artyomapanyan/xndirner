/** 
  * Task description: Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null 
  * Expected Result: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3] 
  * Task Complexity: 1 of 5 
  * param {Array} array - An array of any elements 
  * returns {Array} 
*/


const compact = (array) => {
    let a = [];
    
      for(let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
          a.push(array[i]);
        }
      };
    
      return a;
    
     };
    const data = [0, 1, false, 2, undefined, '', 3, null];
    
    
     console.log(compact(data)) // [1, 2, 3]