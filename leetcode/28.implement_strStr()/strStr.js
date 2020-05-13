/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// method 1
var strStr = function(haystack, needle) {
  return haystack.indexOf(needle);
};
// method 2
var strStr = function(haystack, needle) {
  if (!needle) return 0;
  const haystackLen = haystack.length;
  const needleLen = needle.length;
  for (let i = 0; i < haystackLen; i++) {
    if (haystack[i] === needle[0]) {
      let flag = true;
      for (let j = 1; j < needleLen; j++) {
        if (haystack[i + j] !== needle[j]) {
          flag = false;
          break;
        }
      }
      if (flag) return i;
    }
  }
  return -1;
};
// method 3
var strStr = function(haystack, needle) {
  if (!needle) return 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      if (haystack.substr(i, needle.length) === needle) {
        return i;
      }
    }
  }
  return -1;
};
