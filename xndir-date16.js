//16. Write a JavaScript function to count the number of days passed since beginning of the year. Go to the editor

function days_passed(data) {
    let q = new Date(data.getFullYear(), 0, 0);
    let a = data - q;
  
    return a / 1000 / 60 / 60 / 24;
  }
  
  
  console.log(days_passed(new Date(2015, 0, 15)));
  //15
  console.log(days_passed(new Date(2015, 11, 14)));
  //348