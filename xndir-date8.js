//8. Write a JavaScript function to get difference between two dates in days. Go to the editor


function date_diff_indays(a, b) {
    let q = new Date(a);
    let c = new Date(b);
    
    
   return (q - c)/(1000 * 60 * 60 * 24);
  }
  
  
  
  
  console.log(date_diff_indays('04/02/2014', '11/04/2014' ));
  console.log(date_diff_indays('12/02/2014', '11/04/2014'));

  //216
  //-28