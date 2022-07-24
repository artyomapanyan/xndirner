//38. Write a JavaScript function to find whether or not the date is in daylights savings time. Go to the editor

function daylights_savings(date) {
    let x = new Date(2000, 7, 1);
    let summeTimeZone = x.getTimezoneOffset();
    let dodeyTimeZone = date.getTimezoneOffset();
    if(dodeyTimeZone === summeTimeZone) {
      return 1
    } else {
      return 0
    } 
  }
  
  let dt = new Date();
  console.log(daylights_savings(dt));