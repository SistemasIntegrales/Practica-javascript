let colors = ['rojo', 'azul', 'verde'];

colors.forEach(function(color) {
  console.log(color);
});

//Arreglo numeros
let numeros = [1,2,3,4,5];
let suma = 0;

numeros.forEach(function(numero){
  suma+=numero;
  console.log("suma"+suma);
});

//Variante
function sumar(numero){
  suma+=numero;
  console.log("Suma variante" + suma);
}

numeros.forEach(sumar);

/*
* EJEMPLOS PRÁTCOS
* forEach
* (comentar los codigos de emails y posts,
*   ya que no son usables por el momento)
*/
//Eliminar emails
emails.forEach(function(email) {
  deleteEmail(email);
});

//Guardar publicaciones
let posts = [
  { id: 23, title: 'Daily JS News' },
  { id: 52, title: 'Code Refactor City' },
  { id: 105, title: 'The Brightest Ruby' }
];

posts.forEach(function(post){
   savePost(post);
});

//Calcular area imagenes
let images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];

let areas = [];

images.forEach(function(image){
   areas.push(image.height* image.width);
});
