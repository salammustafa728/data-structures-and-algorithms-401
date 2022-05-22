"use strict";

const LinkedList = require("../LinkedList");

class HashTable {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    return (
      (key.split("").reduce((acc, char) => {
        return acc + char.charCodeAt();
      }, 0) *
        599) %
      this.size
    );
  }
  set(key, value) {
    let hashIdx = this.hash(key);
    // console.log({ hashIdx });
    if (!this.map[hashIdx]) {
      this.map[hashIdx] = new LinkedList();
    }
    let newData = { [key]: value };
    this.map[hashIdx].append(newData);
  }
  get(key) {
    let index = this.hash(key);
    if (!this.map[index]) {
      return null;
    }
    let entry = this.map[index].head;
    do {
      if (Object.keys(entry.value)[0] === key) {
        return entry.value;
      }
      entry = entry.next;
    } while (entry);
    return null;
  }
  contain(key) {
    let index = this.hash(key);
    if (this.map[index]) {
      let currentEntry = this.map[index].head;
      while (currentEntry) {
        if (currentEntry.value[key]) {
          return true;
        }
        currentEntry = currentEntry.next;
      }
    } else {
      return false;
    }

    return false;
  }

  keys() {
    const keys = [];
    for (let i=0; i<this.size ;i++) {
      if (this.map[i]) {
        let entry = this.map[i].head;
        while (entry) {
          keys.push(Object.keys(entry.value)[0]);
          entry = entry.next;
        }
      }
    }
    return keys;
  }

}
// const myHash = new HashTable(1024);

// myHash.set('Salam', 'CS');
// myHash.set('farah', 'SE');

module.exports = HashTable;
