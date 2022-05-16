"use strict";

const HashTable = require("../HashTable");

const repeatedWord = (str) => {
  let strArr = str.toLowerCase().match(/\w+/g);
  let hashStr = new HashTable(strArr.length);
  for (let index = 0; index < strArr.length; index++) {
    if (hashStr.contain(strArr[index])) {
      return strArr[index];
    }
    hashStr.set(strArr[index], strArr[index]);
  }
  return "No repeated word";
};

module.exports = repeatedWord;
