//18. Write a JavaScript program to calculate age. Go to the editor

function calculate_age(date) {
    let a = new Date() - date;
    let b = new Date(a);
    let c = b.getFullYear() - 1970;
    return c
  }
  
  console.log(calculate_age(new Date(1982, 11, 4)));
  
  console.log(calculate_age(new Date(1962, 1, 1)));