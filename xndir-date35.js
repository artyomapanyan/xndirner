//35.  Write a JavaScript function to get seconds with leading zeros (00 through 59). Go to the editor
function seconds_with_leading_zeros(date) {
    let seconds = date.getSeconds();
    return seconds < 10 ? "0" + seconds : "" + seconds;
  }
  
  let q = new Date()
  let dt = new Date(1989, 10, 1);
  console.log(seconds_with_leading_zeros(dt));
  //"00"