'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
class BinarySearchTree {
   constructor(value){
   this.value = value;
   this.right = null;
   this.left = null;
   };

   insert(value){
      let bst = new BinarySearchTree(value);
   
      if(value >= this.value) {
         if (this.right !== null) {
            this.right.insert(value);
         } else {
            this.right = bst;
         };
   
      } else if (value < this.value) {
         if (this.left !== null) {
            this.left.insert(value);
         } else {
            this.left = bst;
         };
      };
   
   };

   contains(value){
      if (value === this.value)return true;
      
      if(value > this.value) {
         if (!this.right) {
            return false;
         } else {
            return this.right.contains(value);
         };
      } else if (value < this.value) {
         if (!this.left) return false;
         else return this.left.contains(value);
      };

   };

   depthFirstForEach(cb, order){

      if (order === undefined || order === "in-order") { // left - root - right
         
         if (this.left !== null) this.left.depthFirstForEach(cb, order);
         cb(this.value);
         if (this.right !== null) this.right.depthFirstForEach(cb, order);
   
      } else if (order === "pre-order") { // root - left - right

         cb(this.value);
         if (this.left !== null) this.left.depthFirstForEach(cb, order);
         if (this.right !== null) this.right.depthFirstForEach(cb, order);

      } else if (order === "post-order") { // left - right - root

         if (this.left !== null) this.left.depthFirstForEach(cb, order);
         if (this.right !== null) this.right.depthFirstForEach(cb, order);
         cb(this.value);
   
      } else {
         return 'Opcion no valida'
      }
   };

   breadthFirstForEach(cb, array = []){
      cb(this.value);
      if(this.right) array.push(this.right);
      if(this.left) array.push(this.left);
      if(array.length > 0) arr.shift().breadthFirstForEach(cb, array);
   };

   size() {
      if(!this.right && !this.left) return 1;
   
      if (this.right && !this.left) {
         return 1 + this.right.size();
      }
      if (!this.right && this.left) {
         return 1 + this.left.size();
      }
      if (this.right !== null && this.left !== null) {
         return 1 + this.right.size() + this.left.size();
      }
   };
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
