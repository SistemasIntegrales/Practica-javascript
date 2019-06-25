function requestAjax(url, method) {
  // Hacer comprobaciones para los detalles puede llegar a ser laborioso
  if (!method) {
    method = 'GET';
  }
}

// variable = valor checa, si no se envió la variable, se le asigna un valor por default
function requestAjax(url, method = 'GET') {
	return method;
}

/* Con Default Function Arguments podemos hacer esta verifición
* Revisar si se envió la variable
* En caso de que no, asignarle un valor
*/
requestAjax('google.com');
requestAjax('google.com', 'POST');
requestAjax('google.com', null); // Al pasar null, no hay una reasignación del valor
requestAjax('google.com', undefined); // Sí hay reasignación



// Otro ejemplo
function Usuario(id) {
  this.id = id;
}

function generarId() {
  return Math.random() * 9999;
}

function crearAdmin(usuario) {
  usuario.admin = true;

  return usuario;
}

//Approach inicial
crearAdmin(new Usuario(generarId())); // Muy feo

// Si refactorizamos:
// Indicamos que al crear un admin, se realice todo el otro procedimiento
function crearAdmin(usuario = new Usuario(generarId())) { // Añade más flexibilidad
  usuario.admin = true;

  return usuario;
}
// Cuando se llama al método, se hace de forma sencilla
crearAdmin();

// Si ya se tenía un usuario, sucede lo mismo:
const usuarioNuevo = new Usuario(generarId());
crearAdmin(usuarioNuevo);



// EJERCICIOS
// 1)
// Inicio
function sum(a, b) {
  if (a === undefined) {
    a = 0;
  }
  if (b === undefined) {
    b = 0;
  }
  return a + b;
}
// Refactorizado
function sum(a = 0, b  = 0) {
  return a + b;
}


// 2)
// Inicio
function addOffset(style) {
  if (!style) {
    style = {};
  }

  style.offset = '10px';

  return style;
}
// Refactorizado
function addOffset(style = {}) {
  style.offset = '10px';
  return style;
}
