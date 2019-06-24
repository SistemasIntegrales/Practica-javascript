/*
* ES EL HELPER MÁS COMPLETO
* posible REFFACTORIZAR otros helpers usando REDUCE
*
*/

const numeros = [10, 20, 30];

numeros.reduce(function(sum, numero) { // <-- lleva ARGUMENTOS
  return sum + numero;
}, 0); // <-- Se le debe dar un VALOR INICIAL
// PRIMERA variable será igual al valor inicial.


// Pasar esto a un arreglo
const coloresPrimarios = [
  { color: 'amarillo'},
  { color: 'rojo'},
  { color: 'azul'},
];

coloresPrimarios.reduce(function(acumulador, color) {
  acumulador.push(color.color);
  return acumulador; // Separado en dos líneas porque push chocaba
}, []); // Se INICIA con arreglo en vez de valor, ese es el objetivo en este caso


/*
* EJEMPLOS PRÁCTICOS
* Sumas de números
* Resolver entrevistas: Problema de paréntesis, es decir, si están balanceados
*/


"()()()()" // Balanceado
"(((())))" // Balanceado
"))))" // DESbalanceado
"())))" // DESbalanceado
")()(" // DESbalanceado

/*
* Usaremos un contador
* Cada paréntesis de apertura "(" incrementa
* Cada cierre, decrece.
* Contador debe ser 0 al final.
* En ningún momento puede ser negativo.
*/

function balancedParens(string) {
  return !string.split("").reduce(function(previous, char) {
    if (previous < 0) {
    	return previous;
  	}
    if (char === "(") {
    	return ++previous;
  	}
    if (char === ")") {
      return --previous;
    }
    return previous;
  }, 0); // Contador
}
balancedParens(")()("); // Falso


/*
* EJERCICIOS
*/

/*
* Suma de las distancias
*/
var trips = [
  { distance: 34 },
  { distance: 12 },
  { distance: 1 }
];

var totalDistance = trips.reduce(function(acumulado, viaje) {
  return acumulado + viaje.distance;
}, 0);


/*
* Calcular (talling) el número de escritorios standing y sitting.
* Objeto resultante forma: { sitting: 3, stangin '2'}.
*/
var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(resultado, escritorio) {
  if (escritorio.type === 'sitting') {
    resultado.sitting++;
  } else {
    resultado.standing++;
  }
  return resultado;
}, { sitting: 0, standing: 0 });


/*
* Remover valores duplicados de un arreglo
* Hint: usar reduce y find.
*/

const numeros = [1, 1, 2, 3, 4, 4];

// Solución 1
function unique(array) {
  return array.reduce(function(arreglo, numero) {
    if (!arreglo.includes(numero)) {
      arreglo.push(numero);
    }
    return arreglo;
  }, []);
}

filtro = unique(numeros);

//Solución 2
function unique(array) {
  return array.reduce(function(arreglo, numero) {
    if (arreglo.every(function(valor) {
        return valor !== numero;
      })
    ) {
      arreglo.push(numero);
    }
    return arreglo;
  }, []);
}
filtro = unique(numeros);
