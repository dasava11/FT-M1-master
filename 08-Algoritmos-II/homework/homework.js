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

//______fn de apoyo_________


 function divide(array) {

  let middle = Math.floor(array.length / 2);

  let left = array.slice(0, middle);
  let right = array.slice(middle);

  return [left, right];

 }

 function fusion(arr1, arr2){
  let array = arr1.concat(arr2)

  for (let j = array.length; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (array[i] > array[i+1]) {
       [array[i], array[i+1]] = [array[i+1], array[i]];
      };
    };
   };
   return array;
 };

 //_____________________________

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length === 1) return array;

  let div = divide(array);
  let left = div[0];
  let right = div[1];

  return fusion(mergeSort(left), mergeSort(right));

  //okey probemos ahora
};

mergeSort([75, 11, 8, 23, 2, 9, 19, 35, 6, 1, 2, 47])


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
