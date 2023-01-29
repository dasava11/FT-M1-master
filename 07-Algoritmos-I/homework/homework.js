'use strict'
// No cambies los nombres de las funciones.

function primo(numero) {

  for (var i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return numero !== 1;
;}

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let array = [1];
// let div =[2, 3, 5, 7, 11, 13];
 let i=2
  //for (let i = 0; i < div.length; i++) {
    //console.log(num, div[i], num/div[i]);
    while (num !== 1) {
      if(primo(i)){
          if (num%i === 0) {
            array.push(i)
            num = num/i
          } else {
            i++;
          };
      }else{
        i++;
      };
    };
  
return array;

};

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

 for (let j = array.length; j > 0; j--) {
  for (let i = 0; i < j; i++) {
    if (array[i] > array[i+1]) {
      let aux = array[i];
      array[i] = array[i+1];
      array[i+1] = aux;
    };
  };
 };
 return array;
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

   for (let i = 1; i < array.length; i++) {
     
     for (let j = 0; j < array.length; j++) {
       
       if(array[i] < array[j]) {
        var aux = array[j];
         array[j] = array[i];
         array[i] = aux;
       }
     };
     console.log(array)
    };
   return array;
   };

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

//__________________
/* 1. se toma como referencia [1]
   2. Se evalua [1] < [0] si es true, se invierten, si es false se aumenta el punto de referencia [i++]
   3. se evalua [2] < [1] si es true, debe evaluar [2] hasta [0], si es false [i++] */

   for (let i = 0; i < array.length - 1; i++) {
    let lower = i;
     for (let j = i+1; j < array.length; j++) {
       if(array[lower] > array[j]) lower = j;
      };
       if(i !== lower){
         var aux = array[i];
         array[i] = array[lower];
         array[lower] = aux;
        };
    };
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
