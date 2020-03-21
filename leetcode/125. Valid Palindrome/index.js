/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const arr = s
    .replace(/[^0-9a-zA-Z]/g, "")
    .toLowerCase()
    .split("");
  return arr.join("") === arr.reverse().join("");
};
