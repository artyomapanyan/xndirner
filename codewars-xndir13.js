//Напишите функцию, которая принимает строку скобок и определяет, 
//допустим ли порядок скобок. Функция должна возвращать trueзначение, 
//если строка действительна и falseнедействительна.

function validParentheses(parens) {
    let a = parens.split("");
    let b = a.slice(0, Math.ceil(a.length / 2));
    let c = a.slice(a.length/2)
  
    let q = 0;
    let z = 0;
    for (let i = 0; i < b.length; i ++) {
      if (b[i] === "(") {
        q += 1;
      } else if (b[i] === ")") {
        z += 1;
      }
    }
  
    let q1 = 0;
    let z1 = 0
    for (let i = 0; i < c.length; i ++) {
      if (c[i] === ")") {
        q1 += 1;
      } else if (c[i] === "(") {
        z1 += 1;
      }
    }
    if (a.length % 2 !== 0) {
      return false;
    } else if (q !== q1 || a[0] == ")" || a[a.length - 1] === "(" || z1 > q1) {
      return false;
    } else if (q === q1) {
      return true;
    }
  }
  
  
  console.log(validParentheses("()()"))  //true