// Reverse a singly linked list.

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
  var node = head;
  var res = null;

  while (node) {
    var temp = node.next;
    node.next = res;

    res = node;

    node = temp;
  }
  return res;
    
};
