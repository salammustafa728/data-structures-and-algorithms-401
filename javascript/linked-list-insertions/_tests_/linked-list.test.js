'use strict';
const LinkedLilst = require('../index');

describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });
});

describe('test Linked List', () => {
  it('test creating ll instances', () => {
    const ll = new LinkedLilst();
    expect(ll).toBeDefined();
    expect(ll.head).toBeNull();
  });
});

describe('append to the end of ll', () => {
  it('add to an empty ll', () => {
    const ll = new LinkedLilst();
    ll.append('a');
    expect(ll.head.value).toEqual('a');
    expect(ll.head.next).toBeNull();
  });
  // if ll is not empty
  it('add to an not empty ll', () => {
    const ll = new LinkedLilst();
    ll.append('a');
    ll.append('b');
    ll.append('c');
    expect(ll.head.value).toEqual('a');
    expect(ll.head.next.value).toEqual('b');
    expect(ll.head.next.next.value).toEqual('c');
    expect(ll.head.next.next.next).toBeNull();
  });
  it('test inserBefore', () => {
    const ll = new LinkedLilst();
    ll.append('a');
    ll.append('b');
    ll.append('d');
    ll.inserBefore('d','c');
    expect(ll.head.value).toEqual('a');
    expect(ll.head.next.value).toEqual('b');
    expect(ll.head.next.next.value).toEqual('c');
    expect(ll.head.next.next.next.value).toEqual('d');
    expect(ll.head.next.next.next.next).toBeNull();
  });
  it('test inserAfter', () => {
    const ll = new LinkedLilst();
    ll.append('a');
    ll.append('b');
    ll.append('c');
    ll.inserAfter('c','d');
    expect(ll.head.value).toEqual('a');
    expect(ll.head.next.value).toEqual('b');
    expect(ll.head.next.next.value).toEqual('c');
    expect(ll.head.next.next.next.value).toEqual('d');
    expect(ll.head.next.next.next.next).toBeNull();
  });
});

