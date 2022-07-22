//33. Write a JavaScript function to get 12-hour format of an hour with leading zeros. Go to the editor
function hours_with_zeroes(date) {
    let hours = date.getHours();
      if (hours === 0) {
        return "12";
      } else if (hours > 21) {
        return "" + hours % 12;
      } else if (hours > 12 && hours < 22) {
        return "0" + hours % 12;
      } else if (hours < 10) {
        return "0" + hours;
      } else {
        return "" + hours;
      }   
  }
  
  let q = new Date()
  let dt = new Date(1989, 10, 1, 24);
  console.log(hours_with_zeroes(dt));
  //"12"