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

// 解题思路：
// 使用一个队列，利用其先进先出的特点，来记录每层节点出现的顺序（从左至右）。
// 然后利用这种顺序依次将属性推出数组中
