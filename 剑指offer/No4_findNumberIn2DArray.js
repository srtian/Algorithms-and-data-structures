/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
  return matrix.map(item => item.includes(target)).filter(Boolean).length;
};

var findNumberIn2DArray = function(matrix, target) {
  return matrix.filter(item => item.includes(target) === true).length;
};

var findNumberIn2DArray = function(matrix, target) {
  return matrix.filter(item => item.includes(target) === true).length;
};
// 暴力

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
  let i = matrix.length - 1,
    j;
  const x = matrix[0].length;
  while (i > 0) {
    while (j < x && matrix[i][j] < target) {
      ++j;
    }
    if (j < x && matrix[i[j] === target]) {
      return true;
    }
    --i;
  }
  return false;
};
