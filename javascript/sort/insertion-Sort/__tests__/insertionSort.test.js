'use strict';
const insertionSort = require('../insertion-Sort');

describe('test insertion sort', () => {
  it('test insertion sort ', () => {
    const arr = [20, 18, 12, 8, 5, -2];
    const arr2= [5,12,7,5,5,7];
    const arr3 =  [2,3,5,7,13,11];
    console.log(insertionSort(arr3));
    expect(insertionSort(arr)).toEqual([-2,5,8,12,18,20]);
    expect(insertionSort(arr2)).toEqual([5,5,5,7,7,12]);
    expect(insertionSort(arr3)).toEqual([2,3,5,7,11,13]);
  });
});
