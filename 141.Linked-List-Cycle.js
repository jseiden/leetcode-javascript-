// Given a linked list, determine if it has a cycle in it.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  var node1 = head;
  var node2 = head;

  while (node2 && node2.next) {
    node1 = node1.next;
    node2 = node2.next.next;

    if (node1 === node2) {
      return true;
    }
  }

  return false;
};
