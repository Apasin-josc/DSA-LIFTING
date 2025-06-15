from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        
        def height(node):
            if not node:
                return 0
            
            left = height(node.left)
            if left == -1:
                return -1  # left subtree is unbalanced
            
            right = height(node.right)
            if right == -1:
                return -1  # right subtree is unbalanced
            
            if abs(left - right) > 1:
                return -1  # this node is unbalanced
            
            return 1 + max(left, right)  # return subtree height
        
        return height(root) != -1