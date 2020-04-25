/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
  if (!A || !B) return false;
  return (
    isFindSub(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
  );
};

const isFindSub = (valA, valB) => {
  if (!valB) return true;
  if (!valA) return false;
  if (valA.val !== valB.val) return false;
  return isFindSub(valA.left, valB.left) && isFindSub(valA.right, valB.right);
};
