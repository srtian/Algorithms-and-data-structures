/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  const len = nums.length;
  let maxNum = 0;
  let maxIndex = 0;
  for (let i = 0; i < len; i++) {
    if (maxNum < nums[i]) {
      maxNum = nums[i];
      maxIndex = i;
    }
  }
  for (let i = 0; i < len; i++) {
    if (i !== maxIndex && maxNum < nums[i] * 2) return -1;
  }
  return maxIndex;
};
