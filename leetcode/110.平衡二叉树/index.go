package isBalanced
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func isBalanced(root *TreeNode) bool {
    if root == nil {
        return true
    }
    return abs(maxDepth(root.Left) - maxDepth(root.Right)) <= 1 && isBalanced(root.Left) && isBalanced(root.Right)
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

func abs(a int) int {
    if a < 0 {
        return a * -1
    }
    return a
}

func maxDepth(node *TreeNode) int {
    if node == nil {
        return 0
    }
    return max(maxDepth(node.Left), maxDepth(node.Right)) + 1
}