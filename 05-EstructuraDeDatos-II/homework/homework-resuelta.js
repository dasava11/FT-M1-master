"use strict";

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this.head = null;
  this._length = 0;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

//Metodos

LinkedList.prototype.add = function (data) {
  //creamos la instancia del nodo para guardar la data
  let node = new Node(data);
  //corroborar si la lista esta vacia
  if (this.head === null) {
    this.head = node;
  } else {
    // tiene al menos un nodo
    //tratar de recorrerlo
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    // si me preguntara por currebnt en este momento, seria el ultimo nodo
    current.next = node;
  }
  this._length++;
  return node;
};

LinkedList.prototype.remove = function () {
  // Si la lista esta vacia
  if (this.head === null) return null;
  //otra opcion
  if (this._length === 0) return null;

  //Si la lista tiene un solo nodo
  if (this._length === 1) {
    let aux = this.head;
    this.head = null; // current = null
    this._length--;
    return aux.value; // Node { data: "", next: null}
  }
  //ya de aqui para abajo no lee
  // si tiene mas de un nodo
  let current = this.head;
  while (current.next.next) {
    current = current.next;
  }
  // current es el penultimo nodo
  let aux = current.next.value;
  //aux es el ultimo nodo
  current.next = null;
  this._length--;
  return aux;
};
function verificar(value = "Caro") {
  if (value === "Caro") return true;
}
// fn --> verificar
// H --> Node {value: "Caro", next: null}
LinkedList.prototype.search = function (value) {
  // si la lista esta vacia
  if (this._length === 0) return null;
  // si tiene uno o mas nodos
  let current = this.head;
  while (current) {
    // Busco en mi nodo actual, es decir mi current
    if (value === current.value) return value;
    if (typeof value === "function") {
      if (value(current.value) === true) return current.value;
    }
    //pasa al siguiente
    current = current.next;
  }
  // si no encontro el valor o evaluo la fn y no dio true
  return null;
};

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];
}

console.log("hola".charCodeAt(3));

HashTable.prototype.hash = function (key) {
  let sum = 0;

  for (let i = 0; i < key.length; i++) {
    let code = key.charCodeAt(i);
    sum = sum + code;
  }
  // como el # buckets es superado
  // debemos aplicar el modulo
  let location = sum % this.numBuckets;
  return location;
};

HashTable.prototype.set = function (key, value) {
  // Validar que key sea string para poder aplicar el metodo hash correctamente
  if (typeof key !== "string") throw new TypeError("Keys must be strings");
  // debemos hashear la key para saber donde ubicar el value
  let location = this.hash(key);
  //Me pregunto si en mis buckets ya existe algo, para poder guardar el value
  if (this.buckets[location] === undefined) {
    this.buckets[location] = {};
  }
  this.buckets[location][key] = value;
};

HashTable.prototype.get = function (key) {
  let location = this.hash(key);
  return this.buckets[location][key];
};

HashTable.prototype.hasKey = function (key) {
  let location = this.hash(key);
  return this.buckets[location].hasOwnProperty(key); // retornaria true o false
};

/* let hashTable = new HashTable
console.log(hashTable)
hashTable.hash("hola") */

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
