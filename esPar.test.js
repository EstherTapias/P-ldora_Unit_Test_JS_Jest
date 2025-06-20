// esPar.test.js
const esPar = require('./esPar');

test('2 es par', () => {
  expect(esPar(2)).toBe(true);
});

test('3 no es par', () => {
  expect(esPar(3)).toBe(false);
});
