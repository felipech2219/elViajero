Semana 4
ISW-521 Programación en Ambiente Web I

JavaScript

Repaso
• JavaScript permite:
• responder a acciones del usuario 
• modificar contenido en la página 
• validar formularios 
• crear animaciones 
• comunicarse con servidores 
• Ejemplo :
• Cuando se hace clic en un botón y aparece un mensaje, normalmente 
eso está hecho con JavaScript.


Funciones
Una función es un bloque de código que se puede reutilizar para 
realizar una tarea específica.
Permite:
• organizar el código 
• evitar repeticiones 
• facilitar mantenimiento

Funciones
• Crear una función
• function→ palabra clave 
• saludar → nombre de la función 
• {} → bloque de código
function saludar() {
console.log("Hola");
}

Funciones
• Ejecutar una función
• Definir ≠ ejecutar
• Primero se define, luego se llama.
saludar();

Funciones con parámetros
• Funciones con parámetros
• Los parámetros permiten que la función reciba datos.
• Ejemplo:
function saludar(nombre) {
console.log("Hola " + nombre);
}
saludar("Ana");

Funciones 
Retorno de valores
• return permite devolver un resultado.
• Ejemplo:
function sumar(a, b) {
return a + b;
}
let resultado = sumar(5, 3);

¿Qué es un evento?
Un evento es una acción que ocurre en la página web.
Ejemplos:
• clic en un botón 
• mover el mouse 
• escribir en un input 
• cargar la página
JavaScript permite responder a estas acciones.
• “Cuando el usuario hace clic, ocurre un evento.”

Eventos


Eventos
• Eventos básicos
• Onclick
<button onclick="saludar()">Haz clic</button>
• Cuando el usuario hace clic, se ejecuta la función.
• Mouseover
• <p onmouseover="cambiarColor()">Pasa el mouse</p>
• Se activa cuando el mouse pasa sobre el elemento.

Eventos en Formularios
• Evento input
<input type="text" oninput="escribir()">
Se ejecuta cada vez que el usuario escribe.
• Evento submit
<form onsubmit="validar()">
• Se ejecuta cuando el usuario envía un formulario.
• Muy importante para:
• validaciones 
• evitar errores

Manejo de interacciones básicas
• Cambiar contenido con JavaScript
document.getElementById("texto").innerHTML = "Hola";
JavaScript puede modificar el contenido de la página.
• Cambiar estilos
document.getElementById("caja").style.backgroundColor = "blue";
Se puede cambiar el diseño dinámicamente.
• Mostrar alertas
alert("Bienvenido");
Se usa para mostrar mensajes simples.

¿Qué es un formulario?
• Un formulario es un conjunto de 
elementos que permite al usuario 
ingresar información en una 
página web.
• Se utiliza para:
• iniciar sesión 
• registrarse 
• enviar datos 
• realizar búsquedas


Estructura básica de un formulario
• <form>
  <input type="text" 
placeholder="Nombre">
  <input type="email" 
placeholder="Correo">
  <button>Enviar</button>
</form>
<form> → contenedor 
<input> → campos de entrada
<button> → acción 

Tipos de inputs
• text→ texto 
• email → correo 
• password→ contraseña 
• number → números 
• checkbox→ selección 
• radio → opciones
Ejemplo:
Cada tipo de input sirve para un tipo de dato específico.
<input type="password">
Oculta el texto ingresado.