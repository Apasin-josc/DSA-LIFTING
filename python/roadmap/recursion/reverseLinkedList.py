
class SinglyNode:
	def __init__(self, val, next=None):
		self.val = val
		self.next = next
		
	def __str__(self):
		return str(self.val)
	
Head = SinglyNode(1)
A = SinglyNode(3)
B = SinglyNode(6)
C = SinglyNode(9)

Head.next = A
A.next = B
B.next = C

def reverse(node):
    if not node:
        return
    
    reverse(node.next)
    print(node)


print(reverse(Head))