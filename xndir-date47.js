//47. Write a JavaScript function to get time differences in weeks between two dates. Go to the editor

function diff_weeks(date1, date2) {
    let q = date1 - date2;
    return Math.round(q/1000/60/60/24/7);
  }
  
  let dt1 = new Date("June 13, 2014 8:11:00");
  let dt2 = new Date("October 19, 2014 11:13:00");
  console.log(diff_weeks(dt1, dt2));

  //18