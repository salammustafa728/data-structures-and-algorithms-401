"use strict";

const businessTrip = (graph, arrCityNames) => {
  let cost = 0;
  for (let i = 0; i < arrCityNames.length - 1; i++) {
    let neighborsNode = graph.getNeighbors(arrCityNames[i]);
    for (let j = 0; j <= neighborsNode.length - 1; j++) {
      if (arrCityNames[i + 1] === neighborsNode[j].vertex) {
        cost += neighborsNode[j].weight;
      }
    }
    if (cost === 0) {
      return null;
    }
  }
  return `$ ${cost}`;
};


module.exports = businessTrip;
