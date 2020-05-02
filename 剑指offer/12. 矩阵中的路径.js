/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[0].length; y++) {
      if (dfs(board, word, x, y, 0)) {
        return true;
      }
    }
  }
  return false;
};

const dfs = (board, word, x, y, k) => {
  if (
    x >= board.length ||
    x < 0 ||
    y >= board[0].length ||
    y < 0 ||
    board[x][y] !== word[k]
  ) {
    return false;
  }
  if (k === word.length - 1) return true;
  let temp = board[x][y];
  board[x][y] = "/";
  let res =
    dfs(board, word, x + 1, y, k + 1) ||
    dfs(board, word, x - 1, y, k + 1) ||
    dfs(board, word, x, y + 1, k + 1) ||
    dfs(board, word, x, y - 1, k + 1);
  board[x][y] = temp;
  return res;
};
