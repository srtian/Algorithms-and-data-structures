/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let list = [1, 1]
    for(let i = 2; i <= n; i++) {
        list[i] = list[i - 1] + list[i - 2]
    }
    return list[n]
};