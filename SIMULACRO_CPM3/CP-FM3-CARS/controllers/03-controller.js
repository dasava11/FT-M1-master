const utils = require("../utils");
/*⚠️ No modificar nada arriba de esta línea ⚠️

  3️⃣ ***** EJERCICIO 3 ***** - updateCar 3️⃣:

  🟢 Debes buscar un coche recibido por parámetro dentro del array de utils.cars y actualizar las propiedades: new 
  y price. También agrégale una nueva propiedad llamada "electric".
  🟢 Si no encuentras el coche debes arrojar un error que diga: "No se encontro el coche solicitado".
  🟢 Si alguna de las propiedades del coche que recibimos es undefined, debe arrojar un error que diga: "Faltan 
  datos a completar". 

    📢 PUNTOS A TENER EN CUENTA 📢
  1) Recuerda que el mensaje de error deben ser exactamente como lo pide el enunciado.
  2) Recuerda agregar la nueva propiedad "electric", ésta no se encuentra en examples.json.
  */

const updateCar = (car) => {
  const CARS = utils.cars;
  let ref = CARS.find((auto) => auto.id === car.id);
  if (!ref) {
    throw new Error("No se encontro el coche solicitado");
  }
  if (
    car.id === undefined ||
    car.model === undefined ||
    car.price === undefined ||
    car.new === undefined ||
    car.color === undefined ||
    car.electric === undefined
  ) {
    throw Error("Faltan datos a completar");
  }

  ref.price = car.price;
  ref.new = car.new;
  ref.electric = car.electric;

  //return ref.id;
};

// ⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = updateCar;
