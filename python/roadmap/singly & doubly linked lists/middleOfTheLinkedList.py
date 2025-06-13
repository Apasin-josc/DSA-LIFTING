""" Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one. """

from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
    
    def __repr__(self):
        curr = self
        vals = []
        while curr:
            vals.append(str(curr.val))
            curr = curr.next
        return "[" + ",".join(vals) + "]"

class Solution:
    def middleNode(self, head:Optional[ListNode]) -> Optional[ListNode]:
        hare = tortoise = head
        
        while hare and hare.next:
            hare = hare.next.next
            tortoise = tortoise.next
        
        return tortoise


if __name__ == "__main__":
    head = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))
    print(Solution().middleNode(head))