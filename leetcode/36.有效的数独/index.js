/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const len = board.length;
  let h = {};
  let l = {};
  let d = {};
  for (let i = 0; i < len; i++) {
    h[i] = {};
    l[i] = {};
    d[i] = {};
  }
  for (let x = 0; x < len; x++) {
    for (let y = 0; y < len; y++) {
      let val = board[x][y];
      if (val !== ".") {
        let num = parseInt(x / 3) * 3 + parseInt(y / 3);
        if (h[x][val] || l[y][val] || d[num][val]) {
          return false;
        } else {
          h[x][val] = 1;
          l[y][val] = 1;
          d[num][val] = 1;
        }
      }
    }
  }
  return true;
};
