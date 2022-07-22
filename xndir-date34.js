//34. Write a JavaScript function to get 24-hour format of an hour without leading zeros. Go to the editor
function hours_without_zeroes(date) {
    let hours = date.getHours();
    return hours;
  }
  
  let q = new Date()
  let dt = new Date(1989, 10, 1);
  console.log(hours_without_zeroes(dt));
  //0