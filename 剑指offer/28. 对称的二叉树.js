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
var isSymmetric = function(root) {
  if (!root) return true;
  return isEquel(root.right, root.left);
};
var isEquel = (right, left) => {
  if (!right && !left) return true;
  if (!right || !left || right.val !== left.val) {
    return false;
  }
  return isEquel(right.left, left.right) && isEquel(right.right, left.left);
};
