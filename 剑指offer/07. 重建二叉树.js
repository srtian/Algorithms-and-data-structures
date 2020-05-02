/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (!preorde.length || !inorder.length) {
    return null;
  }
  const rootVal = preorder[0];
  const nodeTree = new TreeNode(rootVal);
  let i = 0;
  i = inorder.indexOf(rootVal);
  nodeTree.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i));
  nodeTree.right = buildTree(preorder.slice(i + 1), inorder.slice(i + 1));
  return nodeTree;
};

// 使用递归，每次找到树的根节点
//（为前序遍历的第一个节点，然后以此将树分为左子树以及右子树，然后对左边与右边进行递归，就可以得到整棵树了）
