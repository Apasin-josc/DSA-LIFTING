"""
The primary operations which are generally a part of the LinkedList class are listed below:
Ⓜ️ append at the end of the list O(1)
Ⓜ️ removing from the end of the linkedlist O(n)
Ⓜ️ append at the beginning of the list O(1)
Ⓜ️ remove at the beginning of the list O(1)
Ⓜ️ adding a node somewhere in the middle O(n)
Ⓜ️ removing a node somewhere in the middle O(n)
Ⓜ️ lookup for a node O(n)
Ⓜ️ 

Node:   {
        "value", 20,
        "next", None
        }
"""
class Node:
    def __init__(self,value):
        self.value = value
        self.next = None

class LinkedList:
    def __init__(self, value):
        #calling the Node class
        new_node = Node(value)
        self.head = new_node
        self.tail = new_node
        self.length = 1



list = LinkedList(20)
print(list.head.value)