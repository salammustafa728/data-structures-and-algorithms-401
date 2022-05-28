"use strict";

const HashTable = require("../HashTable");

const uniqeChar = (text) => {
  // let arrWords = text.split("");
  // const hashtable = new HashTable(60);
  // console.log(arrWords);
  // for (let i = 0; i < arrWords.length; i++) {
  //   if (
  //     !(arrWords[i].toLowerCase() < 65 || arrWords[i].toLowerCase() > 90)(
  //       arrWords[i].toLowerCase() < 97 || arrWords[i].toLowerCase() > 122
  //     )
  //   ) {
  //     if (!hashtable.contain(arrWords[i].toLowerCase())) {
  //       //console.log(arrWords[i].toLowerCase())
  //       hashtable.set(arrWords[i].toLowerCase(), arrWords[i].toLowerCase());
  //     } else {
  //       console.log("---------------");
  //       console.log("not uniqe");
  //       return false;
  //     }
  //   }
  // }
  // return true;
};

module.exports = uniqeChar;

//===============way #1 working but without hasmap============================
//   for (let i = 0; i < str.length; i++)
//     for (let j = i + 1; j < str.length; j++) if (str[i] === str[j]) return false;

//   return true;
//   let strArr = str.toLowerCase().match(/\w+/g);

//============way 2 not working====================
//   let hashStr = new HashTable(str.length);
//   for (let index = 0; index < str.length; index++) {
//     for (let index2 = 0; index2 < str.length; index2++) {
//       if (hashStr.contain(str[index] === hashStr.contain(str[index2]))) {
//         return false;
//       }
//       hashStr.set(str[index], str[index]);
//     }
//   }
//   return true;
//======================================================================

// let arrWords = text.split(' ');
// let mappingWords = {};
// let mostAppearence;
// let counterOfrepeate = 1;
// const hashtable = new HashTable(60);
// for (let i = 0; i < arrWords.length; i++) {
//   let counter = mappingWords[arrWords[i]];
//   let appearence = counter ? counter : 0;
//   mappingWords[arrWords[i]] = appearence + 1;
//   console.log(mappingWords[arrWords[i]]);
//   if (!hashtable.contain(arrWords[i])) {
//     hashtable.set(arrWords[i].toLowerCase(), arrWords[i].toLowerCase());
//   }
//   if (mappingWords[arrWords[i]] > counterOfrepeate) {
//     //  console.log(x + "  "+mappingWords[x] );
//     counterOfrepeate = mappingWords[arrWords[i].toLowerCase()];
//     mostAppearence = arrWords[i].toLowerCase();
//   }
// }
// console.log(mappingWords);
// return mostAppearence + '  ' + counterOfrepeate;
