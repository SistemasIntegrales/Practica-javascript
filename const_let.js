/*
* ¡¡¡NUNCA MÁS USAR VAR!!!
* CONST es para valores que nunca van a cambiar
* LET para valores que sí cambian pero no tanta facilidad como var.
*/

const nombre = "Emiliano";
// si trato de cambiar nombre, el script truena.

let titulo = "Software Engineer";
// Se permite cambiarlo

function contar(string) {
  const characters = ['a', 'e', 'i', 'o', 'u']; // Indicamos que no va a cambiar
  let numero = 0;

  for (let i = 0; i < string.length; i++) {
    if (characters.includes(string[i])) {
      numero++;
    }
  }
  return numero;
}

/*
* Las variables declaradas con 'VAR' son globales, es decir,
* cuando se declaran, pueden ser utilizadas desde cualqueir otro lado.
*/
// Ejemplo:
if (true) {
  hola = 2;
  var ejemplo2 = 4;
}
// Hola, con el valor de dos, puede ser ahora accesado desde una función por ejemplo
function ejemplo() {
  console.log(hola); // 2
  console.log(ejemplo2); // 4
}

ejemplo(); // --> Imprime 2 y 4

/*
* Por OTRA PARTE, las variables 'var' pueden ser hoisted, es decir,
* se pueden declarar después de ser usadas.
*/
x = 5; // Assign 5 to x

elemento = x * 8;
console.log(elemento); // Desplegar x en el elemento

var x; // Declarar x --> mantendrá valor de 5



/*
* En cambio, con let, las variables son más locales
* Si se usa dentro de un if, no se sabrá su valor,
* así como no pueden declararse después de usarse.
*/
if (true) {
  let hola2 = 2;
  let otroEjemplo = 4;
}
// Hola, con el valor de dos, puede ser ahora accesado desde una función por ejemplo
function ejemplo() {
  console.log(hola2); // Marca error, no está declarado
  console.log(otroEjemplo); // Marca error, no está declarado
}

ejemplo(); // Manda errores


// Otro ejemplo:
let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // Imprime 2
  //Este cambio sólo se ve localmente
}

console.log(x);
// Imprime 1
// Cambio local no se ve reglejado de manera global


/*
**************************************************
* PARA MÁS INFORMACIÓN CONSULTAR:
* https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/let
**************************************************
*/
