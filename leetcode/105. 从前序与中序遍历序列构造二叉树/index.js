/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

// pre : 中左右
// in：左中右
var buildTree = function(preorder, inorder) {
    const map = {}
    for(let i = 0; i < inorder.length; i++) {
        map[inorder[i]] = i
    }
    const helper = (pStart, pEnd, iStart, iEnd) => {
        if(pStart > pEnd || iStart > iEnd) {
            return null
        }
        const root = new TreeNode(preorder[pStart])
        const mid = map[root.val] // 中序的中点
        const leftNodeNumber = mid - iStart // 左子树个数
        root.left = helper(pStart + 1, pStart + leftNodeNumber, iStart, mid - 1)
        root.right = helper(pStart + leftNodeNumber + 1, pEnd, mid + 1, iEnd)
        return root
    }
    return helper(0, preorder.length - 1, 0, inorder.length - 1)
};