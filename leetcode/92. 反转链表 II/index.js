/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  const list = new ListNode(0);
  list.next = head;
  let nodeList = list;
  while (m > 1) {
    nodeList = nodeList.next;
    m--;
    n--;
  }
  let prev = null;
  let curr = nodeList.next;
  while (n > 0) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    n--;
  }
  nodeList.next.next = curr;
  nodeList.next = prev;
  return list.next;
};
