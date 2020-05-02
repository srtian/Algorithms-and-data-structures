/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
  let res = null;
  var dfs = root => {
    if (!root) return;
    dfs(root.right);
    k = k - 1;
    if (k === 0) {
      res = root.val;
      return;
    }
    dfs(root.left);
  };
  dfs(root);
  return res;
};
