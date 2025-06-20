// Importamos la función 'sum' que escribimos en el archivo sum.js
const sum = require('./sum');

// Usamos el método 'test' de Jest para definir una prueba
test('suma 1 + 2 debe ser igual a 3', () => {
  // Dentro de la prueba, usamos 'expect' para decir lo que esperamos que pase
  expect(sum(1, 2)).toBe(3);
});

