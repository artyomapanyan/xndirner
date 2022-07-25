//52. Write a JavaScript function to get the month start date. Go to the editor
function startMonth(date) {
    return new Date(date.setDate(1));
  }
  
  let dt = new Date();
  console.log(startMonth(dt));