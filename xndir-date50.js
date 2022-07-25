//50. Write a JavaScript function to get the week start date. Go to the editor

function weeksStart(date) {
    let q = date.getDay() - 1;
    let a = date.getDate() - q;
    let z = new Date(date.setDate(a));
  
    return z
  }
  
  let dt = new Date();
  console.log(weeksStart(dt));