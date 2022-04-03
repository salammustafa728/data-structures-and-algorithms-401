"use strict";

class BinaryTree {
  constructor(root = null) {
    this.root = root;
    this.treeChild = [];
  }
  // root>> left >> right
  preOrder() {
    // let stackTree = new Stack();
    let tree = [];
    let traverseNodePre = (node) => {
      tree.push(node.value);
      if (node.left) traverseNodePre(node.left);
      if (node.right) traverseNodePre(node.right);
    };
    traverseNodePre(this.root);
    return tree;
  }

  // left>>root>>right
  inOrderMethod() {
    let tree = [];
    let traverseNodeInOr = (node) => {
      if (node.left) traverseNodeInOr(node.left);
      tree.push(node.value);
      if (node.right) traverseNodeInOr(node.right);
    };
    traverseNodeInOr(this.root);
    return tree;
  }
  //left>> right>> root
  postOrderMethod() {
    let tree = [];
    let traverseNodepost = (node) => {
      if (node.left) traverseNodepost(node.left);
      if (node.right) traverseNodepost(node.right);
      tree.push(node.value);
    };
    traverseNodepost(this.root);
    return tree;
  }


  breadthFirst(tree) {
    if (!this.root) return 'empty tree';
    tree = [this.root];
    let traverseTree = [];

    while (tree.length) {
      let nodetree = tree.shift();

      if (nodetree.left) {
        tree.push(nodetree.left);
      }
      if (nodetree.right) {
        tree.push(nodetree.right);
      }

      traverseTree.push(nodetree.value);
    }
    return traverseTree;
  }

  findMaxVal(tree) {
    tree = this.preOrder();
    let maxVal = tree[0];

    if (this.root === null) {
      return "empty tree";
    }
    tree.forEach((element) => {
      if (element > maxVal) {
        maxVal = element;
      }
    });
    return maxVal;
  }
}



module.exports = BinaryTree;
