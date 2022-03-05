'use strict';

// Require our linked list implementation
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


describe('insert to the beginning of ll ', () => {
  // if ll is empty
  it('add to empty LL', () => {
    const ll = new LinkedLilst();
    ll.insert('a');
    expect(ll.head.value).toEqual('a');
    expect(ll.head.next).toBeNull();
  });
  // if ll isn't empty
  it('add to empty LL', () => {
    const ll = new LinkedLilst();
    ll.insert('a');
    ll.insert('b');
    expect(ll.head.value).toEqual('b');
    expect(ll.head.next.value).toEqual('a');
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
});

describe('Check if ll is includes value or not', () => {
  it('check includs', () => {
    const ll = new LinkedLilst();
    ll.insert('a');
    ll.insert('b');
    expect(ll.includs('a')).toBeTruthy();
    expect(ll.includs('b')).toBeTruthy();
    expect(ll.includs('c')).toBeFalsy();
  });
});

describe('check toString method', () => {
  it('check toString', () => {
    const ll = new LinkedLilst();
    ll.append('a');
    ll.append('b');
    ll.append('c');
    expect(ll.toString()).toEqual('{ a } -> { b } -> { c } -> NULL');
  });
});

