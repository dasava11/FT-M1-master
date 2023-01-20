// Un saludo!! 💛
// Estos son los ejemplos de la clase Estructura de datos 1

//--------//--------//--------//-------//------//------//

//Tema: Recursion

// Ejercicio 1: implementar la recursion para resolver la funcion factorial

// Recordemos que el factorial se define como 
// n! = n * (n-1)! * (n-2)! * (...) * 2 * 1
// Ejemplo = 4! = 4 * 3 * 2 * 1 = 24

function factorial(x) {
  // De forma iterativa:
  var acumulador = 1;
  for (let i = x; i > 0; i--) {
    console.log(acumulador);
    acumulador = acumulador * i;
  }
  return acumulador;

  // De forma recursiva:
  if (x == 1 || x == 0) return 1; // Cuando -1 < x < 2
  // devolvemos 1 puesto que 0! = 1 y 1! = 1
  else if (x < 0) return 0; // Error no existe factorial de números negativos
  return x * factorial(x - 1); // Si x >= 2 devolvemos el producto de x por el factorial de x - 1
  
}
console.log(factorial(4));

//--------//--------//--------//-------//------//------//

// Tema: Estructuras de Datos
// SubTema: Sets

// Los Sets son estructuras de datos que "combinan" los objetos y los arreglos en su sintaxis
// Un arreglo --> [1,2,3]
//Un objeto --> { a:1, b:2} 
//Un Set --> {1,2,3}

//Tiene metodos que nos sirven, como en un arreglo para agregar, remover, consultar su longitud, entre otras
//Veamos algunas de estas
var arr = [1,4]
arr.push(3)
var mostaQueSos = arr.pop()
console.log(mostaQueSos)
console.log(arr)
var set1 = new Set(arr)
console.log(set1)
set1.add(2)
set1.delete(1)
console.log(set1)

//--------//--------//--------//-------//------//------//

// Tema: Estructuras de Datos
// Subtema: Stacks

// Es una estructura de datos, considerada una lista lineal, 
// por la forma en la que almacena sus datos y es que se trata de un arreglo girado unos 90 grados
// Esto es --> arreglo --> [1,2,3]
// Stack -->  3
//            2
//            1

// Lo que importa en un Stack es la forma de agregar o extraer datos. 
// Lo hace con la regla LIFO (Last In First Out --> Ultimo en ingresar, primero en salir)
// Comparado con una pila de libros
// Veamos su comportamiento:

var stack = [];
stack.push(1);
stack.push(10);
console.log(stack) 
var i = stack.pop();
console.log(stack); 
console.log(i);
// Sin embargo, vemos que podemos agregar elementos al principio
stack.unshift(0)
console.log(stack);
// Por lo que es necesario construir una estructura
// Que nos permita blindar nuestro Stack y limitarlo a que tome el comportamiento esperado 

// Para eso creamos una clase, la clase Stack
// Esta es una clase en notacion de funcion:
function Stack() {
    this.arreglo = []
}
// Esta es en notacion de clases
class Stack{
  Constructor(){
    this.arreglo = []
  }
}
// Ademas, para usar los metodos antes mencionados, le vinculamos 
// Por medio de prototype las funciones que son propias del Stack
Stack.prototype.add = function (value) {
    return this.arreglo.push(value)
}

Stack.prototype.size = function () {
    return this.arreglo.length
}

// Probemos una instancia
var stack1 = new Stack()
stack1.add(4)
stack1.add(4)
stack1.add(4);
console.log(stack1)
console.log(stack1.size())

//--------//--------//--------//-------//------//------//

// Tema: Estructuras de Datos
// SubTema: Queues

// Es una estructura de datos, considerada una lista lineal, 
// por la forma en la que almacena sus datos y es que se trata de un arreglo girado unos 90 grados
// Esto es --> arreglo --> [1,2,3]
// Queue -->  3
//            2
//            1

// Lo que importa en un Stack es la forma de agregar o extraer datos. 
// Lo hace con la regla FIFO (First In First Out --> primero en ingresar, primero en salir)
// Comparado con el funcionamiento de una fila de supermercado
// Veamos su comportamiento:

var queue = [];
queue.push(1);         
queue.push(2);   
console.log(queue)
const first = queue.shift()
console.log(queue) 
console.log(first);   

// Ahora ve a la homework y a codear se dijo!! 😄














