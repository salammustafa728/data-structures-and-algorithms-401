'use strict';

const Node = require('./node');
// const LinkedLilst = require("../index");

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return 'is empty';
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    } else {
      this.first = this.first.next;
      this.size--;
      return temp.value;
    }
  }
  peek() {
    if (this.size === 0) {
      return 'is empty';
    } else {
      return this.first.value;
    }
  }
  isEmpty() {
    if (this.size === 0) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports =Stack;
