/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let count = 0
    let number = 1
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[count]) {
            nums[++count] = nums[i]
            number = 1
        } else {
        if(number < 2) {
            number++
            nums[++count] = nums[i]
            }     
        }
    }
    return count + 1
};