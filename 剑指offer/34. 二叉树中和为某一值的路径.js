/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  if (!root) return [];
  let res = [];
  let path = [];
  const dfs = (root, sum, path, res) => {
    if (!root) return;
    path = [...path, root.val];
    if (!root.left && !root.right && root.val === sum) {
      res.push(path);
      return;
    }
    dfs(root.left, sum - root.val, path, res);
    dfs(root.right, sum - root.val, path, res);
  };
  dfs(root, sum, path, res);
  return res;
};
