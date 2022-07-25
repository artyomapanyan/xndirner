//48. Write a JavaScript function to get time differences in months between two dates. Go to the editor

function diff_months(date1, date2) {
    let q = date1 - date2;
    return Math.round(q/1000/60/60/24/30);
  }
  
  let dt1 = new Date("June 13, 2014 8:11:00");
  let dt2 = new Date("October 19, 2014 11:13:00");
  console.log(diff_months(dt1, dt2));