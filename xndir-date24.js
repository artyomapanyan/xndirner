//24. Write a JavaScript function to get ISO-8601 week number of year, weeks starting on Monday. Go to the editor

function ISO8601_week_no(data) {
    let a = data.getFullYear();
    let q = new Date(a, 0, 1);
    let z = (data - q) / 1000 / 60 / 60 / 24;
    let x = Math.ceil(z / 7);
    return x;
  }
  
  
  let dt = new Date(2015, 10, 1);
  console.log(ISO8601_week_no(kkk));
  
  //44