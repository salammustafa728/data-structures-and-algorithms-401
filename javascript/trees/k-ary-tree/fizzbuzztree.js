"use strict";
const KaryTree = require("./k-ary-tree");
// const karyTreee = new KaryTree();
function fizzBuzzTree(kary) {
  if (kary.root === null) {
    return null;
  }
  let karyTree = kary;
  let arrK = [];
  let fizzBuzz=(node)=> {
    if (node.value % 3 === 0 && node.value % 5 === 0) {
      node.value = "FizzBuzz";
      arrK.push(node.value);
    } else if (node.value % 3 === 0) {
      node.value = "Fizz";
      arrK.push(node.value);
    } else if (node.value % 5 === 0) {
      node.value = "Buzz";
      arrK.push(node.value);
    } else {
      node.value = node.value.toString();
      arrK.push(node.value);
    }
    for (let i = 0; i < node.nodeChaildList.length; i++) {
      fizzBuzz(node.nodeChaildList[i]);
    }
  };
  if (karyTree.root) {
    fizzBuzz(karyTree.root);
  }
  return { karyTree, arrK };
}

module.exports = { fizzBuzzTree, KaryTree };
