/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let dict = new Map()
    let max = 0
    let i = 0
    for(let m = 0; m < s.length; m++) {
        if(dict.has(s[m])) {
            i = Math.max(dict.get(s[m]) + 1, i)
        }
        max = Math.max(m - i + 1, max)
        dict.set(s[m], m)
    }
    return max
};