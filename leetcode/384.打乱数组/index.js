/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.arr = nums
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.arr
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let nums = [...this.arr]
    let n = nums.length - 1
    while(n >= 0) {
        let index = parseInt(Math.random() * (n+1));
        [nums[index], nums[n]] = [nums[n], nums[index]];
        n--;
    }
    return nums
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */