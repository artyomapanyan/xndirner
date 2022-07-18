//22. Write a JavaScript function to get ISO-8601 numeric representation of the day of the week (1 (for Monday) to 7 (for Sunday)). Go to the editor

function ISO_numeric_date(date) {
    let a = date.getDay();
    if (a === 0) {
      return 7;
    } else {
     return a
    }
   }
   let dt = new Date(2015, 10, 1);
   console.log(ISO_numeric_date(dt));
   //7