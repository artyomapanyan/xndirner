//42. Write a JavaScript function to add specified weeks to a date. Go to the editor

function add_weeks(date, week) {
    return new Date(date.setFullYear(date.getFullYear(), date.getMonth(), date.getDate() + (7 * week))); 
  }
  
  let dt = new Date(2014,10,2);
  console.log(add_weeks(dt, 10).toString());

  //"Sun Jan 11 2015 00:00:00 GMT+0530 (India Standard Time)"

