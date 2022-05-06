"use strict";

const mergeSort = (arr) => {
  let len = arr.length;

  if (len === 1) {
    return arr;
  } else {
    let mid = Math.floor(len / 2);
    let arrLeft = arr.slice(0, mid);
    let arrRigth = arr.slice(mid);

    mergeSort(arrLeft);
    mergeSort(arrRigth);
    mergeArrays(arrLeft,arrRigth,arr);
  }
  return arr;
};

const mergeArrays = (left, rigth,arr) => {
  // let finalArr = [];
  let idxLeft = 0;
  let idxRigth = 0;
  let i = 0;

  while (idxLeft < left.length && idxRigth < rigth.length) {
    if (left[idxLeft] <= rigth[idxRigth]) {
      arr[i] = left[idxLeft];
      idxLeft++;
    } else {
      arr[i] = rigth[idxRigth];
      idxRigth++;
    }
    i++;
    // if (left[idxLeft] < rigth[idxRigth]) {
    //   arr.push(left[idxLeft]);
    //   idxLeft++;
    // } else {
    //   arr.push(rigth[idxRigth]);
    //   idxRigth++;
    // }
  }
  if (idxLeft === left.length) {
    while (i < arr.length) {
      arr[i] = rigth[idxRigth];
      idxRigth++;
      i++;
    }
  } else {
    while (i < arr.length) {
      arr[i] = left[idxLeft];
      idxLeft++;
      i++;
    }
  }

  // return finalArr.concat(left.slice(idxLeft)).concat(rigth.slice(idxRigth));
};

module.exports = mergeSort;
