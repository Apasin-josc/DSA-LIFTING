""" 
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should 
be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list. 

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

"""
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
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        # Initialize a dummy node to act as the head of the merged list
        d = ListNode()

        # 'current' pointer to build the new list starting from dummy
        curr = d

        while list1 and list2:
            if list1.val < list2.val:
                curr.next = list1
                curr = list1
                list1 = list1.next
            else:
                curr.next = list2
                curr = list2
                list2 = list2.next
        
        # Attach the remaining nodes from either list (if any)
        curr.next = list1 if list1 else list2
        
        # Return the merged list, skipping the dummy node
        return d.next

if __name__ == "__main__":
    list1 = ListNode(1, ListNode(2, ListNode(4)))
    list2 = ListNode(1, ListNode(3, ListNode(4)))
    print(Solution().mergeTwoLists(list1, list2))