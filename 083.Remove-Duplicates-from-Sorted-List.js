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
var deleteDuplicates = function(head) {
  var node = head;

  while (node && node.next) {
    if (node.next && node.val === node.next.val) {
      node.next = node.next.next
    } else {
      node = node.next
    }
  }
  return head;
};

