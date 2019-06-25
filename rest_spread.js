/*
* OPERADOR REST:
* PROPÓSTIO ES JUNTAR ARGUMENTOS
****************************************
* OPERADOR SPREAD:
* PROPÓSTIO SEPARAR ARGUMENTOS
*/


function sumarNumeros(numeros) {
  return numeros.reduce((suma, numero) => {
    suma + numero;
  }, 0)
}
// Nada más otra versión por practicar
function sumarNumeros(numeros) {
  return numeros.reduce((suma, numero) => suma + numero, 0)
}

const numeros = [1, 2, 3, 4];
sumarNumeros(numeros); // Regresa 10

/*
* Qué tal que en vez de pasar un array de números,
* estos se envían por separado,
* es decir, pasar un N número de argumentos a la vez.
*/

function sumarNumeros(...numeros) {
  return numeros.reduce((suma, numero) => suma + numero, 0)
}
sumarNumeros(1, 2, 3, 4); // Regresa 10


/*
* DESPLEGAR paleta de colores a usuarios
*/
const coloresDefault = ['rojo', 'verde'];
const coloresFavoritos = ['anaranjado', 'negro'];
const coloresOtono = ['rojizo', 'anaranjado otoño'];

// Solución uno para juntar los arreglos
coloresDefault.concat(coloresFavoritos);

// Solución con SPREAD
[ ...coloresDefault, ...coloresFavoritos ]; // --> ["rojo", "verde", "anaranjado", "negro"]
// 3 puntos al frente sacan los elementos del arreglo
// "niegan los paréntesis" o dicho de otro modo, tomar todos los elementos

[ ...coloresDefault, coloresFavoritos]; // --> ["rojo", "verde", ["anaranjado", "negro"] ]

[ ...coloresOtono, ...coloresDefault, ...coloresFavoritos ];

/*
* EJEMPLO PRÁCTICO
*/
function validarCarritoCompras(...compras) {
  if (compras.indexOf('leche') < 0) {
    return [ 'leche', ...compras ];
  }

  return compras;
}

validarCarritoCompras('naranjas', 'pan', 'huevos');


/*
* EJEMPLO MÁS PRÁCTICO
* Actualizar librería o código - nueva función que está por N razones (nombre más corto,
* reacreación función, etc).
* Evitar eliminar primer función porque puede romper código.
* Llamar a la segunda función desde la primera.
*/
const LibreriaMate = {
  calcularProducto(a, b) {
    return a * b;
  },
  multiplicar(a, b) {
    return a * b;
  }
};

// Refactorizado + algunas mejoras
const LibreriaMate = {
  calcularProducto(...rest) {
    return this.multiplicar(...rest);
  },
  multiplicar(...numeros) {
    return numeros.reduce((producto, numero) => producto * numero, 1);
  }
};

LibreriaMate.calcularProducto(1, 2, 3, 4);


/*
* EJERCICIOS
*/
// 1)
function product(a, b, c, d, e) {
  var numbers = [a,b,c,d,e];

  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}
// Sol
function product(...numbers) {
  return numbers.reduce((acc, number) => acc * number, 1);
}


// 2)
function join(array1, array2) {
  return array1.concat(array2);
}
// Sol
function join(array1, array2) {
  return [...array1, ...array2];
}


// 3)
function unshift(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}
// Sol
function unshift(array, ...cadena) {
  return [...array, ...cadena];
}
