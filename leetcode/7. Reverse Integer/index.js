/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let target = (x > 0 ? x : -x)
    .toString()
    .split("")
    .reverse()
    .join("");
  target = x > 0 ? +target : -target;
  if (target < Math.pow(-2, 31) || target > Math.pow(2, 31) - 1) {
    return 0;
  }
  return target;
};
