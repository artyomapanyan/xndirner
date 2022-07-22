//Write a JavaScript function to get minutes with leading zeros (00 to 59). Go to the editor
function seconds_with_leading_zeros(date) {
    let minutes = date.getMinutes();
    return minutes < 10 ? "0" + minutes : "" + minutes;
  }
  
  let q = new Date()
  let dt = new Date(1989, 10, 1);
  console.log(seconds_with_leading_zeros(dt));
  //"00"