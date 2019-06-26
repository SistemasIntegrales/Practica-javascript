/*
*
*
*/

const expense = {
  tipo: 'Business',
  cantidad: '$45USD'
};

// Con ES5
let tipo = expense.tipo;
let cantidad = expense.cantidad;

// Con ES6
const { tipo } = expense; // Business
const { cantidad } = expense; // $45USD
// NOMBRES DEBEN SER IGUALES
// Se puede hacer aún más corto
const { cantidad, tipo } = expense;
cantidad; // Business
tipo; // $45USD

/*****************
* Más utilidades *
******************/

// Sacar propiedades de objetos en funciones
const archivoPrueba = {
  extension: 'jpg',
  nombre: 'captura',
  tamano: 12020
};
function resumenArchivo({ nombre, extension, tamano }) {
  return `El archivo ${nombre}.${extension} es de tamaño ${tamano}.`;
}
resumenArchivo(archivoPrueba);


/*****************
* Más utilidades *
******************/
/*
* Desestructurando arreglos
*/
const empresas = [
  'Google',
  'Facebook',
  'Uber'
];
// Orden dentro de [ elementos, ... ]
// es el orden en que se extraerán
const [ nombre, nombre2, nombre3, nombre4 ] = empresas;
nombre; // Google
nombre2; // Facebook
nombre3; // Uber
nombre4; // No afecta ni causa error, sólo NO trae ningún valor

// Con el OPERADOR SPREAD
const [ nombre, ...rest ] = empresas
nombre; // Google
rest; // ["Facebook","Uber"]


/*****************
* Más utilidades *
******************/
// ARREGLO DE OBJETOS
const empresas = [
  {nombre: 'Google', locacion: 'Mountain View'},
  {nombre: 'Facebook', locacion: 'Menlo Park'},
  {nombre: 'Uber', locacion: 'San Francisco'},
];
// DOS tipos de desestructuración
const [ { locacion } ] = empresas;

locacion; // Mountain View -> Porque se extrae el primer objeto del arreglo
          // y luego la propiedad del objeto

// OBJETO DE ARREGLOS
const Google = {
  locaciones: [ 'Mountain View', 'New York', 'Londres' ]
};

const { locaciones: [ primeraLocacion, ...rest ] } = Google;
primeraLocacion; // Mountain View
rest; // ["New York", "Londres"]


/*************************
*** EJEMPLOS PRÁCTICOS ***
*************************/
