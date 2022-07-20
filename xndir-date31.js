//31. Write a JavaScript function to get uppercase Ante meridiem and Post meridiem. Go to the editor

function am_pm(date) {
    let hours = date.getHours();
    if (hours < 12) {
      return "PM";
    } else {
      return "AM";
    }
    
    
  }
  
  let dt = new Date();
  console.log(am_pm(dt));