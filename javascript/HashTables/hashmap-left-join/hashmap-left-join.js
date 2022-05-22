"use strict";

const leftJoin=(hashMap1, hashMap2) =>{
  let resData = [];
  for (let i = 0; i < hashMap1.length; i++) {
    resData[i] = hashMap1[i];
    for (let j = 0; j < hashMap1.length; j++) {
      if (hashMap1[i][0] === hashMap2[j][0]) {
        resData[i].push(hashMap2[j][1]);
      }
    }
    if (resData[i][2] === undefined) {
      resData[i][2] = null;
    }
  }

  return resData;
};

module.exports = leftJoin;
