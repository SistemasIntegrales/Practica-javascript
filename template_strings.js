/*
* STRING INTERPOLATION
* capacidad de insertar variables dentro de un string.
* Nos ahorramos pasos con lo de + "..." + etc.
*
*/

// Sintais: comillas traseras para todo el string.
// Luego símbolo de pesos más llaves para las variables `... ${} ..`
function getMensaje() {
  const year = new Date().getFullYear();

  return `El sig año es ${year + 1}`;
}
getMensaje();

function getOtroMensaje() {
  return `El año pasado fue ${new Date().getFullYear() - 1}`;
}
getOtroMensaje();

const id = 4;
const guid = 21345;
const usuario = "Em";

// Ejemplo:
const data = '{ "id" : "' + id + '", "guid" : "' + guid + '", "usuario" : "' + usuario + '" }';

const data2 = `{ "id" : ${id}", "guid" : ${guid}", "usuario" : ${usuario}" }`;


// Ejemplo 2:
function doubleMessage(number) {
  return `Your number doubled is ${2 * number}`;
}

// Ejemplo 3:
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
