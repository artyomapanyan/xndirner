//30. Write a JavaScript function to get lowercase Ante meridiem and Post meridiem. Go to the editor

function am_pm(date) {
    let hours = date.getHours();
    if (hours < 12) {
      return "pm";
    } else {
      return "am";
    }
    
    
  }
  
  let dt = new Date();
  console.log(am_pm(dt));