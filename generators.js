/*
* Más formas de iterar
*
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
