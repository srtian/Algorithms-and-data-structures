/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0;
  const left = maxDepth(root.left);
  const right = maxDepth(root.right);
  return Math.max(left, right) + 1;
};

// BFS

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if(!root) return 0
  let stack = [root]
  let depth = 1
  while(stack.length) {
      let curLen = stack.length
      for(let i = 0; i < curLen; i++) {
          let cur = stack.shift()
          if(cur.right) {
              stack.push(cur.right)
          }
          if(cur.left) {
              stack.push(cur.left)
          }
      }
      if(stack.length) {
          depth++
      }
  }
  return depth
};
