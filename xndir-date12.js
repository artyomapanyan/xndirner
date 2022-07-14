//13. Write a JavaScript function that will return the number of minutes in hours and minutes. Go to the editor

function timeConvert(time) {
    let minutes = time % 60;
    let hours = (time - minutes) / 60;
    let a = time + " minutes" + " = " + hours + " hour(s)" + " and " + minutes + " minute(s)"
  
    return a;
  }
  
  
  console.log(timeConvert(200));
  // Output :
  // "200 minutes = 3 hour(s) and 20 minute(s)."