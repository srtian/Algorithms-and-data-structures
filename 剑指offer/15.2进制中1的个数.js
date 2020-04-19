/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let num = 0;
  while (n !== 0) {
    n = n & (n - 1);
    num++;
  }
  return num;
};
