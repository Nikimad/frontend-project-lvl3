import { test, expect } from '@jest/globals';
//  func
import getSum from '../index.js';
//  test
test('get sum', () => {
  expect(getSum(1, 2)).toBe(3);
});
