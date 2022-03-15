'use strict';

const Stack = require('../stackandqueue/stack');

describe('testing the stack', () => {
  it('test creaing a Stack', () => {
    const newStack = new Stack();
    expect(newStack instanceof Stack).toBeTruthy();
    expect(newStack.first).toBeNull();
  });


  it('testing push to the stack', () => {
    let newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    expect(newStack.size).toEqual(2);
  });

  it('testing pop from the stack', () => {
    let newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.push(3);
    expect(newStack.pop()).toEqual(3);
    expect(newStack.pop()).toEqual(2);
    expect(newStack.size).toEqual(1);
  });
  it('testing peek from the stack', () => {
    let newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    expect(newStack.peek()).toEqual(2);
  });
  it('testing isEmpty from the stack', () => {
    let newStack = new Stack();
    expect(newStack.isEmpty()).toBeTruthy();
    expect(newStack.peek()).toEqual('is empty');
  });
});
