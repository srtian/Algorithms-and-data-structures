/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const size = s.length;
  let dict = {};
  for (let i = 0; i < size; i++) {
    if (dict[s[i]] === false || dict[s[i]]) {
      dict[s[i]] = false;
    } else {
      dict[s[i]] = true;
    }
  }
  for (let j = 0; j < size; j++) {
    if (dict[s[j]]) {
      return j;
    }
  }
  return -1;
};
