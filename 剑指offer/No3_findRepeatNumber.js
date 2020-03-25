/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
  const len = nums.length;
  let hash = {};
  for (let i = 0; i < len; i++) {
    if (hash[nums[i]]) {
      return nums[i];
    }
    hash[nums[i]] = true;
  }
};

// sort solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
  const len = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return nums[i];
    }
  }
};
