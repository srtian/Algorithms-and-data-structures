/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function(str) {
  const val = parseInt(str.trim());
  if (isNaN(val)) return 0;
  const minVal = Math.pow(-2, 31);
  const maxVal = Math.pow(2, 31) - 1;
  if (val < minVal) {
    return minVal;
  } else if (maxVal < val) {
    return maxVal;
  }
  return val;
};
