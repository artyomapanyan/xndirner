//Array.prototype.lengthдаст вам количество элементов верхнего уровня в массиве.

// Ваша задача — создать функцию deepCount, которая возвращает количество ВСЕХ
// элементов в массиве, включая любые элементы внутри массивов внутреннего уровня.

function deepCount(a){
  
    let q = a.length;
    for (let i = 0; i < a.length; i ++) {
      if (Array.isArray(a[i])) {
        q += deepCount(a[i])
        }
      }
    return q;
  }
  let qqq = [1, 2, 3];
  let www = [1, 2, [3, 4, [5]]];
  console.log(deepCount(qqq))

  //deepCount([1, 2, 3]);  >>>>> 3
  //deepCount([1, 2, [3, 4, [5]]]);  >>>>> 7