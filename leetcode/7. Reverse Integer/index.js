/**
 * @param {number} x
 * @return {number}
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const isPositive = x > 0;
  let target = (isPositive ? x : -x)
    .toString()
    .split("")
    .reverse()
    .join("");
  target = isPositive ? +target : -target;
  const max = Math.pow(2, 31) - 1;
  const min = Math.pow(-2, 31);
  if (target < min || target > max) {
    return 0;
  }
  return target;
};
