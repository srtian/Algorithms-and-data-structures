/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
  let arr = [];
  let node = head;
  while (node) {
    arr.push(node.val);
    node = node.next;
  }
  return arr.reverse();
};
