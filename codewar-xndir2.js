//#Найди пропущенную букву

// Напишите метод, который принимает на вход массив последовательных
// (возрастающих) букв и возвращает отсутствующую букву в массиве.

// Вы всегда получите допустимый массив. И всегда будет отсутствовать 
// ровно одна буква. Длина массива всегда будет не меньше 2.
// Массив всегда будет содержать буквы только в одном регистре.

// Пример:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

function duplicateEncode(arr){
    let str = '';
    for (let i = 65; i <= 122; i++) {
      str += String.fromCodePoint(i);  
    }
    let strToArrry = str.slice(0, 26).concat(str.slice(32)).split("");
    let a = strToArrry.slice(strToArrry.indexOf(arr[0]), strToArrry.indexOf(arr[arr.length - 1]) + 1)
    
    for (let i = 0; i < arr.length; i ++) {
      a = a.filter((el) => el !== arr[i]);
    }
  
    return a.toString();
  }
   let arrr = ["O","Q","R","S"];
  
  console.log(duplicateEncode(arrr));