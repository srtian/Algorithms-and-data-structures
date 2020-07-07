/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
// O(N) 的时间复杂度 最坏的情况是O(n)的空间复杂度
var partition = function(head, x) {
    let num = []
    let result = new ListNode(0)
    result.next = head
    let node = result
    while(node && node.next) {
        if(node.next.val < x) {
            node = node.next
        } else {
            num.push(node.next.val)
            node.next = node.next.next
        }
    }
    while(num.length) {
        node.next = new ListNode(num.shift())
        node = node.next
    }
    return result.next
};