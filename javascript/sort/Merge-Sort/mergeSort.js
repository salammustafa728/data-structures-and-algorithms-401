"use strict";

const mergeSort = (arr) => {
  let len = arr.length;

  if (len === 1) {
    return arr;
  }else{
    let mid = Math.floor(len / 2);
    let arrLeft = arr.slice(0, mid);
    let arrRigth = arr.slice(mid);

    return mergeArrays(mergeSort(arrLeft), mergeSort(arrRigth));
  }

};

const mergeArrays = (left, rigth) => {
  let finalArr = [];
  let idxLeft = 0;
  let idxRigth = 0;

  while (idxLeft < left.length && idxRigth < rigth.length) {
    if (left[idxLeft] < rigth[idxRigth]) {
      finalArr.push(left[idxLeft]);
      idxLeft++;
    } else {
      finalArr.push(rigth[idxRigth]);
      idxRigth++;
    }
  }
  return finalArr.concat(left.slice(idxLeft)).concat(rigth.slice(idxRigth));
};

module.exports = mergeSort;
