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
var swapPairs = function(head) {
  if (!head || !head.next) return head;
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  for (let i = 0; i < arr.length - 1; i = i + 2) {
    let flag = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = flag;
  }
  let node = new ListNode();
  let list = node;
  let len = 0;
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
