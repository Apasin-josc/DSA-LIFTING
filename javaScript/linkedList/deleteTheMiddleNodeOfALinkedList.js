/* 2095. Delete the Middle Node of a Linked List

You are given the head of a linked list. Delete the middle node, and return the 
head of the modified linked list.

The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based 
indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.

For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.

Example 1:

    (1️⃣) -> (3️⃣) -> (4️⃣) -> (7️⃣) -> (1️⃣) -> (2️⃣) -> (6️⃣) -> null

Input: head = [1,3,4,7,1,2,6]
Output:    [1,3,4,1,2,6]
Explanation:
The above figure represents the given linked list. The indices of the nodes are written below.
Since n = 7, node 3 with value 7 is the middle node, which is marked in red.
We return the new list after removing this node. 

Example 2:

    (1️⃣) -> (2️⃣) -> (3️⃣) -> (4️⃣) -> null

Input: head = [1,2,3,4]
Output: [1,2,4]
Explanation:
The above figure represents the given linked list.
For n = 4, node 2 with value 3 is the middle node, which is marked in red.

Example 3:

    (2️⃣) -> (1️⃣) -> null

Input: head = [2,1]
Output: [2]
Explanation:
The above figure represents the given linked list.
For n = 2, node 1 with value 1 is the middle node, which is marked in red.
Node 0 with value 2 is the only node remaining after removing node 1. */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const deleteMiddle = (head) => {
  //if list is empty || only has one node
  if (head === null || head.next === null) return null;

  //slow & fast (tortoise & hare tecnique)
  let slow = head;
  let fast = head;
  let prev = null;

  //fast advance the double of slow
  //when fast is at the end, slow is at the middle
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    prev = slow;
    slow = slow.next;
  }

  //slow is pointing to the middle and prev to slow-1
  //we jump the node in the middle connecting prev with slow.next
  prev.next = slow.next;
  return head;
};

console.log(deleteMiddle([1, 3, 4, 7, 1, 2, 6]));
console.log(deleteMiddle([1, 2, 3, 4]));
