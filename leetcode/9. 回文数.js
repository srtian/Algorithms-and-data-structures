/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str = x + ''
    let last = str.length - 1
    let start = 0
    while(start <= last) {
        if(str[start] === str[last]) {
            start++
            last--
        } else {
            return false
        }
    }
    return true
};