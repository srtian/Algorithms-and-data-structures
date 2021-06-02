// 递归法
var searchBST = function(root, val) {
    if(!root || root.val === val) {
        return root
    }    
    return root.val < val ? searchBST(root.right, val) : searchBST(root.left, val)
};

// 迭代法
var searchBST = function(root, val) {
    while(root && root.val !== val) {
        root = root.val > val ? root.left : root.right
    }
    return root
};