/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 递归法，将每一步的插入分解出来，只关心每一个节点的顺序
function mergeTwoList(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  if (l1.val > l2.val) {
    l2.next = mergeTwoList(l2.next, l1);
    return l2;
  } else {
    l1.next = mergeTwoList(l1.next, l2);
    return l1;
  }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 迭代法，因为是顺序的，所以可以先将其全部对比一遍进行排序，
// 如果多出来的，就放在链表后面即可
var mergeTwoLists = function(l1, l2) {
  let nodeList = new ListNode();
  let cur = nodeList;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  cur.next = l1 !== null ? l1 : l2;
  return nodeList.next;
};
