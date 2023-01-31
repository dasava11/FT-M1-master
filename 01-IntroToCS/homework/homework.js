'use strict';

const exp = require("constants");

function BinarioADecimal(num) {
   let decimal = 0;
   let exponent = 0
   for (let i = num.length-1; i > -1; i--) {
      let baseExp = 2**exponent;
      decimal += num[i]*baseExp;
      exponent++
   }
   return decimal;
}

function DecimalABinario(num) {
   let binario = '';
   while (num > 1) {
      binario += num%2
      num = Math.trunc(num/2)
   }
   binario += num;
   return binario.split('').reverse().join('');
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
