"use strict";

// const Graph = require("./graph");
// const graph = new Graph();
const vertexex=['A','B','C','D','E'];

const vertexIdx={
  'A':0,
  'B':1,
  'C':2,
  'D':3,
  'E':4
};

const adjacencyMatrix = [
  [0, 1, 0, 1,0],
  [1, 0, 1, 0,0],
  [0, 1, 0, 1,1],
  [1, 0, 1, 0,1],
  [0, 0, 1, 1,0],
];

const adjacencyList = new Map();
adjacencyList.set(1, new Set([2, 3]));
adjacencyList.set(2, new Set([3, 4]));
adjacencyList.set(3, new Set());
adjacencyList.set(4, new Set([3]));

const adjacencyMatrixFun = (node) => {
 const adjacencyNode=[];
 for (let i = 0; i < vertexex.length; i++) {
 let  nodVertex=vertexIdx[node];
   if(adjacencyMatrix[nodVertex][i]===1){
     adjacencyNode.push(vertexex[i]);
   }
   
 }
 return adjacencyNode;
};

// adjacencyMatrixFun(adjacencyMatrix);
console.log("A=> "+adjacencyMatrixFun('A'));
