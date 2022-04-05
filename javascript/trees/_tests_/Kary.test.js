"use strict";
const {fizzBuzzTree,KaryTree} = require("../k-ary-tree/fizzbuzztree");
let Node = require('../k-ary-tree/node');

describe("test k-ary tree", () => {
  it("test fizzbuzztree", () => {
    let one = new Node(50);
    let two = new Node(15);
    let three = new Node(2);
    let four = new Node(7);
    let five = new Node(6);

    three.nodeChaildList.push(five, four);
    four.nodeChaildList.push(one, two);

    let tree = new KaryTree(three);
    expect(fizzBuzzTree(tree).arrK).toEqual(['2', 'Fizz', '7', 'Buzz', 'FizzBuzz']);
  });
  it("test null tree", () => {
    let tree = new KaryTree();
    expect(fizzBuzzTree(tree)).toEqual(null);
  });
});
