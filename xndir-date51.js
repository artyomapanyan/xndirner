//51. Write a JavaScript function to get the week end date. Go to the editor
function andWeek(date) {
    let q = date.getDay() - 1;
    let a = date.getDate() - q + 6;
    let z = new Date(date.setDate(a));
  
    return z
  }
  
  let dt = new Date();
  console.log(andWeek(dt));