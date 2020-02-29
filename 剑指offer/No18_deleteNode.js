/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

// the no.1 method
var deleteNode = function(head, val) {
  let arr = [];
  let node = head;
  while (node) {
    if (node.val !== val) {
      arr.push(node.val);
    }
    node = node.next;
  }
  let newNode = new ListNode();
  let len = arr.length - 1;
  let nums = 0;
  node = newNode;
  while (nums <= len) {
    newNode.next = {
      val: arr[nums],
      next: null
    };
    newNode = newNode.next;
    nums++;
  }
  return node.next;
};

// method no2

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
  let pre = new ListNode(0);
  pre.next = head;
  let node = pre;
  while (node.next) {
    if (node.next.val === val) {
      node.next = node.next.next;
      break;
    }
    node = node.next;
  }
  return pre.next;
};
