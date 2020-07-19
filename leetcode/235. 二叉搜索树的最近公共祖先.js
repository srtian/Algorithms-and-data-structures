var lowestCommonAncestor = function(root, p, q) {
    if(root === p || root === q || root === null) return root
    if(root.val > p.val && root.val >q.val) {
        return lowestCommonAncestor(root.left, p, q)
    }
    if(root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q)
    }
    return root
};