/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0
    while(n !== 0) {
        count++
        n = n & (n - 1)
    }
     return count
 };

 // method2

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    const list = n.toString(2).split('').filter(i => i === '1')
     return list.length
 };