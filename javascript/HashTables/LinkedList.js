"use strict";
const Node = require("./node");

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

  toString() {
    let strLL = '';
    if (this.head !== null) {
      let current = this.head;
      while (current !== null) {
        // console.log(current.value);
        strLL += `{ ${current.value} } -> `;
        current = current.next;
      }
      strLL += `NULL`;
      return strLL;
    } else return 'NULL';
  }

}

module.exports = LinkedList;
