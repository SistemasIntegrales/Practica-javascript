/*
* Nueva forma de escribir objetos
*/

// función que nos regrese una librería:

//Hay cosas que se pueden reducir:
function createBookShop(inventorio) {
  return {
    // key : value
    // Si la llave y el valor se llaman igual, se puede reducir a una palabra
    inventorio: inventorio, // Forma inicial
    // key : funcion()
    // La palabra 'funcion' y los : se pueden omitir
    valorInventorio: function() { // Forma inicial
      return this.inventorio.reduce((total, libro) => total + libro.precio, 0);
    },
    precioTitulo: function(titulo) { // Forma inicial
      return this.inventorio.find(libro => libro.titulo === titulo).precio;
    }
  };
}


function createBookShop(inventorio) {
  return {
    inventorio, // Forma final
    valorInventorio() { // Forma final
      return this.inventorio.reduce((total, libro) => total + libro.precio, 0);
    },
    precioTitulo(titulo) { // Forma final
      return this.inventorio.find(libro => libro.titulo === titulo).precio;
    }
  };
}


const inventorio = [
  { titulo: 'Harry Potter', precio: 10},
  { titulo: 'Señor de los Anillos', precio: 15},
];

const bookShop = createBookShop(inventorio);

bookShop.inventorio;
bookShop.valorInventorio();
bookShop.precioTitulo('Harry Potter');


// Segundo ejemplo
// Forma inicial
function guardarArchivo(url, data) {
  $.ajax({
    method: 'POST',
    url: url,
    data: data
  });
}
// Buena práctica pasar los términos abreviados al inicio
function guardarArchivo(url, data) {
  $.ajax({
    url,
    data,
    method: 'POST',
  });
}

const url = "http://fileupload.com";
const data = { color : 'red'};

guardarArchivo(url, data);


/*
* EJERCICIOS
*/
// 1)
const red = '#ff0000';
const blue = '#0000ff';
// Inicio
const COLORS = { red: red, blue: blue };
// Completado
const COLORS = { red, blue };

// 2)
const fields = ['firstName', 'lastName', 'phoneNumber'];
// Inicio
const props = { fields: fields };
// Completado
const props = { fields };

// 3)
// Inicio
const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return {
    width: width,
    height: height
  };
}

// Completado
const canvasDimensions = (width, initialHeight) => {
  const height = initialHeight * 9 / 16;
  return {
    width,
    height
  };
}

// 4)
// Inicio
const color = 'red';
const Car = {
  color: color,
  drive: function() {
    return 'Vroom!';
  },
  getColor: function() {
    return this.color;
  }
};
// Fin
const Car = {
  color,
  drive() {
    return 'Vroom!';
  },
  getColor() {
    return this.color;
  }
};
