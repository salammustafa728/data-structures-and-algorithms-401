"use strict";

let Node = require("./node");

class Queue {
  constructor() {
    this.frist = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.frist) {
      this.frist = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.frist) return 'is empty';
    const temp = this.frist;
    if (this.frist === this.last) {
      this.last = null;
    }
    this.frist = this.frist.next;
    this.size--;
    return temp.value;
  }
  peek() {
    if (this.size === 0) {
      return 'is empty';
    } else {
      return this.frist.value;
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

module.exports = Queue;
