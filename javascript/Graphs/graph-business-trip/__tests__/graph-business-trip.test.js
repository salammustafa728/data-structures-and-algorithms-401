'use strict';

const businessTrip = require('../graphBusinessTrip');
const Graph = require('../../graph');

describe('businessTrip', () => {
  it('businessTrip return cost or null', () => {
    const graph = new Graph();
    graph.addVertex('Pandora');
    graph.addVertex('Arendelle');
    graph.addVertex('Metroville');
    graph.addVertex('Monstropolis');
    graph.addVertex('Naboo');
    graph.addVertex('Narnia');


    graph.addEdge('Pandora', 'Arendelle', 150);
    graph.addEdge('Pandora', 'Metroville', 82);
    graph.addEdge('Arendelle', 'Monstropolis', 42);
    graph.addEdge('Arendelle', 'Metroville', 99);
    graph.addEdge('Metroville', 'Monstropolis', 105);
    graph.addEdge('Metroville', 'Naboo', 26);
    graph.addEdge('Monstropolis', 'Naboo', 73);
    graph.addEdge('Naboo', 'Narnia', 250);
    graph.addEdge('Monstropolis', 'Narnia', 37);

    //test if Pandora and Metroville business trip = 250
    expect(businessTrip(graph, ['Pandora', 'Metroville'])).toBe("$ 82");

    //return null when there is no trip btween more than two cities
    expect(businessTrip(graph, ['Arendelle', 'Monstropolis', 'Naboo'])).toBe("$ 115");
    expect(businessTrip(graph, ['Pandora', 'Arendelle', 'Metroville', 'Naboo'])).toBe("$ 275");

    //return null when there is no trip
    expect(businessTrip(graph, ['Pandora', 'Narnia'])).toBe(null);
  });
});
