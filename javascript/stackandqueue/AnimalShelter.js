'use strict';

const Q = require('./queue');

class AnimalShelter {
  constructor() {
    this.type = '';
    this.queue = new Q();
  }

  enqueue(animal) {
    if (typeof animal === 'object') {
      this.queue.enqueue(animal);
    } else {
      return 'not object';
    }
  }
  dequeue(pref) {
    if (this.queue.peek().type === pref) {
      let animalName = this.queue.peek();
      this.queue.dequeue();
      return animalName;
    } else {
      return 'not gogs or cats';
    }
  }
}
class Cats extends AnimalShelter {
  constructor(type) {
    super();
    this.type = type;
  }
  cats() {
    return this.type;
  }
}
class Dogs extends AnimalShelter {
  constructor(type) {
    super();
    this.type = type;
  }
  dogs() {
    return this.type;
  }
}

module.exports = { AnimalShelter, Cats, Dogs };
