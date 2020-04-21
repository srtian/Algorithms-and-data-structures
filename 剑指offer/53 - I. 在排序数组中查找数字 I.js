/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  const size = nums.length;
  let left = 0;
  let right = size - 1;
  if (!size) return 0;
  while (left < size && nums[left] !== target) {
    left++;
  }
  while (right >= 0 && nums[right] !== target) {
    right--;
  }
  return left <= right ? right - left + 1 : 0;
};
