//40. Write a JavaScript function to get timezone offset in seconds. Go to the editor
function timezone_offset_in_seconds(date) {
    let a = -date.getTimezoneOffset();
    return a * 60
  }
  
  let dt = new Date();
  console.log(timezone_offset_in_seconds(dt));