/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let size = nums.length
    let res = []
    const back = (path, i) => {
        if(i <= size) {
            res.push(path)
        }
        for(let j = i; j < size; j++) {
            path.push(nums[j])
            back(path.slice(0), j + 1)
            path.pop()
        }
    }
    back([], 0)
    return res
};