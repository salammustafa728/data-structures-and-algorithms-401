'use strict';

const { AnimalShelter, Cats, Dogs } = require('../AnimalShelter');

describe('test AnimalShelter class', () => {
  it('test instances', () => {
    const AnimalClass = new AnimalShelter();
    expect(AnimalClass).toBeInstanceOf(AnimalShelter);
  });
});

describe('test AnimalShelter class instances cats and dogs', () => {
  it('test cats', () => {
    const animalClass = new AnimalShelter();
    const catsInst = new Cats('cats');

    animalClass.enqueue(catsInst);
    expect(animalClass.queue.size).toBe(1);
    expect(animalClass.queue.peek().cats()).toBe('cats');
  });
  it('test dogs', () => {
    const animalClass = new AnimalShelter();
    const dogssInst = new Dogs('dogs');

    animalClass.enqueue(dogssInst);
    expect(animalClass.queue.size).toBe(1);
    expect(animalClass.queue.peek().dogs()).toBe('dogs');
    expect(animalClass.enqueue('cats')).toBe('not object');
  });

  it('test dequeue animal', () => {
    const animalClass = new AnimalShelter();
    const dogssInst = new Dogs('dogs');

    animalClass.enqueue(dogssInst);
    expect(animalClass.queue.size).toBe(1);
    expect(animalClass.queue.peek().dogs()).toBe('dogs');
    expect(typeof(animalClass.dequeue('dogs'))).toBe('object');
    expect(animalClass.queue.size).toBe(0);
  });
});
