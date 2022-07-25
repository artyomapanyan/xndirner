//45. Write a JavaScript function to get time differences in hours between two dates. Go to the editor

function diff_hours(date1, date2) {
    let q = date1 - date2;
    return Math.round(q/1000/60/60);
  }
  
  let dt1 = new Date("October 13, 2014 8:11:00");
  let dt2 = new Date("October 13, 2014 11:13:00");
  console.log(diff_hours(dt1, dt2));

  //3