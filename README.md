# Funciones y prácticas para JS

## Diversos ejemplos para los temas:

### Evitar ciclos for:
#### - forEach
#### - map
#### - filter
#### - find
#### - every & some
#### - reduce

### Evitar var:
#### Const & let

### Template Strings
#### `... ${variable} ...`

### Cambios en las funciones:
#### Funciones flecha

### Nueva forma de escribir objetos
#### Enhanced Object Literals
#### De llave : valor a llave
##### Ejemplo: `{ nombre: nombre }` --> `{ nombre }`
##### Ejemplo: `{ getNombre: function() {...} }` --> `{ getNombre() {...} }`

### Default Function Arguments

### Operadores Rest & Spread
#### Capturar argumentos
#### `...`

### Desestructuración
#### `variable = objeto.variable` --> `const { nombre } = objeto`
#### `const { propiedad, otra, otra2 } = objeto`
#### `const [ elemento, elemento2, elemento3 ] = arreglo`
#### `const [ { propiedad } ] = arreglo;`
#### `const { propiedad: [ primerElemento, ...rest ] } = objeto;`


### Classes
#### Estructura básica:
class Snake extends Monster {
  constructor(options) {
    super(options);
  }
  bite(snakey) {
    return snakey.health -= 10;
  }
}
#### siempre usar 'new' --> new ClaseNombre()
#### EJ: new Snake({ name: 'Uno' });

### Generators
#### Se usan con for.. of
#### NO se pueden usar con map, foreach, etc... :(

### Promises & fetch
#### Crear:
const promesa = new Promise((resolver, rechazar) => {
});
#### then() y catch()
promesa.then(() => {
  // Cuando todo va bien
}).catch(() => {
  // Se ejecuta sólo si falló la promesa
});
