//10. Write a JavaScript function to calculate 'yesterday day'. Go to the editor


function yesterday(dat) {
    let a = new Date(dat);
    let year = a.getFullYear();
    let mont = a.getMonth();
    let dey = a.getDate()-1;
    let q = new Date(year, mont, dey)
  
    return q;
  }
  
  
  console.log(yesterday('Nov 15, 2014'));
  console.log(yesterday('Nov 16, 2015'));
  console.log(yesterday('Nov 17, 2016'));
  // Output :
  // "Fri Nov 14 2014 00:00:00 GMT+0530 (India Standard Time)"
  // "Sun Nov 15 2015 00:00:00 GMT+0530 (India Standard Time)"
  // "Wed Nov 16 2016 00:00:00 GMT+0530 (India Standard Time)"