/*
* ARROW FUNCTIONS o FUNCIONES FLECHA
* Nueva forma de escribir funciones
* EVITAR escribir la palabra FUNCTION
*/

// Como se solían definir las cosas:
const add = function(a, b) {
  return a + b;
}
add(1, 2);

// Como se hace hoy en día
const suma = (a, b) => {
  return a + b;
}
// Con llaves se requiere RETURN
suma(1, 2);

// Se puede refactorizar aún más
const suma = (a, b) => a + b;
// Eliminación de llaves y de 'return'
// esto si sólo hay una línea --> return implícito
suma(1, 2);


// Otro ejemplo
const doble = (numero) => 2 * numero;
// En este caso tenemos UN SÓLO ARGUMENTO
doble(8);

// Se puede refactorizar así:
const doble = numero => 2 * numero;
// SÓLO hacer esto si se tiene 1 ARGUMENTO
doble(8);


// Funciones sin argumentos:
const duplicar = () => 2;
// Todavía se mantienen los paréntesis
duplicar();


/*
* EN PRÁCTICA
* Reducir lógica
*/

const numeros = [1, 2, 3, 4];

numeros.map(function(numero) {
  return numero * 2;
});

// Refactorización
numeros.map(numero => numero * 2);
