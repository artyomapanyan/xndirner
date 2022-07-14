//11. Write a JavaScript function to get the maximum date from an array of dates. Go to the editor

function max_date(max) {
    let a = max[0]; 
    for(let i = 0; i < max.length; i ++) {
      if (max[i] >= a) {
        a = max[i];
      }
    } 
    return a;
  }
  
  console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));
  
  //"2015/02/02"