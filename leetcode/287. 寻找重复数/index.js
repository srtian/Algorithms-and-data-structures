/**
 * @param {number[]} nums
 * @return {number}
 */

 // 直接使用api,但这种时间复杂度会很高，不推介
var findDuplicate = function (nums) {
  return nums.find((item) => {
    if (nums.indexOf(item) !== nums.lastIndexOf(item)) {
      return item;
    }
  });
};

// 使用map, o(n)的时间复杂度，以及空间复杂度
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let dict = {}
    for(let i = 0; i < nums.length; i++) {
        if(dict[nums[i]] === 0) {
        return nums[i]
        } else {
            dict[nums[i]] = 0
        }
    }
    return 0
};