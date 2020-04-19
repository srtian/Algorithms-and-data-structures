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

// 方法二 摩尔投票法，具体做法是对整个数组进行遍历，
// 然后从第一个数开始如果重复出现就加一，如果出现不同的数就剪一，
// 当为零的时候就换一个数

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const size = nums.length;
  let flag = nums[0];
  let count = 1;
  for (let i = 1; i < size; i++) {
    if (count === 0) {
      flag = nums[i];
    }
    if (nums[i] === flag) {
      count++;
    } else {
      count--;
    }
  }
  return flag;
};
