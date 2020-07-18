/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(!matrix.length) return false
    let size1 = matrix.length
    let size2 = matrix[0].length
    let row = size2 - 1
    let col = 0
    while(row >= 0 && col < size1) {
        if(matrix[col][row] > target) {
            row--
        } else if(matrix[col][row] < target) {
            col++
        } else if(matrix[col][row] === target){
            return true
        }
    }
    return false
};