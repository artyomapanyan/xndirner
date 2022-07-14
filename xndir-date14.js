//14. Write a JavaScript function to get the amount of days of a year. Go to the editor

function days_of_a_year(dat) {
    let a = new Date(dat, 2, 0);
    let b = a.getDate() 
    if (b === 28) {
      return 365;
    } else {
      return 366;
    } 
  }
  
  console.log(days_of_a_year(2015));
  //365
  console.log(days_of_a_year(2016));
  //366