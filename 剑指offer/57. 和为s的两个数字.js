/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 // 方法一，使用哈希表， 空间和时间的复杂度都为O(n)
var twoSum = function(nums, target) {
    let dict = {}
    const size = nums.length
    for(let i = 0; i < size; i++) {
        const val = target - nums[i]
        if(dict[val]) {
            return [val, nums[i]]
        }
        dict[nums[i]] = nums[i]
    }
};

// 方法二 因为是排序列表，所以可以使用双指针的方式来取值
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let i = 0
    let j = nums.length - 1
    while(i < j) {
        const addNum = nums[i] + nums[j]
        if(addNum > target) j--
        if(addNum < target) i++
        if(addNum === target) return [nums[i], nums[j]]
    }
};