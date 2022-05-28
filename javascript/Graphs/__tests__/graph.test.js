'use strict';

const Graph = require('../graph');
const Vertex = require('../vertex');

let graph = new Graph();

let one = new Vertex(1);
let two = new Vertex(2);
let three = new Vertex(3);
let four = new Vertex(4);

describe('Graph test', () => {
  test('Node can be successfully added to the graph', () => {
    graph.addVertex(one);
    expect(graph.adjacenctList.size).toBe(1);
  });

  test('A collection of all nodes can be properly retrieved from the graph', () => {
    graph.addVertex(one);
    graph.addVertex(two);
    expect(graph.getNodes()).toMatchObject([{ value: 1 }, { value: 2 }]);
  });

  test('An edge can be successfully added to the graph', () => {
    graph.addEdge(one, two);
    expect(graph.adjacenctList.get(one)).toMatchObject([
      { vertex: { value: 2 }, weight: 0 },
    ]);
  });

  test('All appropriate neighbors can be retrieved from the graph, weight included', () => {
    expect(graph.getNeighbors(one)).toMatchObject([
      { vertex: { value: 2 }, weight: 0 },
    ]);
  });

  test('The proper size is returned, representing the number of nodes in the graph', () => {
    graph.addVertex(three);
    graph.addVertex(four);
    expect(graph.getSize()).toBe(4);
  });

  test('A graph with only one node and edge can be properly returned', () => {
    graph.addEdge(three);
    expect(graph.adjacenctList.size).toBe(4);
  });

  test('An empty graph properly returns null', () => {
    let graph2 = new Graph();
    expect(graph2.getNodes().length).toBe(0);
  });
});
