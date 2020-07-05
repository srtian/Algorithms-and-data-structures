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
  let dummy = new ListNode(0)
  dummy.next = head
  let temp = dummy
  while(m > 1) {
      temp = temp.next
      m--
      n--
  }
  let prev = null
  let curr = temp.next
  while(n > 0) {
      let next = curr.next
      curr.next = prev
      prev = curr
      curr = next
      n--
  }
  temp.next.next = curr
  temp.next = prev
  return dummy.next
};