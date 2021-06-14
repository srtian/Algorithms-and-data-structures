/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    if(!root) {
        return 0
    }
    const leftLevel = countLevel(root.left)
    const rightLevel = countLevel(root.right)
    if(leftLevel === rightLevel) {
        return countNodes(root.right) + (1 << leftLevel)
    } else {
        return countNodes(root.left) + (1 << rightLevel)
    }
};

function countLevel(root) {
    if(!root) return 0
    let level = 0
    while(root) {
        root = root.left
        level++
    }
    return level
}