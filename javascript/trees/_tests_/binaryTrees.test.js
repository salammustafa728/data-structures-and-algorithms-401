'use strict';

const { it } = require('eslint/lib/rule-tester/rule-tester');
const BinaryTree = require('../binaryTree');
const Node = require('../node');
let tree = null;

describe('test binary tree', () => {
  beforeAll(() => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);

    one.left = two;
    one.right = three;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;
    tree = new BinaryTree(one);
  });
  it('test root', () => {
    expect(tree.root.value).toBe(1);
  });
  it('test preOrder method',()=>{
    let expectOut = [1,2,6,7,8,9,3,4,5];
    let pre = tree.preOrder();
    console.log(pre);
    expect(pre).toEqual(expectOut);
  });
  it('test max value function',()=>{
    tree.preOrder();
    tree.findMaxVal(tree);
    console.log(tree.findMaxVal(tree));
    expect(tree.findMaxVal(tree)).toBeDefined();
    expect(tree.findMaxVal(tree)).toEqual(9);
  });
});
