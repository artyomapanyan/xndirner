//29. Write a JavaScript function to get a two digit representation of a year. Go to the editor

function sort_year(date) {
    let year = date.getFullYear();
    let str = year.toString().slice(2);
    return str
    
  }
  let dt = new Date(1989, 10, 1);
  console.log(sort_year(dt));
  //89