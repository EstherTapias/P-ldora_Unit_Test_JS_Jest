const contarVocales = require('./contarVocales');

test('Contar vocales en "hola"', () => {
  expect(contarVocales("hola")).toBe(2);
});

test('Contar vocales en "rhythm"', () => {
  expect(contarVocales("rhythm")).toBe(0);
});
