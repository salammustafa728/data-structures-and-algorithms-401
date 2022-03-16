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
  // inserBefore(val,newVal){
  //   const node = new Node(newVal);
  //   let current = this.head;
  //   while(current.next.value!==val){
  //     current=current.next;
  //   }
  //   node.next = current.next;
  //   current.next = node;
  // }
  // inserAfter(val,newVal){
  //   const node = new Node(newVal);
  //   let current = this.head;
  //   while(current.value!==val){
  //     current=current.next;
  //   }
  //   node.next = current.next;
  //   current.next = node;
  // }
  // append(value) {
  //   const node = new Node(value);
  //   if (!this.head) {
  //     //ll is empty
  //     this.head = node;
  //   } else {
  //     //ll is not empty
  //     let current = this.head;
  //     while (current.next) {
  //       current = current.next;
  //     }
  //     current.next = node;
  //   }
  // }
  // includs(value) {
  //   if (this.head !== null) {
  //     let current = this.head;
  //     while (current !== null) {
  //       if (current.value !== value) {
  //         current = current.next;
  //       } else return true;
  //     }
  //   } else return false;
  // }
  // toString() {
  //   let strLL = '';
  //   if (this.head !== null) {
  //     let current = this.head;
  //     while (current !== null) {
  //       // console.log(current.value);
  //       strLL += `{ ${current.value} } -> `;
  //       current = current.next;
  //     }
  //     strLL += `NULL`;
  //     return strLL;
  //   } else return 'NULL';
  // }

  // kthFromEnd(k) {
  //   // to count the length of ll
  //   let len = 0;
  //   let current = this.head;
  //   while (current !== null) {
  //     current = current.next;
  //     len++;
  //   }
  //   if (k < 0) {
  //     return 'Exception';
  //   }
  //   if (len < k) {
  //     return 'Exception';
  //   }
  //   current = this.head;
  //   for (let i = 0; i < len - k - 1; i++) {
  //     if(current.next===null){
  //       return;
  //     }
  //     current = current.next;
  //   }
  //   return current.value;
  // }

  zipLists(ll1, ll2) {
    let curr1 = ll1.head;
    let curr2 = ll2.head;
    let point = curr1;
    let x = 0;
    while (curr1.next !== null && curr2.next !== null) {
      if (x % 2 === 0) {
        point.next = curr2;
        curr2 = curr2.next;
      } else {
        point.next = curr1;
        curr1 = curr1.next;
      }
      point = point.next;
      x++;
      if (!curr1) {
        point.next = curr1;
      }
      if (!curr2) {
        point.next = curr2;
      }
      return ll1;
    }
  }
}

module.exports = LinkedList;
