/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
  const size = s.length;
  let dict = {};
  for (let i = 0; i < size; i++) {
    if (dict[s[i]]) {
      dict[s[i]] = s[i];
    } else {
      dict[s[i]] = 1;
    }
  }
  for (let i in dict) {
    if (dict[i] === 1) {
      return i;
    }
  }
  return " ";
};
