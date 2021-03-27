var diameterOfBinaryTree = function(root) {
    if (!root) return 0
    let max = 0
    const depth = (root) => {
        if (!root) return 0
        const left = depth(root.left)
        const right = depth(root.right)
        max = Math.max(max, left + right)
        return Math.max(left, right) + 1
    }
    depth(root, max)
    return max
};