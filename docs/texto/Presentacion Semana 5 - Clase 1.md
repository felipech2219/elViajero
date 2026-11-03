Semana 5
ISW-521 Programación en Ambiente Web I

Document Object Model


¿Qué es el 
DOM?
• Las siglas DOM significan Document Object Model, o lo 
que es lo mismo, la estructura del documento HTML. 
• Una página HTML está formada por múltiples etiquetas 
HTML, anidadas una dentro de otra, formando un árbol 
de etiquetas relacionadas entre sí, que se denomina 
árbol DOM (o simplemente DOM).


El objeto document
• En Javascript, la forma de acceder al DOM es a través de un 
objeto llamado document.
• document representa el árbol DOM de la página o, más 
concretamente, la página de la pestaña del navegador donde 
nos encontramos. 
• Dentro de document pueden existir varios tipos de elementos:
• ELEMENT  la representación genérica de una etiqueta: 
HTMLElement.
• NODE es una unidad más básica, la cuál puede ser o un nodo de 
texto.

Seleccionar elementos del DOM
Métodos de búsqueda Descripción Si no lo encuentra
.getElementById(id) Busca el elemento HTML por su id Devuelve NULL
.getElementsByClassName(class) Busca elementos con la clase class Devuelve []
.getElementsByName(value)
Busca elementos con el atributo name 
dado por value
Devuelve []
.getElementsByTagName(tag) Busca etiquetas HTML tag Devuelve []
.querySelector(sel)
Busca el primer elemento que coincide 
con el selector CSS sel. Devuelve NULL
.querySelectorAll(sel)
Busca todos los elementos que coinciden 
con el selector CSS sel. Devuelve []

Obtener atributos HTML
Métodos de búsqueda Descripción
hasAttributes() Indica si el elemento tiene atributos HTML. Respuesta Boolean
hasAttribute(attr) Indica si el elemento tiene el atributo HTML attr. Respuesta Boolean
getAttributeNames() Devuelve un ARRAY con los atributos del elemento.
getAttribute(attr) Devuelve el valor del atributo attr del elemento o NULL si no existe.

Insertar elementos en el DOM: API Nodos
Métodos Descripción
.appendChild(node) Añade como hijo el nodo node. Devuelve el nodo insertado.
.removeChild(node) Elimina y devuelve el nodo hijo node.
.replaceChild(new, old) Reemplaza el nodo hijo old por new. Devuelve old.
.insertBefore(new, node) Inserta el nodo new antes de node y como hijo del nodo actual.
.insertBefore(new, ) Inserta el nodo new después del último nodo hijo. Equivale a .appendChild()

.appendChild()
const container = document.querySelector(".container");
const img = document.createElement("img");
img.src = "https://repositorio.com/assets/imagen.png";
img.alt = "Descripcion Imagen";
container.appendChild(img);
  


Insertar elementos en el DOM: API de elementos
Métodos Descripción
.before(element) Añade el nuevo elemento justo antes.
.after(element) Añade el nuevo elemento justo después.
.prepend(element) Se añade el nuevo elemento antes del primer hijo.
.append(element) Se añade el nuevo elemento después del último hijo.
.replaceChildren(element) Elimina todos los hijos y los sustituye por el nuevo elemento.
.replaceWith(element) Se sustituye por el nuevo elemento.
.remove() Elimina el propio elemento.


Insertar elementos en el DOM: API de 
inserción adyacente
Métodos Descripción
.insertAdjacentElement(position, element) Inserta el element en la posición position. Si falla, NULL.
.insertAdjacentHTML(position, htmlCode) Inserta el código HTML de htmlCode en la posición position.
.insertAdjacentText(position, text) Inserta el texto text en la posición position.


Navegar a través de elementos
Propiedades de elementos 
HTML Descripción
children Devuelve una lista de elementos HTML hijos. Retorna un ARRAY
parentElement Devuelve el padre del elemento o NULL si no tiene.
firstElementChild Devuelve el primer elemento hijo.
lastElementChild Devuelve el último elemento hijo.
previousElementSibling Devuelve el elemento hermano anterior o NULL si no tiene.
nextElementSibling Devuelve el elemento hermano siguiente o NULL si no tiene.

