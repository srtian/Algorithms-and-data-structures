/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
  const len = nums.length;
  const obj = {};
  for (let i = 0; i < len; i++) {
    if (obj[nums[i]] !== undefined) {
      return nums[i];
    }
    obj[nums[i]] = i;
  }
};
