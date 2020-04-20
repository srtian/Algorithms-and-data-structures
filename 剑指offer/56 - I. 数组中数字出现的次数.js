/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
  const size = nums.length;
  const dict = {};
  for (let i = 0; i < size; i++) {
    if (dict[nums[i]]) {
      delete dict[nums[i]];
    } else {
      dict[nums[i]] = nums[i];
    }
  }
  return Object.keys(dict);
};
