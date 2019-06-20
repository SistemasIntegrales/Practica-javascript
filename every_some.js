/*
* Yuxtaposición de los otros 'helpers' (forE, map, find, filter)
* Antes nada más se regresaba un elemento o un arreglo de elementos.
* REGRESAN UN BOOLEANO
*/

const computadoras = [
  { nombre: 'Apple', ram: 24 },
  { nombre: 'Dell', ram: 4 },
  { nombre: 'Compaq', ram: 32 },
  { nombre: 'Acer', ram: 16 },
];

// Computadoras para un programa de más de 16GB de ram
// Diferente acercamiento, no quiero saber qué Computadoras
// quiero saber si tengo computadoras


// ¿Pueden todas las compus correr el programa?
computadoras.every(function(computadora) {
  return computadora.ram > 16;
}); // Un AND básicamente

// ¿Puede alguna de las compus correr el programa?
computadoras.some(function(computadora) {
  return computadora.ram > 16;
}); // Un OR básicamente


var names = [
  "Alexa",
  ""
]
