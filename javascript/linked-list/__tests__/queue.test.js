'use strict';

const Queue = require('../stackandqueue/queue');

describe('testing the queue', () => {
  it('test creaing a queue', () => {
    const newQueue = new Queue();
    expect(newQueue instanceof Queue).toBeTruthy();
    expect(newQueue.frist).toBeNull();
  });


  it('testing enqueue to the queue', () => {
    let newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    expect(newQueue.size).toEqual(2);
  });

  it('testing pop from the stack', () => {
    let newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    expect(newQueue.dequeue()).toEqual(1);
    expect(newQueue.dequeue()).toEqual(2);
    expect(newQueue.size).toEqual(1);
  });
  it('testing peek from the queue', () => {
    let newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    expect(newQueue.peek()).toEqual(1);
  });
  it('testing isEmpty from the queue', () => {
    let newQueue = new Queue();
    expect(newQueue.isEmpty()).toBeTruthy();
    expect(newQueue.peek()).toEqual('is empty');
  });
});
