/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
  let arr = [];
  for (let i of s) {
    if (i === " ") {
      arr.push("%20");
    } else {
      arr.push(i);
    }
  }
  return arr.join("");
};

var replaceSpace = function(s) {
  return s.split(" ").join("%20");
};
