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
var mergeTwoLists = function(l1, l2) {
    var temp = new ListNode(0)
    var result = temp
    while(l1 != null && l2 != null){
        if (l1.val <= l2.val){
            temp.next = l1
            l1 = l1.next
        }else {
            temp.next = l2
            l2 = l2.next
        }
        temp = temp.next
    }
    if (l1){
        temp.next = l1
    }else {
        temp.next = l2
    }
    return result.next
};