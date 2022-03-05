"use strict";
const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
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
  includs(value) {
    if (this.head !== null) {
      let current = this.head;
      while (current !== null) {
        if (current.value !== value) {
          current = current.next;
        } else return true;
      }
    } else return false;
  }
  toString() {
    let strLL = '';
    if (this.head !== null) {
      let current = this.head;
      while (current !== null) {
        // console.log(current.value);
        strLL += `{ ${current.value} } -> `;
        current = current.next;
      }
      strLL+=`NULL`;
      return strLL;
    } else return 'NULL';
  }
}

module.exports = LinkedList;
