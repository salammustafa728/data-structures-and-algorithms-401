"use strict";

const Stack = require("./stack");

class PesudoQueue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  enqueue(val) {
    this.s1.push(val);
  }

  dequeue() {
    this.s2.push(this.s1.peek());
    this.s1.pop();
  }
}

module.exports = PesudoQueue;
