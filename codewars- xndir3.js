//Напишите алгоритм, который берет массив и перемещает все нули в конец, 
//сохраняя порядок остальных элементов.

function moveZeros(arr) {
    let a = arr.filter(function(el) {
      return el !== 0;
    });
    let b = arr.filter(function(el) {
      return el === 0;
    });
    return a.concat(b);
  };

  console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))

  //returns[false,1,1,2,1,3,"a",0,0]