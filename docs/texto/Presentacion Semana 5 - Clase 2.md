Semana 5
ISW-521 ProgramaciónenAmbienteWeb I

Formularios
Formulario
Servidor


Formulario
•El elemento HTML <form> se usa para capturar datos 
ingresados por el usuario. 
•Su propósito principal es permitir al usuario seleccionar o 
insertar información y enviarla al servidor para ser procesada
•El formulario es un contenedor de distintos tipos de entradas 
<input> (textfields, checkboxes, radio buttons, submitbuttons, 
entre otros)

Formularios
•Los formularios requieren de ciertos atributos para determinar 
cómo se envía la información al servidor:
•name: Especifica el nombre del formulario.
•method: Especifica el método HTTP que se empleará para enviar los 
datos del usuario que ha introducido en el formulario. Los valores 
posibles son
•GETobtener un recurso. Se puede enviar una cantidad limitada de 
información de forma pública (los datos son incluidos en la URL)
•POSTcrear un recurso. Se utiliza para enviar una cantidad ilimitada de 
información de forma privada en el cuerpo de la solicitud
•action: Indica el URL del recurso donde se procesarán los datos del 
formulario cuando el usuario lo envíe
•enctype: Este atributo declara la codificación aplicada a los datos 
que envía el formulario. Puede tomar tres valores: 
•application/x-www-form-urlencoded(por defecto)
•multipart/form-data
•text/plain

Entradas del Formulario
•<input>: Este elemento crea un campo de entrada.
Atributo Descripción
name Indica el nombre del campo. Útil para hacer referencia a la información almacenada.
type
Indica la naturaleza de datos que se espera del usuario (“text”, “password”, 
“checkbox”, “radio”, “number”, “email”, “date”, “file”, “submit”, “button”, “range” 
,“tel”).
value Define el valor predeterminado de un campo de entrada. Este valor se envía al servidor cuando se envía el formulario.
placeholderMuestra un texto de sugerencia en el campo de entrada cuando está vacío. Este texto desaparece cuando el usuario comienza a escribir en el campo.
disabled Desactiva un campo de entrada. Los campos desactivados no se envían con el formulario.
readonly
Campo de entrada  de solo lectura. A diferencia de los campos desactivados, 
los campos de solo lectura sí se envían con el formulario, pero los usuarios 
no pueden modificar su valor.
Enlace Atributos Input 

Entradas del Formulario
•<input>: Este elemento crea un campo de entrada.
Atributo Descripción
step (html5)Permite establecer la cantidad de valores posibles dentro de un rango.
autofocus 
(html5)
Fuerza el foco (la posición del cursor) dentro de un campo, una vez que se
carga la página
Autocomplete 
(html5)
El atributo autocomplete permite al navegador completar automáticamente 
los campos de entrada con valores almacenados previamente por el 
usuario.
size
Tamaño inicial del control. En text/passwordindica la cantidad de 
caracteres que se
pueden introducir en el campo, para el resto significa su tamaño en pixel
multiple
(html5) Valor booleano que indica que se permite la selección de valores múltiples.
Pattern
(html5)
Especifica una expresión regular con la que se compara el valor de un 
elemento <input>

Tipos de entradas <input>
•button
•checkbox
•color(html5)
•date(html5)
•datetime(html5)
•email(html5)
•file
•hidden
•image
•month(html5)
•number(html5)
•password
•radio
•range(html5)
•reset
•search(html5)
•submit
•tel(html5)
•text
•time(html5)
•url(html5)
•week(html5)

Validación de datos <input>
Atributo Descripción Ejemplo
required Especifica si un campo de formulario debe completarse 
antes de que se pueda enviar el formulario.
<inputtype="text"required/>
type Especifica si los datos deben ser un número, una dirección 
de correo electrónico o algún otro tipo de preajuste
específico.
<inputtype="text"minlength="5"
id="fruit"/>
min y max Especifican los valores mínimo y máximo de los tipos de 
entrada numéricos. Se puede aplicar a los inputs: date, 
month, week, datetime-local, numbery range
<inputtype="date"min="2019-12-25"
max="2024-12-25"step="1">
minlengthy 
maxlength
Especifican la longitud mínima y máxima de los datos de 
texto (cadenas).
<textareaminlength="10"maxlength="40"
required></textarea>
pattern Especifica una expresión regular que define un patrón que 
los datos que se introduzcan deben seguir.
<inputtype="password"
pattern="\d{4,4}"required/>

<textarea>
•El elemento HTML <textarea> representa un control para la 
edición mutilíneade texto sin formato.
Atributo Descripción
cols Número de carácteres que caben en horizontal (columnas).
rows Número de carácteres que caben en vertical (filas).
wrap
•soft(valor por defecto)
•hardse añadirán nuevas líneas (\n) para ajustar el texto enviado exactamentecomo se ve en el <textarea> del 
navegador

Select
•Representa un control que muestra un menú de opciones. 
•Las opciones contenidas en el menú son representadas por 
elementos <option>, 
•Las opciones se pueden agrupar por elementos <optgroup>. 
•La opción puede estar preseleccionada por el usuario.

Agrupar elementos relacionadas
•El elemento <fieldset> (grupo de campos) permite organizar 
en grupos los campos de un formulario.
•El elemento <legend> (leyenda) crea un título para un grupos 
los campos (<fieldset>) de un formulario.
<form>
<fieldset>
<legend>Información Personal</legend>
<labelfor="nombre">Nombre:</label>
<inputname="nombre"id="nombre"type="text"tabindex="1"/>
<labelfor="apellidos">Apellidos:</label>
<inputname="apellidos"id="apellidos"type="text"tabindex="2"/>
</fieldset>
</form>

Data List(html5)
•Contiene un conjunto de elementos <option> que representan 
los valores disponibles para otros controles.
<inputtype="range"list="items"min="1"max="5"value="3">
<output></output>
<datalistid="items">
<optionvalue="1">Muy satisfecho.</option>
<optionvalue="2">Satisfecho.</option>
<optionvalue="3">Indiferente.</option>
<optionvalue="4">Decepcionado.</option>
<optionvalue="5">Muy decepcionado.</option>
</datalist>

Progress(html5)
•Se utiliza para visualizar el progreso de una tarea. Aunque los 
detalles de cómo se muestran depende directamente del 
navegador que utiliza el cliente, aunque básicamente aparece 
una barra de progreso.
<p>Progreso de Descarga:</p>
<progressid="downloadProgress"value="75"max="100"></progress>
<br>
<labelfor="downloadProgress">75%</label>

Meter (html5) 
•Representa un valor escalar dentro de un rango conocido o 
un valor fraccionario.
<metervalue=0.5min=0max=4low=1high=3>0.5 de 4</meter>
<metervalue=3min=0max=4low=1high=3>3 de 4</meter>
<metervalue=4min=0max=4low=1high=3>4 de 4</meter>
<metervalue=61min=0max=100low=73high=87optimum=100>61</meter>