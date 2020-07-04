/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let prev = null;
  let current = head;
  while (current) {
    let nextTemp = current.next;
    current.next = prev;
    prev = current;
    current = nextTemp;
  }
  return prev;
};

// 方法二：递归
var reverseList = function(head) {
  const reverse = (prev, cur) => {
    if(!cur) return prev
    let next = cur.next
    cur.next = prev
    return reverse(cur, next)
  }
  return reverse(null, head)
};
