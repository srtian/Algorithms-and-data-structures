/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let max = -1
    const size = s.length
    const dp = [];
    for (let i = 0; i < size; i++) {
        dp[i] = [];
    }
    let str = ''
    for(let length = 0; length < size; length++) {
        for(let left = 0; left + length < size; left++) {
            let right = left + length
            if(length === 0) {
                dp[left][right] = true
            } else if(length <= 2) {
                dp[left][right] = s[left] === s[right]
            } else {
                dp[left][right] = s[left] === s[right] && dp[left + 1][right - 1]
            }
        if(dp[left][right] && length > max) {
            max = length
            str = s.substr(left, length + 1)
        }
    }
    }
    return str
};