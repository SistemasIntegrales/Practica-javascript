/*
* Yuxtaposición de los otros 'helpers' (forE, map, find, filter)
* Antes nada más se regresaba un elemento o un arreglo de elementos.
* REGRESAN UN BOOLEANO
*/

const computadoras = [
  { nombre: 'Apple', ram: 24 },
  { nombre: 'Dell', ram: 4 },
  { nombre: 'Compaq', ram: 32 },
  { nombre: 'Acer', ram: 16 },
];

// Computadoras para un programa de más de 16GB de ram
// Diferente acercamiento, no quiero saber qué Computadoras
// quiero saber si tengo computadoras


// ¿Pueden todas las compus correr el programa?
computadoras.every(function(computadora) {
  return computadora.ram > 16;
}); // Un AND básicamente

// ¿Puede alguna de las compus correr el programa?
computadoras.some(function(computadora) {
  return computadora.ram > 16;
}); // Un OR básicamente


var names = [
  "Alexa",
  "Matthew",
  "Joe"
];

names.every(function(name) {
  return name.length > 4;
});
names.some(function(name) {
  return name.length > 4;
});

/*
* EJEMPLOS PRÁCTICOS:
* Login FORM
* Que el usuario SÍ haya ingresado algo.
*
*/

function Field(value) {
  this.value = value;
}

Field.prototype.validate = function() {
  return this.value.length > 0;
}

const username = new Field("MuyCool");
const password = new Field("contrasena");
const cumple = new Field("09/05/1996");

//Práctico si hay pocos campos:
username.validate() && password.validate();

//MEJOR FORMA:
const fields = [username, password, cumple];
let formIsValid = fields.every(function(field) {
  return field.validate();
});
if (formIsValid) {
  //Dejar que se envíe
} else {
  //Mensaje de ERROR
}

/*
* EJERCICIOS
*/
var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];
var hasSubmitted = users.every(function(user) {
  return user.hasSubmitted;
});


var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];
var inProgress = requests.some(function(request) {
  return request.status == 'pending';
});
