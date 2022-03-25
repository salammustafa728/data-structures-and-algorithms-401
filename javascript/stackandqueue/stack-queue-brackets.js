'use strict';
const Stack = require('./stack');

function validateBrackets(str) {
  let s = new Stack();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
      s.push(str[i]);
    } else if (
      (s.peek()==='(' && str[i]===')') ||
      (s.peek()==='{' && str[i]==='}' ) ||
      (s.peek()==='[' && str[i]===']')
    ) {
      s.pop();
    } else return false;
  }
  if (s.size===0) {
    return false;
  } else {
    return true;
  }
}

module.exports = validateBrackets;
