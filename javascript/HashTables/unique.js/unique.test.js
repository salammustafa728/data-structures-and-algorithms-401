"use strict";

const uniqeChar = require('./uniqueChar');

describe("unique string Test", () => {
  it("check string", () => {
    let str = "salam";
    let testStr = uniqeChar(str);
    expect(testStr).toBeFalsy();
  });
});
