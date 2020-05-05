/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let size = nums.length;
  let total = 0;
  for (let i = 0; i < size; i++) {
    if (nums[i] !== 0) {
      nums[total] = nums[i];
      total++;
    }
  }
  for (let i = total; i < size; i++) {
    nums[i] = 0;
  }
  return nums;
};
