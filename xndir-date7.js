// 7. Write a JavaScript function to test whether a date is a weekend. Go to the editor

// Note : Use standard Saturday/Sunday definition of a weekend.

function is_weekend(a) {
    let q = new Date(a);
    let z = q.getDay();
    if (z === 0 || z === 6) {
      return "weekend"
    }
   
  }


console.log(is_weekend('Nov 15, 2014'));
console.log(is_weekend('Nov 16, 2014'));
console.log(is_weekend('Nov 17, 2014'));
// Output :
// "weekend"
// "weekend"
// undefined