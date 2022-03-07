'use strict';
const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      //ll is empty
      this.head = node;
    } else {
      //ll is not empty
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }
  inserBefore(val,newVal){
    const node = new Node(newVal);
    let current = this.head;
    while(current.next.value!==val){
      current=current.next;
    }
    node.next = current.next;
    current.next = node;
  }
  inserAfter(val,newVal){
    const node = new Node(newVal);
    let current = this.head;
    while(current.value!==val){
      current=current.next;
    }
    node.next = current.next;
    current.next = node;
  }
}
module.exports = LinkedList;
