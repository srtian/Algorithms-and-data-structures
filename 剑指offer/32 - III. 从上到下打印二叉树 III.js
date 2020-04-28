/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];
  return recur(root, 0, [[]]);
};

var recur = (root, level, res) => {
  if (!root) return null;
  if (res.length === level) {
    res.push([root.val]);
  } else {
    if (level % 2 !== 0) {
      res[level].unshift(root.val);
    } else {
      res[level].push(root.val);
    }
  }
  recur(root.left, level + 1, res);
  recur(root.right, level + 1, res);
  return res;
};
