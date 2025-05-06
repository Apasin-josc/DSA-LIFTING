class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    toString() {
      return `${this.value}`;
    }
}

class binarySearchTree {
    constructor() {
        this.root = null;
    }

    insertNode(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return;
        }

        let current = this.root;

        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }
}

const tree = new binarySearchTree();
tree.insertNode(10);
tree.insertNode(5);
tree.insertNode(15);
tree.insertNode(1);

// 🧠 Protip para debug visualizer:

//the object tree, null = no properties, 2 adding indentation
console.log(JSON.stringify(tree, null, 2));
