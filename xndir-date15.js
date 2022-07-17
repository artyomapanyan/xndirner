//15. Write a JavaScript function to get the quarter (1 to 4) of the year. Go to the editor

function quarter_of_the_year(date) {
    let a = date.getMonth();
    if (a === 0) {
      return 4;
    }
    if (a <= 3 && a > 0) {
      return 1;
    };
    if (a <= 6 && a > 3) {
      return 2;
    };
    if (a <= 9 && a > 6) {
      return 3;
    };
    if (a <= 12 && a > 9) {
      return 4;
    }
  
  }
  
  console.log(quarter_of_the_year(new Date(2015, 1, 21)));
  console.log(quarter_of_the_year(new Date(2015, 10, 21)));
