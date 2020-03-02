/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  if (nums.length === 1 || nums.length === 0) return false;
  const arrs = [];
  for (let i = 0; i < nums.length; i++) {
    if (arrs.indexOf(nums[i]) !== -1) {
      return true;
    } else {
      arrs.push(nums[i]);
    }
  }
  return false;
};
// method 2 use the dict to get value
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const dict = {};
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (dict[nums[i]]) {
      return true;
    } else {
      dict[nums[i]] = true;
    }
  }
  return false;
};
