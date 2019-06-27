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

/*
* 1)
*/
// Base: funcion capturar datos y enviarlos a BD
// ARGUMENTOS en un ORDEN
// Reordenar o agregar más argumentos requiere cambiar todo en todos lados
// Larga lista de argumentos
function signup(username, password, email, nacimiento, ciudad) {
  // Crear usuario
}
// OTRO CÓDIGO EN EL MEDIO
// OTRO CÓDIGO EN EL MEDIO
// OTRO CÓDIGO EN EL MEDIO
signup('emiliano', 'micontrasena', 'test@tes.mx', '09/05/1996','CDMX');


// Cómo resolverlo:
// Generar un objeto
const usuario = {
  username: 'emiliano',
  password: 'micontrasena',
  email: 'test@tes.mx',
  nacimiento: '09/05/1996',
  ciudad: 'CDMX',
}
// Pasarle un usuario completo
signup(usuario);

// Para que entonces:
// En la función nada más se desestuctura
// NO me tengo que PREOCUPAR por ORDEN de los ARGUMENTOS
function signup( { email, username, password, ciudad, nacimiento } ) {
  // Crear usuario
}


/*
* 2)
*/
// API que manda info a una gráfica como x's & y's
// Lanza un arreglo de arreglo
// [x, y],
const points = [
  [4, 5],
  [10, 1],
  [0, 40],
];

// Se quiere mandar una estructura así:
[
  { x: 4, y: 5 },
  { x: 10, y: 1 },
  { x: 0, y: 40 },
];

// Transformar de una estructura a otra
// Desestructurar desde la lista de argumentos
const objeto = points.map(([x, y]) => {
  // En el return lo transformamos:
  return { x, y };
});

objeto;
/* objeto es:
[
  { "x": 4, "y": 5 },
  { "x": 10, "y": 1 },
  { "x": 0, "y": 40 },
];
*/



/*********************
**********************
***** EJERCICIOS *****
**********************
*********************/

/*
* 1)
*/
// Base
const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

function isEngineer(profile) {
  var title = profile.title;
  var department = profile.department;
  return title === 'Engineer' && department === 'Engineering';
}

// Resultado
const profile = {
  title: 'Engineer',
  department: 'Engineering'
};
function isEngineer( { title, department } ) {
  return title === 'Engineer' && department === 'Engineering';
}


/*
* 2)
*/
// Base -> Transformar a arreglo de objetos
const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];
// Resultado
const classesAsObject = classes.map(([ materia, hora, prof ]) => {
  return { 'subject': materia, 'time': hora, 'teacher': prof };
});


/*
* 3)
*/
// Doblar cada número en el arreglo.
// Sol 1 - forma difícil, sólo rest y desestructuración
const numbers = [1, 2, 3];

function double([ numero, ...rest ]) {
  if (rest.length === 0) {
    return [ numero * 2 ];
  }
  return [ ...double([numero]), ...double(rest) ];
}
double(numbers);
// Sol 2 - forma fácil
const numbers = [1, 2, 3];
function double(numbers) {
  return numbers.map(numero => numero * 2);
}
