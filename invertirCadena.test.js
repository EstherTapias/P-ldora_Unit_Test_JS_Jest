const invertirCadena = require('./invertirCadena');

test('Invierte "hola" → "aloh"', () => {
  expect(invertirCadena("hola")).toBe("aloh");
});

test('Invierte "" → ""', () => {
  expect(invertirCadena("")).toBe("");
});
