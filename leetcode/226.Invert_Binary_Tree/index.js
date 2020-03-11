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
var invertTree = function(root) {
  if (!root) return root;
  const arr = [root];
  let current = null;
  while ((current = arr.shift())) {
    const left = current.left;
    const right = current.right;
    current.left = right;
    current.right = left;
    if (left) arr.push(left);
    if (right) arr.push(right);
  }
  return root;
};
