'use strict';

const businessTrip = require('../graphBusinessTrip');
const Graph = require('../../graph');

describe('test graph-business-trip', () => {
  const graph = new Graph();

  graph.addVertex('Pandora');
  graph.addVertex('Arendelle');
  graph.addVertex('Narnia');
  graph.addVertex('Naboo');
  graph.addVertex('Metroville');
  graph.addVertex('Monstroplolis');

  graph.addEdge('Pandora', 'Arendelle', 150);
  graph.addEdge('Metroville', 'Pandora', 82);
  graph.addEdge('Arendelle', 'Monstroplolis', 42);
  graph.addEdge('Monstroplolis', 'Naboo', 73);
  graph.addEdge('Narnia', 'Naboo', 250);
  it('test if Narnia and Naboo business trip = 250', () => {
    expect(businessTrip(graph, ['Narnia', 'Naboo'])).toEqual('$ 250');
  });
  it('return null when there is no trip', () => {
    expect(businessTrip(graph, ['Naboo', 'Arendelle'])).toEqual('null');
  });
  it('return null when there is no trip btween more than two cities', () => {
    expect(businessTrip(graph, ['Narnia', 'Metroville', 'Naboo'])).toEqual(
      'null'
    );
  });
});
