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

// 在第二题的原有基础上增加判断层级是奇数还是偶数
// 由于大的方向是从左至右
// 因此当为偶数的时候需要使用unshift的方法，类似于栈，先进入的放在后面
// 而奇数的则和之前一样，直接push即可
