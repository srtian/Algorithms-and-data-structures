/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const len = digits.length;
  for (let i = len - 1; i >= 0; i--) {
    if (digits[i] + 1 <= 9) {
      digits[i] = digits[i] + 1;
      return digits;
    } else {
      digits[i] = (digits[i] + 1) % 10;
      if (i - 1 < 0) {
        digits.unshift(1);
        return digits;
      }
    }
  }
  return digits;
};
