'use strict';

const BinaryTree = require('../binaryTree');
const Node = require('../node');
let tree = null;

beforeAll(() => {
  let one = new Node(1);
  let two = new Node(2);
  let three = new Node(3);
  let four = new Node(4);
  let six = new Node(6);

  one.left = two;
  one.right = three;
  two.right = six;
  three.left = four;

  tree = new BinaryTree(one);
});

describe('test binary tree', () => {
  it('test root', () => {
    expect(tree.root.value).toBe(1);
  });
  it('test preOrder method',()=>{
    let expectOut = [1,2,6,3,4];
    let pre = tree.preOrder();
    console.log(pre);
    expect(pre).toEqual(expectOut);
  });
  it('test inOrder method',()=>{
    let expectOut = [2,6,1,4,3];
    let inOr = tree.inOrderMethod();
    console.log(inOr);
    expect(inOr).toEqual(expectOut);
  });
  it('test postOrder method',()=>{
    let expectOut = [6,2,4,3,1];
    let postOr = tree.postOrderMethod();
    console.log(postOr);
    expect(postOr).toEqual(expectOut);
  });
  // it('test max value function',()=>{
  //   tree.preOrder();
  //   tree.findMaxVal(tree);
  //   console.log(tree.findMaxVal(tree));
  //   expect(tree.findMaxVal(tree)).toBeDefined();
  //   expect(tree.findMaxVal(tree)).toEqual(6);
  // });
  it('test breadthFirst method',()=>{
    let expectOut = [1,2,3,6,4];
    let x= tree.breadthFirst(tree);
    console.log(x, 'breadth');
    expect(x).toEqual(expectOut);
  });
});

