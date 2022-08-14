//В этом ката вы должны создать все перестановки непустой входной
//  строки и удалить дубликаты, если они есть. Это означает, что вы
//  должны перетасовать все буквы из ввода во всех возможных порядках.

function permutations(str) {
    //if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
  
    
      if(str.length == 2) {
       return [str, str[1] + str[0]]
      } else if (str.length < 2) {
       return [str]
      }
      
    return Array.from(new Set(str
      .split('')
      .reduce(
        (acc, letter, i) =>
          acc.concat(permutations(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)),
        []
      )));
      
  }
  
  console.log(permutations("akj"))