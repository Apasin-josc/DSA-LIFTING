"""
 Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the
values along the path equals targetSum.

A leaf is a node with no children.
Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
Explanation: The root-to-leaf path with the target sum is shown. 
"""

from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        
        def dfs(node, curr_sum):
            if not node:
                return False
            
            #sum the values to check if we hit to the targetSum
            curr_sum += node.val

            #reaching to the leaf nodes
            if not node.left and not node.right:
                return curr_sum == targetSum
            
            #loon on the left, look on the right side with the curr_sum
            return dfs(node.left, curr_sum) or dfs(node.right, curr_sum)
        
        return dfs(root, 0)