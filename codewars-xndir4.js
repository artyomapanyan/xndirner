//Завершите метод/функцию, чтобы он преобразовывал слова,
//  разделенные тире/подчеркиванием, в верблюжий регистр. Первое
// слово в выводе должно быть написано с заглавной буквы только 
//  в том случае, если исходное слово было написано с заглавной
// буквы (известный как верхний верблюжий регистр, также часто 
//  называемый регистром Паскаля).

function toCamelCase(str){
  
    let toArr = str.split(/\-|_/);
    
    let b = toArr.map(function(el, i) {
      return el.replace(el[0], el[0].toUpperCase());
    }).join("");

    if (str[0] === b[0]) {
      return b
    } else {
      return b.replace(b[0], b[0].toLowerCase())
    } 
  }
  
  let string = "the-Stealth_warrior";
  console.log(toCamelCase(string));

  //theStealthWarrior