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
var levelOrder = function(root) {
  if (!root) return [];
  let queue = [root];
  let res = [];
  while (queue.length) {
    const data = queue.shift();
    res.push(data.val);
    data.left && queue.push(data.left);
    data.right && queue.push(data.right);
  }
  return res;
};
