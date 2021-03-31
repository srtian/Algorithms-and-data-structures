/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */


package Invert_Binary_Tree

type TreeNode struct {
	Val int
	Left *TreeNode
	Right *TreeNode
}
 func invertTree(root *TreeNode) *TreeNode {
    if root == nil {
        return nil
    }
    Right := invertTree(root.Left)
    Left := invertTree(root.Right)
    root.Left = Left
    root.Right = Right
    return root
}