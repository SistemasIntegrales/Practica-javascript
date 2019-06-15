/*
* USADO CUANDO
* QUEREMOS MODIFICAR INFO
* EN UNA LISTA DE INFORMACIÓN
*/

const numeros = [1,2,3];
let dobleNumeros = [];

//A fuerza hay que poner 'return'
// de otro modo 'map' regresa 'null, null, null'
dobleNumeros = numeros.map(function(numero) {
  return numero * 2;
});

//Ver el listado de precios que existen
let cars = [
  {modelo: 'Buick', precio: 'barato'},
  {modelo: 'Camaro', precio: 'caro'},
  {modelo: 'Ferrari', precio: 'muy caro'}
]

let precios = cars.map(function(car) {
  if (car.precio === "caro") {
    return car.precio;
  }
});
