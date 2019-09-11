/*
* CON ES6 --> IMPLEMENTACIÓN NATIVA DE PROMESAS
* Pendiente, aprovado, rechazado
*/

/*
* setTimeout !!== sleep() como en otros lenguajes de programación
* Recordar que todo se ejecuta de jalón.
*/

// Promise debe recibir una función
// La función siempre lleva dos argumentos, sí y no ó dicho de otra manera: resolver() o rechazar()

/* ---------------
* Promise 101
--------------- */
const promesa = new Promise((resolver, rechazar) => {
  setTimeout(() => {
    resolver();
  }, 3000);
});

// Sea cual sea la respuesta, aprovado o rechazado, then() se ejecuta
// Se pueden poner mútilples .then() ..> .then().then().then();
// Si se agrega catch(), then() será para aprovado, catch() rechazos
promesa.then(() => {
  console.log('Finalizó');
}).catch(() => {
  // Se ejecuta sólo si falló la promesa
  console.log('¡Uh oh!');
});

/*
---------------
*
* FETCH
*
---------------
*/
url = "https://jsonplaceholder.typicode.com/posts/"
// Lo que obtienes directamente no son datos, ES la respuesta del servidor, ej: status 200
fetch(url).then(respuestaServidor => console.log(respuestaServidor));

// Para obtener info debemos:
fetch(url)
  .then(respuesta => respuesta.json())
  .then(data => console.log(data))
  // SÓLO ENTRA A CATCH si no encuentra la URL
  // SI existe la página, sin importar el estatus (3xx, 4xx ej: 404), NO entrará al catch
  .catch(error => console.log('Algo salió mal'));
