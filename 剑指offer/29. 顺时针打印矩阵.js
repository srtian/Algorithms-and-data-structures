/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (!matrix.length) return [];
  if (!matrix[0].length) return [];
  let top = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  let left = 0;
  let arr = [];
  while (true) {
    for (let i = left; i <= right; i++) {
      arr.push(matrix[top][i]);
    }
    if (++top > bottom) break;
    for (let i = top; i <= bottom; i++) {
      arr.push(matrix[i][right]);
    }
    if (left > --right) break;
    for (let i = right; i >= left; i--) {
      arr.push(matrix[bottom][i]);
    }
    if (--bottom < top) break;
    for (let i = bottom; i >= top; i--) {
      arr.push(matrix[i][left]);
    }
    if (++left > right) break;
  }
  return arr;
};
