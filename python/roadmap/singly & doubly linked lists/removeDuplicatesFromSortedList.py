""" Given the head of a sorted linked list, delete all duplicates such that each element appears only once. 
Return the linked list sorted as well. """

from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

    def __repr__(self):
        vals = []
        curr = self
        while curr:
            vals.append(str(curr.val))
            curr = curr.next
        return " -> ".join(vals)


class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        curr = head
        
        while curr and curr.next:
            if curr.val == curr.next.val:
                curr.next = curr.next.next
            else:
                curr = curr.next
        return head

if __name__ == "__main__":
    head = ListNode(1, ListNode(1, ListNode(2, ListNode(3, ListNode(3)))))
    print(Solution().deleteDuplicates(head))