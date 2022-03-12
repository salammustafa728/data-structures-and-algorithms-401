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

  zipLists(l1, l2) {
    let l3, tail, pred;
    l3=new LinkedList('');
    tail = l3;
    while(l1 || l2){
      if(l1 !== null) tail.value += l1.value;
      if(l2 !== null) tail.value += l2.value;

      tail.next = new LinkedList('');
      pred = tail;
      tail = tail.next;

      l1 = l1 ? l1.next : l1;
      l2 = l2 ? l2.next : l2;
    }
    pred.next = null;

    return l3;
  }
}

module.exports = LinkedList;
