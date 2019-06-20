/*
BUSCAR EN UN ARRAY
EN CUANTO SE ENCUENTRE
SE REGRESARÁ ESE VALOR
ES DECIR,
INMEDIATAMENTE CORTA EL CICLO DE BÚSQUEDA
*/

const usuarios = [
  { nombre: 'Jill' },
  { nombre: 'Alex' },
  { nombre: 'Bill' },
  { nombre: 'Tom' },
  { nombre: 'Tom' },
];

usuarios.find(function(usuario) {
    return usuario.nombre === 'Tom';
});
// A diferencia de filter, find sólo trae el PRIMER ELEMENTO
// Filter regresaría MÁS de 1


// ENCONTRAR UN COCHE CON CIERTAS CARACTERISTICAS
function Car(modelo) {
  this.modelo = modelo;
}

const cars = [
  new Car('Buick'),
  new Car('Camaro'),
  new Car('Focus'),
];
cars.find(function(car) {
  return car.modelo === 'Focus';
});


//Regresar el post al que pertenece cierto comentario
const posts = [
  {id: 4, titulo: 'Viejo Post'},
  {id: 5, titulo: 'Nuevo Post'},
];
let comentarios = {postId: 4, contenido: 'Genial post'};

function comentariosPorPost(posts, comentarios) {
  return posts.find(function(post) {
    return comentarios.postId === post.id;
  });
}
comentariosPorPost(posts, comentarios);


//EJEMPLOS REALES || PRÁCTICOS
/*
* APP CON UN LISTADO DE ELEMENTOS
* SE QUIERE EL DETALLE DE UN ELEMENTO,
* VIAJAR A UNA URL PARTICULAR...
*/


// Asignar un usuario a la variable ADMIN
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];
var admin = users.find(function(user) {
  return user.admin;
});


// Encontrar la cuenta con balance de 12
var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];
var account = accounts.find(function(account) {
  return account.balance === 12;
});


// Función con FIND para cualquier clase de BÚSQUEDA
var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 },
];
function findWhere(array, criteria) {
  return array.find(function(element) {
    property = Object.keys(criteria)[0];
    return element[property] === criteria[property];
  })
}
findWhere(ladders, {height:25});
