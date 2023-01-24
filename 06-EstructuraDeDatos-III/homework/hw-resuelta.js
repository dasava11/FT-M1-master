"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// metodos

BinarySearchTree.prototype.insert = function (value) {
  // comparaciones
  if (value < this.value) {
    if (this.left !== null) return this.left.insert(value);
    else this.left = new BinarySearchTree(value);
  }
  // si el valor es mayor
  if (value > this.value) {
    if (this.right !== null) return this.right.insert(value);
    else this.right = new BinarySearchTree(value);
  }
};

BinarySearchTree.prototype.contains = function (value) {
  // caso base
  if (value === this.value) return true;
  //
  if (value < this.value) {
    if (this.left === null) return false;
    else return this.left.contains(value);
  }
  // en el caso en que value sea mayor
  if (value > this.value) {
    if (this.right === null) return false;
    else return this.right.contains(value);
  }
};

BinarySearchTree.prototype.size = function () {
  // caso base
  if ( !this.left && this.right === null ) return 1;
  if ( this.left && this.right === null ) return 1 + this.left.size();
  if ( this.right !== null && this.left === null ) return 1 + this.right.size();
  return 1 + this.left.size() + this.right.size();
};

// Recorridos

//Deph

BinarySearchTree.prototype.depthFirstForEach = function (cb, typeOrder) {
  // typeOrder = "pre-order" --> Root - Izq - Der
  /* switch (typeOrder) {
  case "pre-order":
    cb(this.value);
    if (this.left) this.left.depthFirstForEach(cb, typeOrder);
    if (this.right) this.right.depthFirstForEach(cb, typeOrder);
	break;
  case "post-order":
     if (this.left) this.left.depthFirstForEach(cb, typeOrder);
     if (this.right) this.right.depthFirstForEach(cb, typeOrder);
     cb(this.value);
	 break;
  default:
   if (this.left) this.left.depthFirstForEach(cb, typeOrder);
   cb(this.value);
   if (this.right) this.right.depthFirstForEach(cb, typeOrder);
    break;
} */

  if (typeOrder === "pre-order") {
    cb(this.value);
    if (this.left) this.left.depthFirstForEach(cb, typeOrder);
    if (this.right) this.right.depthFirstForEach(cb, typeOrder);
  } else if (typeOrder === "post-order") {
    // Izq Der Root
    if (this.left) this.left.depthFirstForEach(cb, typeOrder);
    if (this.right) this.right.depthFirstForEach(cb, typeOrder);
    cb(this.value);
  } else {
    // in order --> Izq Root Der
    if (this.left) this.left.depthFirstForEach(cb, typeOrder);
    cb(this.value);
    if (this.right) this.right.depthFirstForEach(cb, typeOrder);
  }
};

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) {
  cb(this.value);
  if (this.left) array.push(this.left);
  if (this.right) array.push(this.right);
  if (array.length > 0) {
    let node = array.shift(); // devuelve el primer valor y se comporta como una queue
    node.breadthFirstForEach(cb, array);
  }
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
