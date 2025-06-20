function contarVocales(str) {
    return (str.match(/[aeiou]/gi) || []).length;
  }
  module.exports = contarVocales;
  