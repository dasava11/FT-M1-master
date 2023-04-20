const { util } = require("chai");
const utils = require("../utils");
/* ⚠️ No modificar nada arriba de esta línea ⚠️

  6️⃣ ***** EJERCICIO 6 ***** - getBrandPrices 6️⃣:

   🟢 Debes retornar la suma del precio de todos los coches de la marca recibida por parámetro.
   🟢 Si recibes el parámetro "unused" con valor true, entonces retorna la suma de precios sólo de los coches 
   que sean nuevos.
   🟢 Si recibes el parámetro "unused" con valor false, entonces retorna la suma de precios sólo de los coches 
   que sean usados.
   🟢 Si la marca no existe, arrojar un error que diga: "Marca no encontrada".
      
   📢 PUNTOS A TENER EN CUENTA 📢
   1)El parámetro "unused" puede tener el valor null.
   2) Debes obtener los coches a partir de los IDs almacenados en su marca.
*/

const getBrandPrices = (brand, unused) => {
  let cars = utils.cars;
  let marca = utils.brands.find((marca) => marca.name === brand);
  if (!marca) {
    throw Error("Marca no encontrada");
  }

  const finded = cars.filter((car) => marca.cars.includes(car.id));
  const NEW = finded.filter((auto) => auto.new);
  const USED = finded.filter((auto) => !auto.new);

  const totalNew = NEW.reduce((acc, auto) => acc + auto.price, 0);
  if (unused === true) {
    return totalNew;
  }
  const totalUsed = USED.reduce((acc, auto) => acc + auto.price, 0);
  if (unused === false) {
    return totalUsed;
  }
  return totalNew + totalUsed;
};

//⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = getBrandPrices;
