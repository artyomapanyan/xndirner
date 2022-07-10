//5. Write a JavaScript function to compare dates (i.e. greater than, less than or equal to). Go to the editor


function compare_dates(dat1, dat2) {
    let a = dat1.getTime();
    let q = dat2.getTime();
  
    if ((a - q) < 0) {
      return "Date2 > Date1";
    } else if ((a - q) > 0) {
      return "Date1 > Date2";
    } else {
      return "Date2 = Date1";
    }
    
  }

console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));



"Date1 = Date2"
"Date1 > Date2"
"Date2 > Date1"