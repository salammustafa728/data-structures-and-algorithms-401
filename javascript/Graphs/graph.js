'use strict';

// const Vertex = require("./vertex");
const Edge = require('./edge');

class Graph {
  constructor() {
    this.adjacenctList = new Map();
  }

  addVertex(vertex) {
    this.adjacenctList.set(vertex, []);
  }

  addEdge(start, end, weight) {
    if (!this.adjacenctList.has(start) || !this.adjacenctList.has(end)) {
      //   console.log('one or both vertex is not existed');
      return;
    }

    const adjaceNeighbors = this.getNeighbors(start);

    adjaceNeighbors.push(new Edge(end, weight));

    // bi-directional
    // const adjacBiDirction = this.getNeighbors(end);
    // adjacBiDirction.push(new Edge(start, weight));
  }

  getNeighbors(vertex) {
    if (!this.adjacenctList.has(vertex)) {
      //   console.log('node does not exist');
      return;
    }
    return this.adjacenctList.get(vertex);
  }

  getNodes() {
    let nodesArr = [];
    for (const [vertex] of this.adjacenctList.entries()) {
      nodesArr.push(vertex);
    }
    return nodesArr;
  }

  getSize() {
    return this.adjacenctList.size > 0 ? this.adjacenctList.size : null;
  }

  breadthFirst(start) {
    let queue = [];
    let visited = new Set();

    queue.push(start);
    visited.add(start);

    let result = [start];
    while (queue.length) {
      const currentNode = queue.shift();
      const neighbors = this.getNeighbors(currentNode);
      for (let neighbor of neighbors) {
        const neighborNode = neighbor.vertex;
        if (visited.has(neighborNode)) {
          continue;
        } else {
          result.push(neighborNode);
          visited.add(neighborNode);
        }
        queue.push(neighborNode);
      }
      return result;
    }
  }

  depthFirst(statNode) {
    if (this.adjacenctList.size === 0) {
      return 'empty graph';}
    if (!this.adjacenctList.has(statNode)) {
      return null; }
    let visited = [];
    let result = [];
    const traverse = (node, visited) => {
      if (!node) return;
      visited.push(node);
      if (!result.includes(node)) {
        result.push(node);}
      const neighborsNode = this.getNeighbors(node);
      for (let neighbor of neighborsNode) {
        if (!visited.includes(neighbor.vertex)) {
          traverse(neighbor.vertex, visited);
        }}};
    traverse(statNode, visited);
    return result;
  }
}

module.exports = Graph;
