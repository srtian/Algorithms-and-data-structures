/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const len = matrix.length
    for(let i = 0; i < len; i++) {
        for(let j = i; j < len; j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < Math.floor(len / 2); j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[i][len - j - 1]
            matrix[i][len - j - 1] = temp
        }
    }
};