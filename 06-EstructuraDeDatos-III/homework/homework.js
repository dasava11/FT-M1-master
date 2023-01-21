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
            this.right = new BinarySearchTree(value);
         };
   
      } else if (value < this.value) {
         if (this.left !== null) {
            this.left.insert(value);
         } else {
            this.left = new BinarySearchTree(value);
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
         if (!this.left) {
            return false;
         } else {
         return this.left.contains(value);
         };
      };
   };

   depthFirstForEach(value){

      if (value === undefined || value === "in-order") {
         
   
      } else if (value === "pre-order") {
         
   
   
      } else if (value === "post-order") {
         
   
   
      } else {
         return 'Opcion no valida'
      }
   };

   breadthFirstForEach(){

   };

   size() {
      if(this.right === null && this.left === null) return 1;
   
      if (this.right !== null && this.left === null) {
         return 1 + this.right.size();
      }
      if (this.right === null && this.left !== null) {
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
