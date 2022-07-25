//53. Write a JavaScript function to get the month end date. Go to the editor
function andMonth(date) {
    let a = date.getMonth();
    return new Date(date.setMonth(a + 1, 0));
  }
  
  let dt = new Date();
  console.log(andMonth(dt));