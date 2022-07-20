//26. Write a JavaScript function to get a numeric representation of a month, with leading zeros (01 through 12). Go to the editor
function numeric_month(date) {
    let month = date.getMonth() + 1;
    if (month < 10) {
      return "0" + month;
    } else {
      return month
    }
    
  }
  let dt = new Date(2015, 2, 1);
  console.log(numeric_month(dt));
  //"11"