/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let result = []
    const recv = (root) => {
        if(!root) return null
        result.push(root.val)
        recv(root.left)
        recv(root.right)
    }
    recv(root)
    return result
};