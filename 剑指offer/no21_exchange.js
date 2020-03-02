/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
  let left = [];
  let right = [];
  nums.forEach(item => {
    item % 2 ? right.push(item) : left.push(item);
  });
  return right.concat(left);
};
