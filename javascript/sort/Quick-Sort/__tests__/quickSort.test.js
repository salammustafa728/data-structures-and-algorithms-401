'use strict';
const quickSort = require('../quickSort');

describe('test quick sort', () => {
  it('test quick sort ', () => {
    let arr = quickSort([20,18,12,8,5,-2],0,5 );
    expect(arr).toEqual([-2,5,8,12,18,20]);
    console.log(quickSort([20,18,12,8,5,-2],0,5 ));

    let arr2 = quickSort([5,12,7,5,5,7], 0, 5);
    expect(arr2).toEqual([5,5,5,7,7,12]);
    console.log(quickSort([5,12,7,5,5,7], 0, 5));

    let arr3 = quickSort([2,3,5,7,13,11],0, 5);
    expect(arr3).toEqual([2,3,5,7,11,13]);
    console.log(quickSort([2,3,5,7,13,11],0, 5));
  });
});
