"use strict";

function quickSort(arr, arrLeft, arrRight) {
  if (arrLeft < arrRight) {
    let position = divideArrays(arr, arrLeft, arrRight);
    quickSort(arr, arrLeft, position - 1);
    quickSort(arr, position + 1, arrRight);
  }
  return arr;
}

function divideArrays(arr, arrLeft, arrRight) {
  let pivot = arr[arrRight];
  let less = arrLeft - 1;
  for (let i = arrLeft; i < arrRight; i++) {
    if (arr[i] <= pivot) {
      less++;
      swapEle(arr, i, less);
    }
  }
  swapEle(arr, arrRight, less + 1);
  return less + 1;
}

function swapEle(arr, i, less) {
  let temp;
  temp = arr[i];
  arr[i] = arr[less];
  arr[less] = temp;
}

module.exports = quickSort;
