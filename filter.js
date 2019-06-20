/*
* FUNCIONAMIENTO:
* El iterador regresa TRUE o FALSE
* Si se regresa FALSE, no será tomado en cuenta
* Como su nombre lo dice,
* LIT es para FILTRAR.
*/

let productos = [
  {name: 'cucumber', type: 'vegetal', cantidad: 0, precio: 1},
  {name: 'banana', type: 'fruta', cantidad: 10, precio: 15},
  {name: 'celery', type: 'vegetal', cantidad: 30, precio: 9},
  {name: 'orange', type: 'fruta', cantidad: 3, precio: 5},
];

let productosFiltrados = [];

//recordar poner el return
productos.filter(function(producto) {
  return producto.type === 'fruta';
});

//Tomar vegetales que estén presentes (> a 0) y que cuesten menos de 10
productos.filter(function(producto) {
  return producto.type === 'vegetal'
  && producto.cantidad > 0
  && producto.precio < 10;
});


//EJEMPLOS REALES
/*
* APP TIPO RED SOCIAL | BLOG
* Se tienen posts y comentarios.
* Se quieren regresar los comentarios de un cierto post.
*/
const posts = {id: 4, titulo: 'Nuevo Post'};
let comentarios = [
  {postId: 4, contenido: 'Genial post'},
  {postId: 3, contenido: 'Escribiendo reseña'},
  {postId: 4, contenido: 'Estuvo bien el post'},
];

function comentariosPorPost(post, comentarios) {
  return comentarios.filter(function(comentario) {
    return comentario.postId === post.id;
  });
}
comentariosPorPost(posts, comentarios);


//Filtrar números mayores a 50
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function(number) {
  return number > 50;
});


//Filtrar usuarios por administrador
var users = [
 { id: 1, admin: true },
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers = users.filter(function(user) {
  return user.admin;
});

//Funcion de rechazo - si es true, ¡¡¡no incluir!!!
var numbers = [10, 20, 30];
//--> La idea es algo más o menos así:
var lessThanFifteen = reject(numbers, function(number) {
  return !(number > 15);
}); //<-- Esto no es usable btw

function reject(array, iteratorFunction) {
  return array.filter(function(number) {
    return !(iteratorFunction(number));
  });
}
