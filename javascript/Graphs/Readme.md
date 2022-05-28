# Graphs

## Introduction

A Graph is a non-linear data structure consisting of a finite set of vertices (nodes) and set of edges which connect a pair of nodes.
Graph Terminology

*   Vertex - a node - data object that can have zero or more adjacent vertices.
*   Edge - a connection between two vertices.
*   Neighbor - the vertex's adjacent vertices (connected to it by edges).
*   Degree - the number of edges connected to that vertex.



![graph](https://media.geeksforgeeks.org/wp-content/cdn-uploads/undirectedgraph.png)


## Challenge


* implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods:

*  add node Arguments: value Returns: The added node Add a node to the graph

*   add edge Arguments: 2 nodes to be connected by the edge, weight (optional) Returns: nothing Adds a new edge between two nodes in the graph If specified, assign a weight to the edge Both nodes should already be in the Graph

*   get nodes Arguments: none Returns all of the nodes in the graph as a collection (set, list, or similar)

*   get neighbors Arguments: node Returns a collection of edges connected to the given node Include the weight of the connection in the returned collection

*   size Arguments: none Returns the total number of nodes in the graph


## Approach & Efficiency


**For time: O(1)**

* addVertex(): O(1)
* addEdge(): O(1)
* getNodes(): O(1)
* getSize(): O(1)
* getNeighbors(): o(1)


**For space: O(n+m)**

*  addVertex(): O(n) : n: number of Nodes
*  addEdge(): O(m) : m: number of edges
*  getNodes(): O(1)
*  getSize(): O(1)
*  getNeighbors():o(1)

## API 


* addVertex():

     *  Adds a new node to the graph
     *  Takes in the value of that node
     *  Returns the added node
    
* AddEdge():

   *  Adds a new edge between two nodes in the graph
   * Include the ability to have a “weight”
   * Takes in the two nodes to be connected by the edge
   * Both nodes should already be in the Graph

* getNodes()

    *   Returns all of the nodes in the graph as a collection (set, list, or similar)
    *  GetNeighbors()
    * Returns a collection of edges connected to the given node
    * Takes in a given node
    * Include the weight of the connection in the returned collection

* getSize():

   *  Returns the total number of nodes in the graph

* getNeighbors():

   * node Returns a collection of edges connected to the given node Include the weight of the connection in the returned collection

## Solution

> npm test graph.test.js