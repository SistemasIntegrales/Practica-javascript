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
*/
emails.forEach(function(email) {
  deleteEmail(email);
});
