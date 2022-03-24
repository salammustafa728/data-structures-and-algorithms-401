'use strict';

// const Stack = require('../stack');
const validateBrackets = require('../stack-queue-brackets');

describe('test validateBrackets function', () => {
  it('test str ', () => {
    let str ='{([])}';
    let str2 ='{[)';
    validateBrackets(str);
    expect(validateBrackets(str)).toBeDefined();
    console.log(validateBrackets(str));
    expect(validateBrackets(str)).toBeTruthy();
    expect(validateBrackets(str2)).toBeFalsy();
  });
});
