'use strict';

const Graph = require('../graph');

describe('breadth first graph test', () => {
  let g = new Graph();
  test('', () => {
    g.addVertex('A');
    g.addVertex('B');
    g.addVertex('C');
    g.addVertex('D');
    g.addVertex('E');
    g.addVertex('F');
    g.addVertex('G');

    g.addEdge('A', 'C');
    g.addEdge('A', 'B');
    g.addEdge('A', 'D');
    g.addEdge('D', 'E');
    g.addEdge('E', 'F');
    g.addEdge('B', 'G');

    g.breadthFirst('A');
    console.log(g.breadthFirst('A'));
    expect(g.breadthFirst('A')).toEqual(['A', 'C', 'B', 'D']);
    // }
  });
});
