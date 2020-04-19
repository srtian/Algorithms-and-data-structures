/**
 * @param {number[]} nums
 * @return {number}
 */

// 方法一，使用字典来存储每个数字出现的次数 0（n）
var majorityElement = function(nums) {
  const size = nums.length;
  if (size < 3) return nums[0];
  let dict = {};
  for (let i = 0; i < size; i++) {
    if (dict[nums[i]]) {
      dict[nums[i]] = dict[nums[i]] + 1;
      if (dict[nums[i]] > size / 2) {
        return nums[i];
      }
    } else {
      dict[nums[i]] = 1;
    }
  }
};
