/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let count = 0
    arr = new Array(n)
    for(let i = 2; i < n; i++) {
        if(!arr[i]) {
            count++
            for(let j = 2 * i; j < n; j = j + i) {
                arr[j] = true
            }
        }
    }
    return count
};