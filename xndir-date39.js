//39. Write a JavaScript function to get difference to Greenwich time (GMT) in hours. Go to the editor
function diff_to_GMT(date) {
    let a = (-date.getTimezoneOffset() / 60);
    
    if (a > 0 && a < 10) {
      return "+" + "0" + a + "00";
    } else if (a > 10) {
      return "+" + a + "00";
    } else if (a < 0 && a > -10) {
      return "-" + "0" + a + "00";
    } else {
      return "-" + a + "00";
    }
  }
  
  let dt = new Date();
  console.log(diff_to_GMT(dt));
  //0400