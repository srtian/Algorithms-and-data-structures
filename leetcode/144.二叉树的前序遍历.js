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
var preorderTraversal = function(root) {
    let result = []
    const recv = (root) => {
        if(!root) return null
        result.push(root.val)
        recv(root.left)
        recv(root.right)
    }
    recv(root)
    return result
};

// 迭代法
var preorderTraversal = function(root) {
    if(!root) return []
   let stack = []
   let result = []
   stack.push(root)
   while(stack.length) {
       let node = stack.pop()
       result.push(node.val)
       if(node.right) stack.push(node.right)
       if(node.left) stack.push(node.left)
   }
   return result
};