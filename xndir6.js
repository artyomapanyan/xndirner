/** 
  * Task description: Write a method that returns a duplicate-free array 
  * Expected Result: Duplicate-free array [1, 2, 3, 1, 2] => [1, 2, 3] 
  * Task Complexity: 2 of 5 
  * param {Array<string | number>} array - Array of primitive data types 
  * returns {Array} 
*/
const unique = (array) => {
  
    let result = [];
  
    for (let i of array) {
      if (result.includes(i) === false) {
        result.push(i);
      }
    }
    return result;
   }
   const data = [1, 2, 1, 2, 3];
   console.log(unique(data)); // [1, 2, 3]