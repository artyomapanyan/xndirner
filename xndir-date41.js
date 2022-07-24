//41. Write a JavaScript function to add specified years to a date. Go to the editor

function add_years(date, year) {
    let fullYear = date.getFullYear() + year;
    let month = date.getMonth();
    let day = date.getDate(); 
    let q = new Date(fullYear, month, day);
    return q;
  }
  
  let dt = new Date(2014,10,2);
  console.log(add_years(dt, 10).toString());

  //"Sat Nov 02 2024 00:00:00 GMT+0530 (India Standard Time)"