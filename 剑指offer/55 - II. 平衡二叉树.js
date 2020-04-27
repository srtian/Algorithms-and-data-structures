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
var isBalanced = function(root) {
  if (!root) return true;
  let left = maxDeep(root.left);
  let right = maxDeep(root.right);
  if (Math.abs(left - right) > 1) {
    return false;
  }
  return isBalanced(root.left) && isBalanced(root.right);
};

var maxDeep = root => {
  if (!root) return 0;
  return Math.max(maxDeep(root.left), maxDeep(root.right)) + 1;
};
