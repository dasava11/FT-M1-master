'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  let pivot = array[Math.floor(Math.random() * array.length)];
  let left = [];
  let right = [];
  let equal = [];

  if (array.length === 0 || array.length < 2) return array;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) left.push(array[i]);
    if (array[i] > pivot) right.push(array[i]);
    if (array[i] === pivot) equal.push(array[i]);
  }
  return quickSort(left).concat(equal).concat(quickSort(right));
};

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //okey probemos ahora
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
