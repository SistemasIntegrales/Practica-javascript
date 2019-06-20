/*
* USADO CUANDO
* QUEREMOS MODIFICAR INFO
* EN UNA LISTA DE INFORMACIÓN
*/

/*
* GENERALMENTE ITERACIONES DE LISTAS DE DATOS
* EJ: INFO DE UN MURO (POSTS)
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


// SACAR LA ALTURA Y AREA DE UNA IMAGEN
var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map(function(image) {
  return image.height;
});
var area = images.map(function(image) {
  return (parseInt(image.height, 10)  * parseInt(image.width, 10));
});


//CALCULAR LA VELOCIDAD Y ALMACENARLO EN UNA VARIABLE
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];
var speeds = trips.map(function(trip) {
  return trip.distance / trip.time;
});


//FUNCION QUE REGRESE UN ARREGLO DE LAS PROPIEDADES SOLICITADAS
//Ejemplo de arreglo:
var paints = [{color: 'rojo', size:'10'}, {color: 'azul', size:'15'}];

function pluck(array, property) {
  return array.map(function(element) {
    return element[property];
  });
}
var colors = pluck(paints, 'color');

/* SOLUCIÓN ALTERNATIVA CON FUNCIONES FLECHA */
const pluck = (array, property) => array.map(arr => arr[property]);
