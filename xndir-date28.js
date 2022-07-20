//28. Write a JavaScript function to get a full numeric representation of a year (4 digits). Go to the editor

function full_year(date) {
    return date.getFullYear();
    
  }
  let dt = new Date(2015, 10, 1);
  console.log(full_year(dt));
  //2015