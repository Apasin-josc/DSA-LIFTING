from typing import Optional
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        #diameter = max(L + R)
        self.max_diameter = 0

        def dfs(node):
            if not node:
                return 0
            
            left = dfs(node.left)
            right = dfs(node.right)
            
            #getting the max height from the deepest node
            self.max_diameter = max(self.max_diameter, left + right)

            #returning the height to the parent
            return max(left, right) + 1
        
        dfs(root)
        return self.max_diameter