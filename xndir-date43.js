//43. Write a JavaScript function to add specified months to a date. Go to the editor

function add_months(date, month) {
    return new Date(date.setMonth(date.getMonth() + month));
  }
  
  let dt = new Date(2014,10,2);
  console.log(add_months(dt, 10).toString());

  //"Wed Sep 02 2015 00:00:00 GMT+0530 (India Standard Time)"