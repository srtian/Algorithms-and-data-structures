/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let dict = {};
  nums.forEach(item => {
    if (dict[item]) {
      dict[item] = dict[item] + 1;
    } else {
      dict[item] = 1;
    }
  });
  for (let key in dict) {
    if (dict[key] === 1) return key;
  }
};
