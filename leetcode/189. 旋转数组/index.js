/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 方法一，直接使用API去截取
var rotate = function(nums, k) {
  return nums.unshift(...nums.splice(nums.length - k));
};

// 方法二，模仿队列
var rotate = function(nums, k) {
  while (k > 0) {
    nums.unshift(nums.pop());
    k--;
  }
  return nums;
};
