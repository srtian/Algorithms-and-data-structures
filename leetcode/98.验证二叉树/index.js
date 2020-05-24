/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    if(!root) return true
    return helper(root,-Infinity, Infinity)
};

var helper = (root, min , max) => {
    if(!root) return true
    if(root.val>= max || root.val <= min) return false
    return helper(root.left, min, root.val) && helper(root.right, root.val, max)
}