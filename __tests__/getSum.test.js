const { test, expect } = require('@jest/globals');
const { getSum } = require('../src/getSum');

test('get sum', () => {
  expect(getSum(3, 1)).toBe(4);
});
