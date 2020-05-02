/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  if (s === " ") return false;
  var val = Number(s);
  return !Number.isNaN(val);
};
