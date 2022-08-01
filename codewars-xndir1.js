// Цель этого упражнения — преобразовать строку в новую строку, где каждый символ в новой 
// строке соответствует тому, "("если этот символ появляется только один раз в исходной 
// строке или ")"если этот символ появляется в исходной строке более одного раза. 
// Игнорировать заглавные буквы при определении, является ли символ дубликатом.

function duplicateEncode(word){

    let a = word.toLowerCase().split("");
    let q = [];
    for (let i of a) {
      if (a.indexOf(i) == a.lastIndexOf(i)) {
        q.push("(");
      } else {
        q.push(")")
      }
    }
    let b = q.join("");
  
      return b;
   };
  
  console.log(duplicateEncode("SAawwk"));

  function duplicateEncode1(word) {
    let a = word.toLowerCase().split("");
    let b = a.map(function(el, indx, w) {
      if (w.indexOf(el) == w.lastIndexOf(el)) {
        return "("
      } else {
        return ")"
      }
    }).join("");
  
    return b;
  };
  
  console.log(duplicateEncode1("ass"))

