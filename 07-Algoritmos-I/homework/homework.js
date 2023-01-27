'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let array = [1];
  let div =[13, 11, 7, 5, 3, 2];
 
  for (let i = 0; i < div.length; i++) {
  while (num !== 1) {
    if (num%div[i] === 0) {
      array.push(div[i])
      num = num/div[i]
    }
  }
  }
return array;

};

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

//   let max = array[0]
//   let min = array[0]

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > max) max = array[i]
//     if (array[i] < min) min = array[i]
//   }
 
//   while (array[0] !== min && array[array.length] !== max) {
//     let j = 0
//     if (array[j] > array[j+1]) {
//       let aux = array[j+1];
//       array[j] = array[j+1];
//       array[j+1] = aux;
//     }
//     j++
//   }
// return array;

}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
/* _______________________
   1. se toma como referencia [0] para evaluarlo frente a todos los [i]
   2. Si evalua [0] < todos los [i] se mantiene, sino ... debe identificar el menor de todos (variable auxiliar)
   3. se invierten los [i] una vez se identifique el menor entre todos los [i]
   4. avanza [i++] y vuelve hacer la misma validación */


}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

//__________________
/* 1. se toma como referencia [1]
   2. Se evalua [1] < [0] si es true, se invierten, si es false se aumenta el punto de referencia [i++]
   3. se evalua [2] < [1] si es true, debe evaluar [2] hasta [0], si es false [i++] */

  //  if(array[i+1] < array[i]) {
  //   let aux = array[i];
  //     array[i] = array[i+1];
  //     array[i+1] = aux;
  //  }


}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
