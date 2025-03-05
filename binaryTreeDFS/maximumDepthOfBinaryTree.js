/* 104. Maximum Depth Of Binary Tree

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the 
root node down to the farthest leaf node.

Example 1:
                (3️⃣)
               /    \
            (9️⃣)  (2️⃣0️⃣)
                  /      \
              (1️⃣5️⃣)    (7️⃣)
              
Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:
Input: root = [1,null,2]
Output: 2 */

// Binary Tree Node Definition
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Function to create a binary tree from an array
function createBinaryTree(arr) {
  if (!arr || arr.length === 0 || arr[0] === null) return null;

  // Create root node
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (queue.length > 0 && i < arr.length) {
    const current = queue.shift();

    // Left child
    if (i < arr.length && arr[i] !== null) {
      current.left = new TreeNode(arr[i]);
      queue.push(current.left);
    }
    i++;

    // Right child
    if (i < arr.length && arr[i] !== null) {
      current.right = new TreeNode(arr[i]);
      queue.push(current.right);
    }
    i++;
  }

  return root;
}

// Maximum Depth Solution
const maxDepth = (root) => {
  // Your solution here
  if (root === null) return 0;

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return 1 + Math.max(leftDepth, rightDepth);
};

// Test cases
const testCases = [
  [3, 9, 20, null, null, 15, 7], // Example 1
  [1, null, 2], // Example 2
  [], // Empty tree
  [1], // Single node tree
  [1, 2, 3, 4, 5], // Balanced tree
];

// Run tests
testCases.forEach((caseArr, index) => {
  const tree = createBinaryTree(caseArr);
  console.log(`Test Case ${index + 1}:`);
  console.log("Input Array:", caseArr);
  console.log("Maximum Depth:", maxDepth(tree));
  console.log("---");
});
