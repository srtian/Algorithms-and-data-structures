/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (nums[middle] === middle) {
      left = middle + 1;
    } else if (middle < nums[middle]) {
      right = middle - 1;
    }
  }
  return left;
};
