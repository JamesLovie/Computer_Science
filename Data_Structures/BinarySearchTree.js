class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    // root of a binary seach tree.
    this.root = null;
  }

  insertData(data) {
    const newNode = new Node(data);

    // root is null then node will be added to the tree and made root.
    if (this.root === null) {
      this.root = newNode;
    } else {
      // find the correct position in the tree and add the node.
      this.insertNode(this.root, newNode);
    }
  }

  // Method to insert a node in a tree it moves over the tree to find the location to insert a node with a given data.
  insertNode(node, newNode) {
    // if the data is less than the node data move left of the tree.
    if (newNode.data < node.data) {
      // if left is null insert node here 
      if (node.left === null) {
        node.left = newNode;
      } else {
        // if left is not null recur until null is found.
        this.insertNode(node.left, newNode);
      }
    } else {
      // if the data is more than the node data move right of the tree.
      if (node.right === null) {
        node.right = newNode;
      } else {
        // if right is not null recur until null is found.
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Performs inorder traversal of a tree 
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }
}

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insertData(5);
binarySearchTree.insertData(2);
binarySearchTree.insertData(7);
binarySearchTree.insertData(8);
binarySearchTree.insertData(6);
binarySearchTree.insertData(1);
binarySearchTree.insertData(3);
binarySearchTree.inorder(5);