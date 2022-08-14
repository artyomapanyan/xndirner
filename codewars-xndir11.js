// Если даны два слова, сколько букв нужно убрать из них, 
// чтобы получились анаграммы?
// Пример
// Первое слово: c od e w ar s войны ( удалены 4 буквы )
// Второе слово : ha c k er r a nk rank ( удалены 6 букв )
// Результат : 10


function anagramDifference(w1,w2){
    let q = w1.toLowerCase().split("");
    let z = w2.toLowerCase().split("");
   
    for(var i = 0; i < q.length; i++) {
      if (z.indexOf(q[i]) !== -1) {
        z.splice(z.indexOf(q[i]), 1);
        q.splice(i, 1)
        i--
      }
    }
  
    return q.length + z.length
  }

  console.log(anagramDifference(codewars, hackerrank)) // 10