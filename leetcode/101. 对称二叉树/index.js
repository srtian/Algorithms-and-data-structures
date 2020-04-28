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
  return isEqual(root.left, root.right);
};

var isEqual = (left, right) => {
  if (!left && !right) return true;
  if (!left || !right || left.val !== right.val) {
    return false;
  }
  return isEqual(left.left, right.right) && isEqual(left.right, right.left);
};
