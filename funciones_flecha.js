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



const equipo = {
  miembros: ['Jane', 'Bill'],
  nombreEquipo: 'Super S',
  resumen: function() {
    return this.miembros.map(function(miembro) {
      return `${miembro} está en el equipo ${this.nombreEquipo}`; // this.nombreEquipo está como no definido
    });
  }
};
// Aunque está la función adentro, no se reconoce como si fuera suya
// La función correo por sí sola, como si no fuera parte de 'equipo'

// DOS FORMAS de resolverlo:
// 1) Con ES5 (a la antiguita)
const equipo = {
  miembros: ['Jane', 'Bill'],
  nombreEquipo: 'Super S',
  resumen: function() {
    return this.miembros.map(function(miembro) {
      return `${miembro} está en el equipo ${this.nombreEquipo}`; // this.nombreEquipo está como no definido
    }.bind(this)); // Así se liga la función. Se une el contexto de la función al contexto actual.
  }
};
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Function/bind
const equipo = {
  miembros: ['Jane', 'Bill'],
  nombreEquipo: 'Super S',
  resumen: function() {
    return this.miembros.map(function(miembro) {
      return `${miembro} está en el equipo ${equipo.nombreEquipo}`; // Cambiando this por equipo pero en una función no es práctico
    });
  }
};


// 2) Con ES6, FUNCIONES FLECHA
const equipo = {
  miembros: ['Jane', 'Bill'],
  nombreEquipo: 'Super S',
  resumen: function() {
    // Aquí this === equipo
    return this.miembros.map(miembro => `${miembro} está en el equipo ${this.nombreEquipo}`);
  } // Funciones flecha hacen uso de LEXICAL THIS
}; // 'This' se refiere al contexto original

// https://hackernoon.com/javascript-es6-arrow-functions-and-lexical-this-f2a3e2a5e8c4
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/Arrow_functions

equipo.resumen();


/*
* EJERCICIOS
*
*/

// Refactorizar
const fibonacci = function(n) {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const fibonacci = n => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Agregar llave getName para regresar this.name
// NOTA: funciones flecha NO son siempre la solución
// Dos posibles y cortas:
const profile = {
  name: 'Alex',
  getName: function() {
    return this.name;
  }
};
const profile = {
  name: 'Alex',
  getName() {
    return this.name;
  }
};

profile.getName();
// https://derickbailey.com/2015/09/28/do-es6-arrow-functions-really-solve-this-in-javascript/
