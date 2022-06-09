const vertexex = ["A", "B", "C", "D", "E"];

const vertexIdx = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
};

const adjacencyMatrix = [
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 1, 0, 1, 1],
  [1, 0, 1, 0, 1],
  [0, 0, 1, 1, 0],
];
//A>>B,D
//B>>A,C
//C>>B,D,E
//D>>A,C,E
//E>>C,D
// const adjacencyList = new Map();
// adjacencyList.set(1, new Set([2, 3]));
// adjacencyList.set(2, new Set([3, 4]));
// adjacencyList.set(3, new Set());
// adjacencyList.set(4, new Set([3]));

const adjacencyMatrixFun = (matrix) => {
  const adjacencyNode = [];
  for (let i = 0; i < vertexex.length; i++) {
    for (let index = 0; index < matrix.length; index++) {
      if (matrix[i][index] === 1) {
        adjacencyNode.push(vertexex[index]);
      }
    }
    console.log("________________");
    console.log(vertexex[i]+"|");
    console.log(adjacencyNode);
  }
  return adjacencyNode;
};
console.log(adjacencyMatrixFun(adjacencyMatrix));
