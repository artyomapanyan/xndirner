//25. Write a JavaScript function to get a full textual representation of a month, such as January or June. Go to the editor

function full_month(data) {
    let months = ["January", "February", "March", "April", "May", "June", "July",
     "August", "September", "October", "November", "December"];
    let a = data.getMonth();
  
    return months[a];
  }
  
  let dt = new Date(2015, 10, 1);
  console.log(full_month(dt));

  //November