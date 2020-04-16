/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let size = nums.length;
  let max = nums[0];
  for (let i = 1; i < size; i++) {
    if (nums[i - 1] > 0) {
      nums[i] = nums[i - 1] + nums[i];
    }
    max = Math.max(nums[i], max);
  }
  return max;
};
