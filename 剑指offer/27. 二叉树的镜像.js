/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
  if (root === null) return null;
  const left = mirrorTree(root.right);
  const right = mirrorTree(root.left);
  root.right = right;
  root.left = left;
  return root;
};
