/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const sSize = s.length;
  const tSize = t.length;
  if (sSize !== tSize) return false;
  let dict = {};
  for (let i = 0; i < sSize; i++) {
    dict[s[i]] ? (dict[s[i]] = dict[s[i]] + 1) : (dict[s[i]] = 1);
  }
  for (let i = 0; i < tSize; i++) {
    if (dict[t[i]]) {
      dict[t[i]] = dict[t[i]] - 1;
    } else {
      return false;
    }
  }
  return true;
};

//  method2
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length != t.length) return false;
  return (
    s
      .split("")
      .sort()
      .join("") ==
    t
      .split("")
      .sort()
      .join("")
  );
};
