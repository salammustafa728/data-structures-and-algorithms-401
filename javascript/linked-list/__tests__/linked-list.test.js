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

// describe('append to the end of ll', () => {
//   it('add to an empty ll', () => {
//     const ll = new LinkedLilst();
//     ll.append('a');
//     expect(ll.head.value).toEqual('a');
//     expect(ll.head.next).toBeNull();
//   });
//   // if ll is not empty
//   it('add to an not empty ll', () => {
//     const ll = new LinkedLilst();
//     ll.append('a');
//     ll.append('b');
//     ll.append('c');
//     expect(ll.head.value).toEqual('a');
//     expect(ll.head.next.value).toEqual('b');
//     expect(ll.head.next.next.value).toEqual('c');
//     expect(ll.head.next.next.next).toBeNull();
//   });
//   it('test inserBefore', () => {
//     const ll = new LinkedLilst();
//     ll.append('a');
//     ll.append('b');
//     ll.append('d');
//     ll.inserBefore('d','c');
//     expect(ll.head.value).toEqual('a');
//     expect(ll.head.next.value).toEqual('b');
//     expect(ll.head.next.next.value).toEqual('c');
//     expect(ll.head.next.next.next.value).toEqual('d');
//     expect(ll.head.next.next.next.next).toBeNull();
//   });
//   it('test inserAfter', () => {
//     const ll = new LinkedLilst();
//     ll.append('a');
//     ll.append('b');
//     ll.append('c');
//     ll.inserAfter('c','d');
//     expect(ll.head.value).toEqual('a');
//     expect(ll.head.next.value).toEqual('b');
//     expect(ll.head.next.next.value).toEqual('c');
//     expect(ll.head.next.next.next.value).toEqual('d');
//     expect(ll.head.next.next.next.next).toBeNull();
//   });
// it ('testintg  toString method',()=>{
//   const LL = new LinkedLilst() ;
//   LL.insert('c');
//   LL.insert('b');
//   LL.insert('a');
//   expect(LL.toString()).toBe("{ a } -> { b } -> { c } -> NULL");
// })
// });

// describe('Check if ll is includes value or not', () => {
//   it('check includs', () => {
//     const ll = new LinkedLilst();
//     ll.insert('a');
//     ll.insert('b');
//     expect(ll.includs('a')).toBeTruthy();
//     expect(ll.includs('b')).toBeTruthy();
//     expect(ll.includs('c')).toBeFalsy();
//   });
// });

// describe('test kthFromEnd', () => {
//   it('test kthFromEnd cases', () => {
//     const ll = new LinkedLilst();
//     ll.insert(5);
//     ll.insert(6);
//     ll.insert(3);
//     ll.insert(1);
//     expect(ll.kthFromEnd(5)).toEqual('Exception');
//     expect(ll.kthFromEnd(2)).toEqual(3);
//     expect(ll.kthFromEnd(0)).toEqual(5);
//     expect(ll.kthFromEnd(3)).toEqual(1);
//     expect(ll.kthFromEnd(-1)).toBe('Exception');
//   });
// });

describe('test zipLists', () => {
  it('test ziplists cases', () => {
    const ll1 = new LinkedLilst('');
    const ll2 = new LinkedLilst('');
    ll1.insert(5);
    ll1.insert(6);
    ll1.insert(3);

    ll2.insert(1);
    ll2.insert(2);
    ll2.insert(3);
    console.log('zip lists  : ' + ll1.zipLists(ll1, ll2));
  });
});
