/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let size = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < size; i++) {
    if (i !== nums[i]) {
      return i;
    }
  }
  return nums.pop() + 1;
};
