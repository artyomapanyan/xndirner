// Если бы нам нужно было настроить игру в крестики-нолики, мы бы хотели знать,
// решено ли текущее состояние доски, не так ли? Наша цель — создать функцию,
// которая проверит это за нас!

// Предположим, что доска представлена ​​в виде массива 3x3, где значение равно 
// 0 пустому месту, символу 1«X» или 2символу «O», например:

// Мы хотим, чтобы наша функция возвращала:

// -1если доска еще не закончена И еще никто не выиграл (есть пустые места),
// 1если "X" выиграл,
// 2если "О" выиграл,
// 0если это кошачья игра (т.е. ничья).


function isSolved(board) {
    if (board[0][0] === 1 && board[0][1] === 1 && board[0][2] === 1) {
      return 1
    } else if (board[1][0] === 1 && board[1][1] === 1 && board[1][2] === 1) {
      return 1
    } else if (board[2][0] === 1 && board[2][1] === 1 && board[2][2] === 1) {
      return 1
    } else if (board[0][0] === 1 && board[1][1] === 1 && board[2][2] === 1) {
      return 1
    } else if (board[0][2] === 1 && board[1][1] === 1 && board[2][0] === 1) {
      return 1
    } else if (board[0][0] === 1 && board[1][0] === 1 && board[2][0] === 1) {
      return 1
    } else if (board[0][1] === 1 && board[1][1] === 1 && board[2][1] === 1) {
      return 1
    } else if (board[0][2] === 1 && board[1][2] === 1 && board[2][2] === 1) {
      return 1
    } else if (board[0][0] === 2 && board[0][1] === 2 && board[0][2] === 2) {
      return 2
    } else if (board[1][0] === 2 && board[1][1] === 2 && board[1][2] === 2) {
      return 2
    } else if (board[2][0] === 2 && board[2][1] === 2 && board[2][2] === 2) {
      return 2
    } else if (board[0][0] === 2 && board[1][1] === 2 && board[2][2] === 2) {
      return 2
    } else if (board[0][2] === 2 && board[1][1] === 2 && board[2][0] === 2) {
      return 2
    } else if (board[0][0] === 2 && board[1][0] === 2 && board[2][0] === 2) {
      return 2
    } else if (board[0][1] === 2 && board[1][1] === 2 && board[2][1] === 2) {
      return 2
    } else if (board[0][2] === 2 && board[1][2] === 2 && board[2][2] === 2) {
      return 2
    } else if (board[0][0] === 0 || board[0][1] === 0 || board[0][2] === 0 || board[1][0] === 0 || board[1][1] === 0 || board[1][2] === 0 || board[2][0] === 0 || board[2][1] === 0 || board[2][2] === 0) {
      return -1;
    } else {
      return 0
    } 
  }

  let arr = [[0, 0, 1],
             [0, 1, 2],
             [2, 1, 0]];

  console.log(isSolved(arr));
