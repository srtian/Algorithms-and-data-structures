/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    let map = {}
    for(let i = 0; i < inorder.length; i++) {
        map[inorder[i]] = i
    }
    const helper = (iStart, iEnd, pStart, pEnd) => {
        if(iStart > iEnd || pStart > pEnd) {
            return null
        }
        const root = new TreeNode(postorder[pEnd])
        let mid = map[root.val]
        let leftNodeNumber = mid - iStart
        root.left = helper(iStart, mid - 1, pStart, pStart + leftNodeNumber - 1)
        root.right = helper(mid + 1, iEnd, pStart + leftNodeNumber, pEnd - 1)
        return root
    }
    return helper(0, inorder.length - 1, 0, postorder.length - 1)
};