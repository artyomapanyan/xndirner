//27. Write a JavaScript function to get a short textual representation of a month, three letters (Jan through Dec).

function short_months(date) {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
       "Aug", "Sep", "Oct", "Nov", "Dec"];
    return months[date.getMonth()];
    
  }
  let dt = new Date(2015, 10, 1);
  console.log(short_months(dt));
  //nov