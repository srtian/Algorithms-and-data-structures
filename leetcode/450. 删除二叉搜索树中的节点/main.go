package deleteNode
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func deleteNode(root *TreeNode, key int) *TreeNode {
    if root == nil {
        return root
    }
    if key < root.Val {
        root.Left = deleteNode(root.Left, key)
        return root
    }
    if key > root.Val {
        root.Right = deleteNode(root.Right, key)
        return root
    }

    if root.Left == nil {
        return root.Right
    }
    if root.Right == nil {
        return root.Left
    }
    last := root.Right
    for last.Left != nil {
        last = last.Left
    }
    root.Val = last.Val
    root.Right = deleteNode(root.Right, last.Val)
    return root
}