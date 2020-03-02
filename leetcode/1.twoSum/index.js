/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let len = nums.length;
  let dict = {};
  for (let i = 0; i < len; i++) {
    dict[nums[i]] = i;
  }
  for (let j = 0; j < len; j++) {
    if (dict[target - nums[j]] !== undefined && dict[target - nums[j]] !== j) {
      return [dict[target - nums[j]], j];
    }
  }
};
