//Copia por referencia

var a;
var b = { nombre: "hola" };

a = b;

b.nombre = "Chao";

console.log(a.nombre); // 'Chao'

var arr1 
var arr2 = [1,2,3]
arr1 = arr2
arr2.push(4)
console.log(arr1)


// Copia por valor

var a = 1;
var b = 2;
 
a = b;
b = 3;
 
console.log(a) // 2
console.log(b) // 3



//--------- Closures -----//

	
function saludar( saludo ){
	return function( nombre ){
		console.log(saludo + ' ' + nombre);
	}
}
 
var saludarHola = saludar('Hola'); // Esto devuelve una función
 
//saludarHola('Toni'); // 'Hola Toni'
saludarHola('Caro'); // 'Hola Caro'

var despedida = saludar('Chao')
console.log(despedida("Caro"))


// Otro ejemplo

var creaFuncion = function(){
  var arreglo = [];

  for (var i = 0; i < 3; i++) {
    arreglo.push(function () {
      console.log(i);
    });
  }

  //arreglo = [function(){console.log(i);}, function(){console.log(i);}, function(){console.log(i);}]
  return arreglo;
}
 
var arr = creaFuncion();
 
//arr[0]() // 3
//arr[1]() // 3
//arr[2]() // 3
// Otro ejemplo

//Otro ejemplo
function hacerSaludo(lenguaje, repeticiones) {
  if (lenguaje === "en") {
    return function (nombre) {
      var str = ""
      for (let i = 0; i < repeticiones; i++) {
          str = str + "Hi! "
    }
    str = str + nombre
    console.log(str)
    };
  }

  if (lenguaje === "es") {
    return function () {
      console.log("Hola!");
    };
  }
}

var saludoIngles = hacerSaludo("en", 3);
var saludoEspaniol = hacerSaludo("es");

//Repaso

//Version sin closure
/* function makeAdder (x,y){
  return x + y
}

var add = makeAdder(2,4)
console.log(add) */

//version con closure
function makeAdder(x) {
  return function (y) {
    return x+y
    // 5 + 6
  }
}
// ctrl + shift + p

console.log(makeAdder())
var auxiliar = makeAdder(5)
console.log(auxiliar(6))

var add6 = makeAdder(6)
console.log(add6(6))
var add20 = makeAdder(20)
console.log(add20())
var add5 = makeAdder(5);
var add10 = makeAdder(10);

//console.log(add5(2)); // 7
//console.log(add10(2)); // 12

//--------- BIND, CALL, APPLY ------
	
var persona = {
	nombre: 'Guille',
	apellido: 'Aszyn',
}
 
var nombre = "Caro"

var logNombre = function(){
	return this.nombre;
}
 
console.log(logNombre())
var logNombrePersona = logNombre.bind(persona);
// el primer parametro de bind es el this!
console.log(logNombrePersona())
 
// BIND DEVUELVE UNA FUNCION!


var user = {
  name: "Caro"
}

var favoriteFood = {
  name: "Natilla"
}

function showInfo(location) {
  return `${this.name} es de ${location}`;
}

console.log(showInfo("Argentina"))
var informacion = showInfo.bind(favoriteFood)
/* console.log(informacion("Argentina")) */
console.log(informacion())
console.log(favoriteFood)

var newFunction = showInfo.bind(favoriteFood)
//console.log(newFunction("Colombia"));

console.log(showInfo.call(user, "Colombia"))
console.log(showInfo.apply(user, ["Colombia"]));


function saludar(saludo) {
  return function (nombre) {
    return saludo + " " + nombre
  }
}

var invocacionDeSaludar = saludar("Hola")
console.log(invocacionDeSaludar("Feli"))