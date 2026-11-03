Persistencia de Datos



Almacenamiento
• La interfaz Storage de la API de almacenamiento web provee 
acceso al almacenamiento de la sesión o al almacenamiento 
local para un dominio en particular, permitiéndote por ejemplo 
añadir, modificar o eliminar elementos de dato almacenados.
• Métodos de almacenamiento
• sessionStorage: manipular el almacenamiento de sesión para un 
dominio
• localStorage: manipular el almacenamiento local para un dominio

sessionStorage
• La propiedad sessionStorage permite acceder a un objeto 
Storage asociado a la sesión actual.
•  La propiedad sessionStorage es similar a localStorage
• La única diferencia es que la información almacenada es 
eliminada al finalizar la sesión de la página. 
• La sesión de la página perdura mientras el navegador se 
encuentra abierto, y se mantiene por sobre las recargas y 
reaperturas de la página. 
• Abrir una página en una nueva pestaña o ventana iniciará una 
nueva sesión, lo que difiere en la forma en que trabajan las 
cookies de sesión.

sessionStorage
• Sintaxis // Almacena la información en sessionStoragesessionStorage.setItem("key", "value");
// Obtiene la información almacenada desde 
sessionStorage
var data = sessionStorage.getItem("key");
//Elimininar datos
sessionStorage.removeItem("key");
// Elimina todos los elementos
sessionStorage.clear();

sessionStorage
• Ejemplo
// Obtiene el campo de texto que vamos a moniterear
var field = document.getElementById("field");
// Verificamos si tenemos algún valor auto guardado
// (esto solo ocurrirá si la página es recargada accidentalmente)
if (sessionStorage.getItem("autosave")) {
// Restaura el contenido al campo de texto
field.value = sessionStorage.getItem("autosave");
}
// Espera por cambios en el campo de texto
field.addEventListener("change", function () {
// Almacena el resultado en el objeto de almacenamiento de sesión
sessionStorage.setItem("autosave", field.value);
});

localStorage
• La propiedad de sólo lectura localStorage permite acceder al 
objeto local Storage; los datos persisten almacenados entre 
las diferentes sesiones de navegación.
• Es similar a sessionStorage. 
• La única diferencia es que, mientras los datos almacenados 
en localStorage no tienen fecha de expiración
• Con localStorage los datos persisten entre ventanas/tabs con 
el mismo origen.

localStorage
• Sintaxis // Almacena la información localStorage.setItem("miGato", "Juan");
// Obtiene la información
var cat = localStorage.getItem("miGato");
// Elimina la información
localStorage.removeItem("miGato");
// Elimina todos los elementos
localStorage.clear();

Cookie
• Las cookies son pequeñas cadenas de datos que se 
almacenan directamente en el navegador. Son parte del 
protocolo HTTP
• Contiene ciertos datos:
• Un name-value que contiene la información a almacenar.
• Una fecha de expiracion, que define cuando será borrada la cookie.
• El dominio y la ruta del servidor al cual se debe enviar.
• Si NO tiene fecha de expiración de forma predeterminada 
desaparece cuando el navegador se cierra. Tales cookies se 
denominan “cookies de sesión”.


Cookie
Los parámetros para crear una cookie son
• <nombre>=<valor>
• Requerido. <nombre> es el nombre ( key) que identifica la cookie y <valor> es 
su valor. En JavaScript se puede crear una cookie con un valor vacío 
(<nombre>=).
• expires=<fecha> y max-age=<segundos>
• Opcional. Ambos parámetros especifican el tiempo de validez de la cookie. 
expires establece una fecha (ha de estar en formato UTC) mientras que max-
age establece una duración máxima en segundos. max-age toma preferencia 
sobre expires. Si no se especifica ninguno de los dos se creará una session 
cookie. Si es max-age=0 o expires=fecha-pasada la cookie se elimina.
• path=<ruta>
• Opcional. Establece la ruta para la cual la cookie es válida. Si no se 
especifica ningún valor, la cookie será válida para la ruta la página actual.

Cookie
Los parámetros para crear una cookie son
• domain=<dominio>
• Opcional. Dentro del dominio actual, subdominio para el que la cookie es 
válida. El valor predeterminado es el subdominio actual. Establecer 
domain=.miweb.com para una cookie que sea válida para cualqueir 
subdominio (nota el punto delante del nombre del dominio). Por motivos de 
seguridad, los navegadores no permiten crear cookies para dominios 
diferentes al que crea la cookie ( same-origin policy).
• secure
• Opcional. Parámetro sin valor. Si está presente la cookie sólo es válida para 
conexiones encriptadas (por ejemplo mediante protocolo HTTPS).
• HttpOnly
• Opcional. Parámetro no disponible en JavaScript ya que crea cookies válidas 
sólo para protocolo HTTP/HTTPS y no para otras APIs, incluyendo JavaScript.

Cookies
• El valor de document.cookie consiste de pares name=value 
delimitados por ;
•  Cada uno es una cookie separada.
Sintaxis
document.cookie = "user=John"; // modifica solo la cookie llamada 'user'
document.cookie = "user=John; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT"
// la cookie morirá en +1 hora a partir de ahora
document.cookie = "user=John; max-age=3600";
// borra la cookie (la hacemos expirar ya)
document.cookie = "user=John; max-age=0";
// Obtener todas las cookies
var lasCookies = document.cookie;

Tiempo de expiración
let date = new Date();
date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
expires = "; expires=" + date.toUTCString();
Cantidad de días 
después de la 
fecha actual

Local 
Storage vs 
Session 
Storage vs 
Cookies


Verificar Almacenamiento en el Navegador
