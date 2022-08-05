//Учитывая n, возьмите сумму цифр n. Если это значение имеет 
// более одной цифры, продолжайте уменьшать таким образом, пока 
// не будет получено однозначное число. Ввод будет неотрицательным 
// целым числом.

function digitalRoot(n) {
  let a = ("" + n).split("");
  let b = a.map(function(el) {
    return +el;
  });
    
  let sum = 0;
  for (let i = 0; i < b.length; i ++) {
    sum += b[i];
  }
     
  if (sum > 9) {
    return digitalRoot(sum)
  } 
  return sum
  }
  
  console.log(digitalRoot(493193));

//   16  -->  1 + 6 = 7
//   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2