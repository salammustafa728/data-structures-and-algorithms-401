"use strict";
const Stack = require("../stackandqueue/stack");

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  // root>> left >> right
  preOrder() {
    let stackTree = new Stack();
    let traverseNode = (node) => {
      stackTree.push(node.value);
      if (node.left) traverseNode(node.left);
      if (node.right) traverseNode(node.right);
    };
    traverseNode(this.root);
    return stackTree;
  }
  // left>>root>>right
  inOrderMethod() {
    let stackTree = new Stack();
    let traverseNode = (node) => {
      if (node.left) traverseNode(node.left);
      stackTree.push(node.value);
      if (node.right) traverseNode(node.right);
    };
    traverseNode(this.root);
    return stackTree;
  }
  //left>> right>> root
  postOrderMethod() {
    let stackTree = new Stack();
    let traverseNode = (node) => {
      if (node.left) traverseNode(node.left);
      if (node.right) traverseNode(node.right);
      stackTree.push(node.value);
    };
    traverseNode(this.root);
    return stackTree;
  }
}

module.exports = BinaryTree;
