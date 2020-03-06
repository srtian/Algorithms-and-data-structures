/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const len = digits.length;
  for (let i = len - 1; i > 0; i--) {
    digits[i]++;
    if (digits[i] !== 0) {
      return digits;
    }
  }
};
