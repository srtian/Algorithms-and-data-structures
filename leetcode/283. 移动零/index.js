/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let size = nums.length;
  let total = 0;
  for (let i = 0; i < size; i++) {
    if (nums[i] !== 0) {
      nums[total] = nums[i];
      total++;
    }
  }
  for (let i = total; i < size; i++) {
    nums[i] = 0;
  }
  return nums;
};
// 方法二，进行原地交换
var moveZeroes = function(nums) {
  let k = 0 // [0, K)之间都为非零的数
  for(let i = 0; i <nums.length; i++) {
      if(nums[i]) {
          if(i === k) {
              k++
          } else {
              [nums[i], nums[k]] = [nums[k], nums[i]]
              k++
          }
      }
  }
  return nums
};