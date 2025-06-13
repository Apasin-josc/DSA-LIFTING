"""
Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. 
Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
Return true if there is a cycle in the linked list. Otherwise, return false. 

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
"""

from typing import Optional

class ListNode:
    def __init__(self, x, next=None):
        self.val = x
        self.next = next

        
    def __repr__(self):
        curr, vals = self, []
        while curr:
            vals.append(str(curr.val))
            curr = curr.next
        return " -> ".join(vals)

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        #🐇 #🐢
        hare = tortoise = head

        while hare and hare.next:
            hare = hare.next.next
            tortoise = tortoise.next

            if hare == tortoise:
                return True
        
        return False

if __name__ == "__main__":
    head = ListNode(3, ListNode(2, ListNode(0, ListNode(-4))))
    print(Solution().hasCycle(head))