'use strict';
const { it } = require('eslint/lib/rule-tester/rule-tester');
const Node = require('../node');

describe('test node class', () => {
  it('test creating a node instance with next and value',()=>{
    const value = 'salam';
    const node = new Node(value);
    expect(node).toBeInstanceOf(Node);
    expect(node.value).toEqual(value);
    expect(node.next).toBeNull();
  });
});
