/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let len = nums.length;
  let dict = {};
  for (let i = 0; i < len; i++) {
    if(dict[target - nums[i]] !== undefined) {
      return [dict[target - nums[i]], i]
    } else {
      dict[nums[i]] =i
    }
  }
};

