Semana 4
ISW-521 Programación en Ambiente Web I

JavaScript

¿Qué es JavaScript?
• JavaScript es un lenguaje de programación que permite agregar 
interactividad y comportamiento dinámicoa las páginas web.
• Mientras que:
• HTML define la estructura
• CSS define el diseño
• JavaScriptcontrola la lógica y la interacción


¿Qué es JavaScript?
• JavaScript permite:
• responder a acciones del usuario
• modificar contenido en la página
• validar formularios
• crear animaciones
• comunicarse con servidores
• Ejemplo
• Hacer clic en un botón. Se muestra aparece un mensaje, normalmente 
eso está hecho con JavaScript.


Cómo se usa JavaScript en una página web
• Insertar JavaScript en HTML
• Ejemplo:
<script>
alert("Hola mundo");
</script>
El navegador ejecuta el código JavaScript cuando carga la página.
Este código permite realizar acciones como mostrar mensajes, 
modificar elementos o responder a eventos.

Cómo se usa JavaScript en una página web
• Insertar JavaScript en HTML
• Ejemplo:
<script>
alert("Hola mundo");
</script>
El navegador ejecuta el código JavaScript cuando carga la página.
Este código permite realizar acciones como mostrar mensajes, 
modificar elementos o responder a eventos.

Variables en JavaScript
¿Qué es una variable?
• Una variable es un espacio donde se almacena información para 
usarla en el programa.
• Ejemplo:
let nombre = "Ana";

Variables en JavaScript
• Tipos de declaración
• JavaScript permite declarar variables usando:
let
const
var (forma antigua)
• Ejemplo:
let edad = 25;
const pais = "Costa Rica";
let
permite cambiar el valor
let contador = 1;
contador = 2;
const
no permite cambiar el valor
const pi = 3.14;

Variables en JavaScript
• Tipos de datos básicos
• JavaScript maneja diferentes tipos de datos:
• string (texto)
• number(números)
• boolean (verdadero/falso)
• array (listas)
• object (objetos)
• Ejemplos
let nombre = "Carlos";
let edad = 20;
let activo = true;
Cada variable almacena un tipo de información 
diferente.
•texto → nombre
•números → edad
•booleanos → verdadero o falso



String interpolation
• Las plantillas de cadenas, que pueden abarcar varias líneas y 
tener expresiones incrustadas. Estas cadenas están rodeadas por 
el carácter de comillas invertidas / backquote (`), y las 
expresiones incrustadas tienen la forma $ {expr}.
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}. I'll be ${age + 1} years 
old next month.`;
let sentence: string = "Hello, my name is " + fullName + ".\n\n" + "I'll be " +
(age + 1) + " years old next month."; 


Operadores
Operadores básicos
• JavaScript utiliza operadores para realizar operaciones.
Operadores aritméticos
+  suma
- resta
*  multiplicación
/  división
Ejemplo:
let resultado = 10 + 5;
Operadores de comparación
== igual
!= diferente
> mayor
< menor
Ejemplo:
edad > 18

Estructuras de control
Condicionales
• Permiten ejecutar código dependiendo de una condición.
• Ejemplo:
if (edad >= 18) {
console.log("Es mayor de edad");
}
El programa evalúa una condición y decide qué código ejecutar.
Esto permite que el programa tome decisiones.

Bucles (loops)
Estructura for
• Los bucles permiten repetir instrucciones.
• Ejemplo:
for (let i = 0; i < 5; i++) {
console.log(i);
}
El código se ejecutará varias veces hasta que se cumpla la condición.


Formas de insertar JavaScript
En línea
• En el < head > usando la 
etiqueta < script >
Externa
• Estableciendo un archivo de 
JavaScript .js
• En el < head > establecer < link > 
para llamar al archivo JavaScript
<html>
<head>
<title>Título de la página</title>
<script>
console.log("¡Hola!");
</script>
</head>
<body>
<p>Ejemplo de texto.</p>
</body>
</html>
<html>
<head>
<title>Título de la página</title>
<script src="js/index.js"></script>
</head>
<body>
<p>Ejemplo de texto.</p>
</body>
</html>

Archivo JavaScript externo
•Se recomienda colocar el código JavaScript en 
archivos externos.
• Ejemplo:
• <script src="script.js"></script>
Ventajas
• mejor organización del código
• reutilización
• facilita mantenimiento
• separa estructura y lógica

Ubicación de la etiqueta script
Ubicación
¿Cómo descarga el archivo 
JavaScript?
Estado de la página
En <head>
ANTES de empezar a crear la 
página.
Página aún no creada
En <body>
DURANTEla creación de la 
página.
Creada hasta donde está la 
etiqueta <script>.
Antes de </body> DESPUÉSde crear la página. Creada al 100%.

Sintaxis básica
• La sintaxis básica del lenguaje JavaScript se puede tomar de las
guías de referencia indicadas en los siguientes links.
• https://www.w3schools.com/js/default.asp
• https://developer.mozilla.org/es/docs/Web/JavaScript/Guide

Sintaxis: Objetos integrados
• JavaScript cuenta con una serie de objetos integradosestándares
denominados como "objetos globales“, los cuáles cuenta con
una serie de propiedades y métodos para uso de los
desarrolladores.
• En los siguientes links se muestra el material de referencia para
acceder al conjunto de objetos, propiedades y métodos globales
de JavaScript:
• https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_
Objects
• https://www.w3schools.com/jsref/default.asp