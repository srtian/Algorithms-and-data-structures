/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  const size = s.length - 1;
  let num = 0;
  while (num < size / 2) {
    [s[num], s[size - num]] = [s[size - num], s[num]];
    num++;
  }
  return s;
};
