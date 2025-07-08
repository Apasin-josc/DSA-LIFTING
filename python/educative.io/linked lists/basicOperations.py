"""
The primary operations which are generally a part of the LinkedList class are listed below:
Ⓜ️ append at the end of the list O(1)
Ⓜ️ removing from the end of the linkedlist O(n)
Ⓜ️ append at the beginning of the list O(1)
Ⓜ️ remove at the beginning of the list O(1)
Ⓜ️ adding a node somewhere in the middle O(n)
Ⓜ️ removing a node somewhere in the middle O(n)
Ⓜ️ lookup for a node O(n)
Ⓜ️ print list O(1)

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

    def print_list(self):
        temp = self.head
        while temp is not None:
            print(temp.value, '->')
            temp = temp.next
    
    def append(self, value):
        new_node = Node(value)
        if self.head is None:
            self.head = new_node
            self.tail = new_node
        else:
            self.tail.next = new_node
            self.tail = new_node
        self.length += 1
        return True
    
    def pop(self):
        if self.length == 0:
            return None
        temp = self.head
        pre = self.head
        while temp.next is not None:
            pre = temp
            temp = temp.next
        self.tail = pre
        self.tail.next = None
        self.length -= 1
        if self.length == 0:
            self.head = None
            self.tail = None
        return temp
    
    def prepend(self, value):
        new_node = Node(value)
        if self.length == 0:
            self.head = new_node
            self.tail = new_node
        else:
            new_node.next = self.head
            self.head = new_node
        self.length += 1
        return True
    
    def pop_first(self):
        if self.length == 0:
            return None
        temp = self.head
        self.head = self.head.next
        temp.next = None
        self.length -= 1
        if self.length == 0:
            self.head = None
            self.tail = None
        return temp 

    def get(self,index):
        if index < 0 or index >= self.length:
            return None
        temp = self.head
        for _ in range(index):
            temp = temp.next
        return temp
    
    def set_value(self, index, value):
        temp = self.get(index)
        if temp is not None:
            temp.value = value
            return True
        else:
            return False
        
    def insert(self, index, value):
        #out of range
        if index < 0 or index >= self.length:
            return False
        
        #adding at the beginning
        if index == 0:
            return self.preprend(value)
        
        #adding at the end
        if index == self.length:
            return self.append(value)
        
        new_node = Node(value)
        temp = self.get(index - 1)
        new_node.next = temp.next
        temp.next = new_node
        self.length += 1
        return True

        
    def remove(self, index):
        if index < 0 or index >= self.length:
            return None
        
        if index == 0:
            self.pop_first()

        if index == self.length - 1:
            self.pop()

        




list = LinkedList(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
#print('the value of the node is:', list.get(3))
#list.set_value(3, 10)
list.print_list()