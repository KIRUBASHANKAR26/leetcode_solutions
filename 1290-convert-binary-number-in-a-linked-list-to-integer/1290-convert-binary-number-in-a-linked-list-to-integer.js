/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
   let arr=""
   let currentNode = head;
    while(currentNode){
        arr+=currentNode.val
        currentNode = currentNode.next;
    }
   return parseInt(arr,2)
};