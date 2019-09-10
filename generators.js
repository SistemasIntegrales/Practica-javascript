/*
* Más formas de iterar: ForOf
*
* Con Generators:
* podemos iterar sobre cualquier estructura!
*/

/*
* ¡¡IMPORTANTE!!
*
* map, foreach, etc... ¡NO! Funcionan con generators
* Por eso usamos for.. of
*/

// FOR.. OF - iterrar en arreglos de datos.
const colores = ['rojo', 'azul', 'verde'];
for (let color of colores) {
  console.log(color);
}

const numeros = [1,2,3,4,5];
let total = 0;
for (let numero of numeros) {
  total+=numero;
}


// ------------------------------
// 1er ejemplo generadores
// ------------------------------
function* colors() {
  yield 'rojo';
  yield 'azul';
  yield 'verde';
}

const misColores = [];
for (let color of colors()) {
  misColores.push(color);
}
misColores; // ["rojo", "azul", "verde"]


// ------------------------------
// 2do ejemplo generadores
// ------------------------------

/*
* VERSIÓN 1
*/
const testingTeam = {
  jefe: 'Amanda',
  tester: 'Bill',
};

const equipoIngenieros = {
  tamano: 3,
  departamento: 'Digital',
  jefe: 'Jill',
  gerente: 'Alex',
  ingeniero: 'Dave',
  equipoTests: testingTeam
};

// Generador para iterar sobre los miembros del equipo
// Delegador de iteración para el equipo de tests:
function* IteradorEquipo(equipo) {
  yield equipo.jefe;
  yield equipo.gerente;
  yield equipo.ingeniero;
  const generadorEquipoTests = IteradorEquipoTests(equipo.equipoTests);
  // Decir que se tiene un generador por dentro
  // con yields que le interesan
  // Generator Delegation
  yield* generadorEquipoTests;
}
function* IteradorEquipoTests(equipo) {
  yield equipo.jefe;
  yield equipo.tester;
}

const nombres = [];
for (let nombre of IteradorEquipo(equipoIngenieros)) {
  nombres.push(nombre);
}
nombres; // ["Jill", "Alex", "Dave", "Amanda", "Bill"]

/*
* VERSIÓN 2
* Con symbol iterator,
* eliminar funciones * "externas"
*/

// Como comportarse en un for of
const testingTeam = {
  jefe: 'Amanda',
  tester: 'Bill',
  // Symbol.iterator --> Llave en ES6
  [Symbol.iterator]: function* () {
    yield this.jefe;
    yield this.tester;
  }
};

const equipoIngenieros = {
  tamano: 3,
  departamento: 'Digital',
  jefe: 'Jill',
  gerente: 'Alex',
  ingeniero: 'Dave',
  equipoTests: testingTeam,
  [Symbol.iterator]: function* () {
    yield this.jefe;
    yield this.gerente;
    yield this.ingeniero;
    // Estrella porque es un objeto con sus propios yields
    yield* this.equipoTests;
  }
};

const nombres = [];
for (let nombre of equipoIngenieros) {
  nombres.push(nombre);
}
nombres;

// ------------------------------
// 3er ejemplo generadores
// ------------------------------

/*
* Estructura de árbol
* Recorrer comentarios
* Recursividad - llegar nodos hijos
*/
class Comentario {
  constructor(contenido, hijos) {
    this.contenido = contenido;
    this.hijos = hijos;
  }

  *[Symbol.iterator] () {
    yield this.contenido;
    for (let hijo of this.hijos) {
      yield* hijo;
    }
  }
}

const respuestasComm3 = [
  new Comentario('Igual', []),
  new Comentario('Igualx2', []),
  new Comentario('Igualx3', []),
];

const hijos = [
  new Comentario('comentario 1', []),
  new Comentario('comentario 2', []),
  new Comentario('está chido', respuestasComm3),
  new Comentario('último comentario', []),
];

// root node
const tree = new Comentario('Muy buen post', hijos);

const valores = [];
for (let valores of tree) {
  valor.push(valor);
}

valores;
