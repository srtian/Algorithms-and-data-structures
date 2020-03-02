/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
  let arr = [];
  for (let i = 1; i < Math.pow(10, n); i++) {
    arr.push(i);
  }
  return arr;
};
