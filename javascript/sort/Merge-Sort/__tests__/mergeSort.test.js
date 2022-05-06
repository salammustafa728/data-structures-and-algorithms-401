'use strict';
const mergeSort = require('../mergeSort');

describe('test merge sort', () => {
  it('test merge sort ', () => {
    const arr = [20, 18, 12, 8, 5, -2];
    const arr2= [5,12,7,5,5,7];
    const arr3 =  [2,3,5,7,13,11];
    console.log(mergeSort(arr2));
    expect(mergeSort(arr)).toEqual([-2,5,8,12,18,20]);
    expect(mergeSort(arr2)).toEqual([5,5,5,7,7,12]);
    expect(mergeSort(arr3)).toEqual([2,3,5,7,11,13]);
  });
});
