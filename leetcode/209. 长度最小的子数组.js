/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let l = 0
    let r = -1
    let sum = 0
    let result = nums.length + 1
    while(l < nums.length) {
        if( r + 1 < nums.length && sum < s) {
            sum = sum + nums[++r]
        } else {
            sum = sum - nums[l++]
        }
        if(sum >= s) {
            result = Math.min(result, r - l + 1)
        }
    }
    if(result === nums.length + 1) return 0
    return result
};