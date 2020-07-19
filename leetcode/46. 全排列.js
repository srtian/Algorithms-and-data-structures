/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = []
    const size = nums.length
    const back = path => {
        if(path.length === size) {
            res.push(path)
            return
        }
        for(let i = 0; i < size; i++) {
            if(!path.includes(nums[i])) {
              path.push(nums[i])
              back(path.slice(0))
              path.pop()
            }
        }
    }
    back([])
    return res
  };