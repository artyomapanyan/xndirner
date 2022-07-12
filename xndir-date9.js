//9. Write a JavaScript function to get the last day of a month. Go to the editor

function lastday(dat, mont){
    let a = new Date(dat, mont + 1, 1 - 1);
    let q = a.getDate();
    return q
  }

console.log(lastday(2014,0));
console.log(lastday(2014,1));
console.log(lastday(2014,11));
// Output :
// 31
// 28
// 31