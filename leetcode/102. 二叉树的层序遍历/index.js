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
  if (level === res.length) {
    res.push([root.val]);
  } else {
    res[level].push(root.val);
  }
  recur(root.left, level + 1, res);
  recur(root.right, level + 1, res);
  return res;
};

// 使用二维数组，用一个level1来记录每一层的层数，因为数组的参数是不变的，因此只需往对应的层级里push数据即可


// 解法二： 使用非递归、迭代的方式
const levelOrder = function(root) {
  if(!root) return []
  let result = []
  let queue = [root]
  while (queue.length) {
      let curLevel = []
      let len = queue.length
      for(let i = 0; i < len; i++) {
          let cur = queue.pop()
          curLevel.push(cur.val)
          if(cur.left) queue.unshift(cur.left)
          if(cur.right) queue.unshift(cur.right)
      }
      result.push(curLevel)
  }
  return result
};