'use strict';
const validate = require('./plus-one');

describe('Plus One Test Suite', () => {
  test('[0] should return [1]', () => {
    expect(validate.incrementByOneCleverOneLiner([0])).toEqual([1]);
  });
  test('[1] should return [2]', () => {
    expect(validate.incrementByOneCleverOneLiner([1])).toEqual([2]);
  });
  test('[9] should return [1,0]', () => {
    expect(validate.incrementByOneCleverOneLiner([9])).toEqual([1, 0]);
  });
  test('[9,9] should return [1,0,0]', () => {
    expect(validate.incrementByOneCleverOneLiner([9, 9])).toEqual([1, 0, 0]);
  });
  test('[9,9,9,9,9] should return [1,0,0,0,0,0]', () => {
    expect(validate.incrementByOneCleverOneLiner([9, 9, 9, 9, 9])).toEqual([1, 0, 0, 0, 0, 0]);
  });
  test('[1,2,3] should return [1,2,4]', () => {
    expect(validate.incrementByOneCleverOneLiner([1, 2, 3])).toEqual([1, 2, 4]);
  });
  test('[9,2,3,4,5] should return [9,2,3,4,6]', () => {
    expect(validate.incrementByOneCleverOneLiner([9, 2, 3, 4, 5])).toEqual([9, 2, 3, 4, 6]);
  });
  test('[5,3,9,6,3,9,2] should return [5,3,9,6,3,9,3]', () => {
    expect(validate.incrementByOneCleverOneLiner([5, 3, 9, 6, 3, 9, 2])).toEqual([5, 3, 9, 6, 3, 9, 3]);
  });
  test('[1, 2, 3, 4, 5, 9, 9] should return [1, 2, 3, 4, 6, 0, 0]', () => {
    expect(validate.incrementByOneCleverOneLiner([1, 2, 3, 4, 5, 9, 9])).toEqual([1, 2, 3, 4, 6, 0, 0]);
  });
  test('[1, 2, 3, 4, 5, 9, 9, 9, 9, 9] should return [1, 2, 3, 4, 6, 0, 0, 0, 0, 0]', () => {
    expect(validate.incrementByOneCleverOneLiner([1, 2, 3, 4, 5, 9, 9, 9, 9, 9])).toEqual([
      1, 2, 3, 4, 6, 0, 0, 0, 0, 0,
    ]);
  });
});
