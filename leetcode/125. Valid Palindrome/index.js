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

// method 2
var isPalindrome = function(s) {
  s = s.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
  const size = s.length;
  for (let i = 0; i < size / 2; i++) {
    if (s[i] !== s[size - 1 - i]) {
      return false;
    }
  }
  return true;
};
