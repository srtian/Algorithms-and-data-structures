/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const len = nums.length;
  let slow = 0;
  if (len === 1) return 1;
  if (!len) return 0;
  for (let i = 1; i < len; i++) {
    if (nums[slow] !== nums[i]) {
      slow++;
      nums[slow] = nums[i];
    }
  }
  return slow + 1;
};
