// Напишите функцию, которая найдет все анаграммы слова из списка. 
// Вам будет дано два входа слово и массив со словами. Вы должны вернуть 
// массив всех анаграмм или пустой массив, если их нет. Например:



function anagrams(word, words) {
    let w = word.split("")
    let a = w.sort().join("")
     
   let b = words.map(function(el) {
     return el.split("").sort().join("");
   });
 
   let c = [];
   for (let i = 0; i < b.length; i ++) {
     if (b[i] === a){
       c.push(i)
     }
   }
   let z = [];
   for (let i = 0; i < c.length; i ++) {
     z.push(words[c[i]])
   }
   return z
 }
 
 
 let arr = ['crazer', 'carer', 'racar', 'caers', 'racer']
 
 console.log(anagrams('racer', arr))  //['carer', 'racer']