Navegar a través de nodos
Propiedades de nodos 
HTML Descripción
childNodes Devuelve una lista de nodos hijos. Incluye nodos de texto y comentarios. Retorna una ARRAY
parentNode Devuelve el nodo padre del nodo o NULL si no tiene.
firstChild Devuelve el primer nodo hijo.
lastChild Devuelve el último nodo hijo.
previousSibling Devuelve el nodo hermano anterior o NULL si no tiene.
nextSibling Devuelve el nodo hermano siguiente o NULL si no tiene.

Eventos
 Clic
evento f(x)

Eventos
Evento Descripción Elementos para los que está definido
onblur Un elemento pierde el foco <button>, <input>, <label>, <select>, < textarea>, <body>
onchange Un elemento ha sido modificado <input>, <select>, < textarea>
onclick Pulsar y soltar el ratón Todos los elementos
ondblclick Pulsar dos veces seguidas con el ratón Todos los elementos
onfocus Un elemento obtiene el foco <button>, <input>, <label>, <select>, < textarea>, <body>
onkeydown Pulsar una tecla y no soltarla Elementos de formulario y <body>
onkeypress Pulsar una tecla Elementos de formulario y <body>
onkeyup Soltar una tecla pulsada Elementos de formulario y <body>
onload Página cargada completamente <body>
onmousedown Pulsar un botón del ratón y no soltarlo Todos los elementos
onmousemove Mover el ratón Todos los elementos
onmouseout El ratón "sale" del elemento Todos los elementos
onmouseover El ratón "entra" en el elemento Todos los elementos
onmouseup Soltar el botón del ratón Todos los elementos
onreset Inicializar el formulario <form>
onresize Modificar el tamaño de la ventana <body>
onselect Seleccionar un texto <input>, <textarea>
onsubmit Enviar el formulario <form>
onunload Se abandona la página, por ejemplo, al cerrar el navegador <body>

Eventos mediante HTML
<script>
function saludo() {
alert("Hello!");
}
</script>
<button onClick="saludo()">Saludar</button>

Eventos mediante JavaScript
<script>
const button = document.querySelector("button");
button.onclick = function() {
alert("Hello!");
}
</script>
<button>Saludar</button>

addEventListener
Método Descripción
.addEventListener(event,func) Escucha el evento event, y si ocurre, ejecuta func.
.addEventListener(event,func,options) Realizo lo mismo, pero pasándole ciertas opciones.
const button = document.querySelector("button");
function action() {
alert("Hello!");
};
button.addEventListener("click", action);
const button = document.querySelector ("button");
button.addEventListener ("click", () => alert("Hello!"));


addEventListener
• Permite asociar múltiples funciones a un mismo evento
const button = document.querySelector("button");
const action = () => alert("Hello!");
const toggle = () => button.classList.toggle("red");
button.addEventListener("click", action); // Hello message
button.addEventListener("click", toggle); // Add/remove red CSS

Opciones .addEventListener()
• Al utilizar el método .addEventListener(), se puede indicar un 
tercer parámetro opcional. 
• Se trata de un Object opcional
Opción Descripción
capture El evento se dispara al inicio (capture), en lugar de al final (bubble).
once Sólo ejecuta la función la primera vez. Luego, elimina listener.
passive La función nunca llama a .preventDefault() (mejora rendimiento).

Objecto Event
• Se puede utilizar como primer parámetros en la función que gestiona el evento
const button = document.querySelector("button");
button.addEventListener("click", (event) => {
console.log(event);
});
// Objeto PointerEvent
{
type: "click", // Nombre del evento
pointerType: "mouse" // Tipo de dispositivo
altKey: false, // ¿La tecla ALT estaba presionada?
ctrlKey: false, // ¿La tecla CTRL estaba presionada?
shiftKey: false, // ¿La tecla SHIFT estaba presionada?
target: button, // Referencia al elemento que disparó el evento
clientX: 43, // Posición en eje X donde se hizo click
clientY: 16, // Posición en eje Y donde se hizo click
detail: 1, // Contador de veces que se ha hecho click
path: [], // Camino por donde ha pasado el evento
... // Otros...
}