'use strict';

const BinaryTree = require('./binaryTree');
const Node = require('./node');

class BinarySearh extends BinaryTree {
  constructor(root = null) {
    super(root);
  }
  add(val) {
    const node = new Node(val);
    if (this.root === null) {
      this.root = node;
      return this;
    }
    let treeValue = this.root;
    while (treeValue) {
      if (val < treeValue) {
        if (treeValue.left === null) {
          treeValue.left = node;
          return this;
        }
        treeValue = treeValue.left;
      } else {
        if (treeValue.right === null) {
          treeValue.right = node;
          return this;
        }
        treeValue = treeValue.right;
      }
    }
  }
  contains(val) {
    if (this.root === null) {
      return 'empty tree';
    }
    let searchedNode = this.root;
    while (searchedNode) {
      if (searchedNode.value === val) {
        return true;
      }
      if (val < searchedNode.value) {
        searchedNode = searchedNode.left;
      }
      if (val > searchedNode.value) {
        searchedNode = searchedNode.right;
      }
    }
    return false;
  }
}


module.exports = BinarySearh;
