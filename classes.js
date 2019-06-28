/*
* CLASES
* Herencia - OOP
* JS tiene prototype inheritance
* ES6 - Clases: prototype inheritance
*
*/

// Objeto constructor
function Carro(opciones) {
  this.titulo = opciones.titulo;
}

// Agregar métodos
// Referenciar al prototipo
// prototype.funcion
Carro.prototype.drive = function() {
  return 'adelante';
}

// Extender Carro
function Camioneta(opciones) {
  Carro.call(this, opciones);
  this.color = opciones.color;
}

const carro = new Carro({ titulo: 'Ford Focus' });
carro.drive(); // adelante

Camioneta.prototype = Object.create(Carro.prototype);
Camioneta.prototype.constructor = Camioneta;

Camioneta.prototype.claxon = function() {
  return 'beep';
}

const toyota = new Camioneta({ color: 'rojo', titulo: 'Corolla 2020' });
toyota.drive();
toyota.claxon();


/*
*
* REFACTORIZACIÓN CARRO, CAMIONETA
*
*/
class Carro {
  constructor({ titulo }) {
    this.titulo = titulo;
  }
  drive() {
    return 'adelante';
  }
}

const carro = new Carro({ titulo: 'Toyota' });
carro;
carro.drive();


class Toyota extends Carro {
  constructor(opciones) {
    super(opciones);
    this.color = opciones.color;
  }
  claxon() {
    return 'beep';
  }
}

const toyota = new Toyota({ color: 'rojo', titulo: 'Corolla' });



/***************************************
****************************************
************** EJERCICIOS **************
****************************************
***************************************/
// 1)
// Inicializar con 100 de vida, propiedad name en opciones
class Monster {
  constructor(opciones) {
    this.health = 100;
    this.name = opciones.name;
  }
}

// 2)
// Método morder de seripiente que baja la vida
// Bajarle 10 por cada mordida
class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

class Snake extends Monster {
  constructor(options) {
    super(options);
  }
  bite(snakey) {
    return snakey.health -= 10;
  }
}

const snake = new Snake({ name: 'Uno' });
const snakey = new Snake({ name: 'Dos' });

snake.bite(snakey);
