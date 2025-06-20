const mayor = require('./mayor');

test('El mayor entre 8 y 5 es 8', () => {
  expect(mayor(8, 5)).toBe(8);
});

test('El mayor entre 3 y 9 es 9', () => {
  expect(mayor(3, 9)).toBe(9);
});
