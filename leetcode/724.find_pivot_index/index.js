/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  const len = nums.length;
  if (len < 3) return -1;
  let sums = 0;
  let left = 0;
  for (let i = 0; i < len; i++) {
    sums += nums[i];
  }
  for (let i = 0; i < len; i++) {
    if ((sums - nums[i]) / 2 === left) return i;
    left += nums[i];
  }
  return -1;
};
