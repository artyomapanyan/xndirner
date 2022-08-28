function mergeArrays(a, b) {
    let arr = [];
    let i = 0;
    let j = 0;
    if(a.length > b.length) {
      while (i < a.length) {
        arr.push(a[i]);
        arr.push(b[j]);
        i ++;
        j ++
      }
      
    } else {
      while (i < b.length) {
        arr.push(a[i]);
        arr.push(b[j]);
        i ++;
        j ++
      }
      
    }
    return arr.filter((el) => {return el != null});
  }
  
  
  console.log(mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5, 6]))
  //['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5, 6]