// Write a JavaScript function to get the month name from a particular date. Go to the editor

// Test Data :
// console.log(month_name(new Date("10/11/2009")));
// console.log(month_name(new Date("11/13/2014")));
// Output :
// "October"
// "November"

function monthName(mont){
    let a = ["jan", "feb", "mart", "april", "may", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];
    
    return a[mont.getMonth()];
  };
  
  console.log(monthName(new Date("11.10.2009")));