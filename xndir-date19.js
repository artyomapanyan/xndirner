//19. Write a JavaScript function to get the day of the month, 2 digits with leading zeros. Go to the editor

function day_of_the_month(date) {
    let a = date.getDate()
    if (a < 10) {
      return "0" + a;
    } else {
      return a;
    }
    
  }
  let d= new Date(2015, 10, 1);
  console.log(day_of_the_month(d));
  //"01"