//44. Write a JavaScript function to get time differences in minutes between two dates. Go to the editor
function diff_minutes(date1, date2) {
    let q = date1 - date2;
    return q/1000/60
  }
  
  let dt1 = new Date("October 13, 2014 11:11:00");
  let dt2 = new Date("October 13, 2014 11:13:00");
  console.log(diff_minutes(dt1, dt2));

  //2