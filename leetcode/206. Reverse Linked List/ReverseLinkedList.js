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
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  let len = 0;
  arr.reverse();
  let node = new ListNode();
  let list = node;
  while (len < arr.length) {
    node.next = {
      val: arr[len],
      next: null
    };
    node = node.next;
    len++;
  }
  return list.next;
};
var reverseList = function(head) {
  let arr = head;
  let len = 0;
  arr.reverse();
  let node = new ListNode();
  let list = node;
  console.log({ node });
  console.log({ list });
  while (len < arr.length) {
    node.next = {
      val: arr[len],
      next: null
    };
    node = node.next;
    len++;
  }
  console.log({ node });
  console.log({ list });
  return list.next;
};
