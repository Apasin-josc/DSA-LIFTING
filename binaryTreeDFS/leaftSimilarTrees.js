/* 872. Leaf-Similar Trees

Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.

                                                (3️⃣)
                                               /     \
                                            (5️⃣)     (1️⃣)
                                           /   \      /   \
                                        (6️⃣) (2️⃣)  (9️⃣)  (8️⃣)
                                              /   \
                                            (7️⃣)  (4️⃣)  

For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

Two binary trees are considered leaf-similar if their leaf value sequence is the same.

Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

Example 1:

                                                (3️⃣)                                (3️⃣)
                                               /     \                              /     \
                                            (5️⃣)     (1️⃣)                      (5️⃣)     (1️⃣)
                                           /   \      /   \                      /   \      /   \
                                        (6️⃣) (2️⃣)  (9️⃣)  (8️⃣)               (6️⃣) (7️⃣)  (4️⃣)  (2️⃣)
                                              /   \                                      /      \
                                            (7️⃣)  (4️⃣)                                (9️⃣)    (8️⃣)  

Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
Output: true

Example 2:

                                                (1️⃣)                               (1️⃣)
                                               /     \                             /     \
                                            (2️⃣)     (3️⃣)                      (3️⃣)     (2️⃣)

Input: root1 = [1,2,3], root2 = [1,3,2]
Output: false
*/

const leafSimilar = (root1, root2) => {
  const leaves1 = [];
  const leaves2 = [];
  //recursive function
  collectLeaves(root1, leaves1);
  collectLeaves(root2, leaves2);

  if (leaves1.length !== leaves2.length) return false;
  for (let i = 0; i < leaves1.length; i++) {
    if (leaves1[i] !== leaves2[i]) return false;
  }
  return true;
};

const collectLeaves = (root, leaves) => {
  if (!root) return;

  if (!root.left && !root.right) {
    leaves.push(root.val);
    return;
  }
  collectLeaves(root.left, leaves);
  collectLeaves(root.right, leaves);
};
