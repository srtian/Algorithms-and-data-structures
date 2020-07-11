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
var inorderTraversal = function(root) {
    let res = []
    const recv = (root) => {
        if(!root) return null
        recv(root.left)
        res.push(root.val)
        recv(root.right)
    }
    recv(root)
    return res
};

var inorderTraversal = function(root) {
    if(!root) return []
    let stack = []
    let res = []
    let p = root
    while(stack.length || p) {
        while(p) {
            stack.push(p)
            p = p.left
        }
        let node = stack.pop()
        res.push(node.val)
        p = node.right
    }
    return res
};