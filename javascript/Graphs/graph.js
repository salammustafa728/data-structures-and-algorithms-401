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

  //   bft(startNode) {
  //     let queue = [];
  //     let visitedNodes = new Set();

  //     queue.push(startNode);
  //     visitedNodes.add(startNode);

  //     while (queue.length) {
  //       const currentNode = queue.shift();
  //       const neighbors = this.getNeighbors(currentNode);
  //       for (let neighbor of neighbors) {
  //         const neighborNode = neighbor.vertex;
  //         if (visitedNodes.has(neighborNode)) {
  //           continue;
  //         } else {
  //           visitedNodes.add(neighborNode);
  //         }
  //         queue.push(neighborNode);
  //       }
  //     }
  //   }

}

module.exports = Graph;
