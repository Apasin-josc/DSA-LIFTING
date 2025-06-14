""" 
Given the root of a binary tree, invert the tree, and return its root.

Example 1:
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

Example 2:
Input: root = [2,1,3]
Output: [2,3,1]

Example 3:
Input: root = []
Output: []
  """

from typing import Optional
from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
    
    def __str__(self):
        # Optional: for debugging, shows one node
        return str(self.val)

class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if not root:
            return
        # Swap
        root.left, root.right = root.right, root.left
        # Recurse
        self.invertTree(root.left)
        self.invertTree(root.right)
        return root

# Helper: List -> TreeNode
def list_to_tree(data):
    if not data:
        return None
    root = TreeNode(data[0])
    queue = deque([root])
    i = 1
    while queue and i < len(data):
        node = queue.popleft()
        if i < len(data) and data[i] is not None:
            node.left = TreeNode(data[i])
            queue.append(node.left)
        i += 1
        if i < len(data) and data[i] is not None:
            node.right = TreeNode(data[i])
            queue.append(node.right)
        i += 1
    return root

def tree_to_list(root):
    if not root:
        return []
    result = []
    queue = deque([root])
    while queue:
        node = queue.popleft()
        if node:
            result.append(node.val)
            queue.append(node.left)
            queue.append(node.right)
        else:
            result.append(None)
    # Remove trailing None's to match LeetCode style
    while result and result[-1] is None:
        result.pop()
    return result

if __name__ == '__main__':
    input_list = [4, 2, 7, 1, 3, 6, 9]
    root = list_to_tree(input_list)

    inverted_root = Solution().invertTree(root)

    output_list = tree_to_list(inverted_root)

    print(output_list)
