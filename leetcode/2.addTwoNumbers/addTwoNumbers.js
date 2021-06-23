var addTwoNumbers = function(l1, l2) {
    if(!l1) return l2
    if(!l2) return l1
    let list = new ListNode(0, null)
    let result = list
    let temp = 0
    while(l1 || l2 || temp !== 0) {
        if(l1) {
            temp += l1.val
            l1 = l1.next
        }
        if(l2) {
            temp += l2.val
            l2 = l2.next
        }
        list.next = new ListNode(temp % 10, null)
        temp = Math.floor(temp / 10)
        list = list.next
    }
    return result.next
};