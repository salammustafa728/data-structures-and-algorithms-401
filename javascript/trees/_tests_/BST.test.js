"use strict";
const BinarySearh = require("../BinarySearchTree");
let bst = null;
describe("test BST tree", () => {
  beforeAll(() => {
    bst = new BinarySearh();
    bst.add(5);
    bst.add(7);
    bst.add(6);
    bst.add(10);
  });

  it("test root", () => {
    console.log(bst.root.value);
    expect(bst.root.value).toBe(5);
  });
  it("test preOrder method", () => {
    let expectOut = [5, 7, 6, 10];
    let pre = bst.preOrder();
    console.log(pre);
    expect(pre).toEqual(expectOut);
  });
  it("test inOrder method", () => {
    let expectOut = [5, 7, 6, 10];
    let pre = bst.inOrderMethod();
    console.log(pre,' inOr');
    expect(pre).toEqual(expectOut);
  });
  it("test postOrder method", () => {
    let expectOut = [10, 6, 7, 5];
    let pre = bst.postOrderMethod();
    console.log(pre,' post');
    expect(pre).toEqual(expectOut);
  });
  it('test Contains value function',()=>{
    expect(bst.contains(61)).toBe(false);
    expect(bst.contains(7)).toBeTruthy();
  });
});
