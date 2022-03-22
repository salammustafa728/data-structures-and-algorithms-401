'use strict';

const PesudoQueue = require('../stack-queue-pseudo');

describe('test pesudo class', () => {
  it('test enqueue function', () => {
    const PesudoQueuee = new PesudoQueue();
    PesudoQueuee.enqueue(5);
    PesudoQueuee.enqueue(8);
    expect(PesudoQueuee.s1.peek()).toBe(8);
  });
  it('test dequeue function', () => {
    const PesudoQueuee = new PesudoQueue();
    PesudoQueuee.enqueue(5);
    PesudoQueuee.enqueue(8);
    expect(PesudoQueuee.s1.pop()).toBe(8);
    PesudoQueuee.dequeue();
    expect(PesudoQueuee.s1.size).toBe(1);
  });
});
