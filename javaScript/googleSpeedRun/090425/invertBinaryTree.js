/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return null;
    const queue = [];
    queue.push(root);
    while(queue.length > 0){
        const currentNode = queue.shift();
        [currentNode.left, currentNode.right] = [currentNode.right, currentNode.left];
        if(currentNode.left !== null) queue.push(currentNode.left);
        if(currentNode.right !== null) queue.push(currentNode.right);
    }
    return root;
};
console.log(invertTree());