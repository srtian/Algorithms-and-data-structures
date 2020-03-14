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
