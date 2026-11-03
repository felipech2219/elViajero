EJERCICIO PRÁCTICO · INTRODUCCIÓN A HTML  
Mi Primera Página Web 
Guía paso a paso para construir, en tres etapas progresivas, una página web que muestre los datos 
personales del estudiante. 
DURACIÓN ESTIMADA 
3 sesiones de clase 
NIVEL 
Introductorio 
HERRAMIENTAS 
Editor de texto + navegador 
LENGUAJE 
HTML5 
🎯 Objetivo general 
Al finalizar el ejercicio, el estudiante será capaz de crear una página web básica en HTML que 
muestre su información personal (nombre, primer apellido, segundo apellido, correo electrónico, 
teléfono y dirección), utilizando progresivamente etiquetas de texto, campos de formulario y 
tablas. 
DATOS QUE SE USARÁN EN LAS TRES ETAPAS  
• Nombre 
• Primer apellido 
• Segundo apellido 
• Correo electrónico 
• Teléfono 
• Dirección 
Recomendación docente: pida a cada estudiante que use sus propios datos reales (o 
datos ficticios si se prefiere por privacidad) para que el ejercicio se sienta personal y 
motive la revisión de su propio trabajo. 
REQUISITOS PREVIOS 
• Un editor de texto o de código (Bloc de notas, Notepad++, VS Code, Sublime Text, etc.) 
• Un navegador web (Chrome, Firefox, Edge, etc.) 
• Guardar los archivos con extensión .html 
 

Página 1 — Mostrar los datos con etiquetas<label> 
Objetivo de la etapa: aprender la estructura básica de un documento HTML y usar la etiqueta 
<label> para mostrar información de solo lectura. 
CONCEPTOS NUEVOS 
• <!DOCTYPE html>, <html>, <head> y <body>: la estructura mínima de toda página web. 
• <title>: el texto que aparece en la pestaña del navegador. 
• <label>: etiqueta usada normalmente para describir un dato; aquí la usaremos para mostrar 
el dato mismo. 
• <br>: salto de línea, útil para separar cada dato visualmente. 
PASOS A SEGUIR 
1. Abra su editor de texto y cree un archivo nuevo llamado pagina1.html. 
2. Escriba la estructura básica de HTML (html, head, body). 
3. Dentro de <body>, agregue un <label> por cada dato personal, seguido de un <br>. 
4. Guarde el archivo y ábralo con doble clic para verlo en el navegador. 
CÓDIGO DE EJEMPLO 
<!DOCTYPE html> 
<html lang="es"> 
<head> 
  <meta charset="UTF-8"> 
  <title>Datos Personales - Página 1</title> 
</head> 
<body> 
  <h1>Mis Datos Personales</h1> 
 
  <label>Nombre: Ana</label><br> 
  <label>Primer apellido: Rodríguez</label><br> 
  <label>Segundo apellido: Solís</label><br> 
  <label>Correo: ana.rodriguez@correo.com</label><br> 
  <label>Teléfono: 8888-8888</label><br> 
  <label>Dirección: San José, Costa Rica</label><br> 
 
</body> 
</html> 
ACTIVIDAD DEL ESTUDIANTE  
Reemplace los datos de ejemplo por sus propios datos personales y agregue un título (<h1>) con 
su nombre completo en la parte superior de la página. 
 

2Página 2 — Ingresar los datos con cajas de texto 
Objetivo de la etapa: introducir formularios HTML y cajas de texto (<input>) para que el usuario 
pueda escribir la información en lugar de solo leerla. 
CONCEPTOS NUEVOS 
• <form>: contenedor que agrupa los campos de un formulario. 
• <input type="text">: caja de texto donde el usuario escribe. 
• <input type="email"> y <input type="tel">: variantes de caja de texto pensadas para 
correo y teléfono. 
• El atributo for en <label> junto con el id del <input>: conecta la etiqueta con su caja de 
texto. 
PASOS A SEGUIR 
1. Cree un nuevo archivo llamado pagina2.html. 
2. Dentro del <body>, agregue una etiqueta <form>. 
3. Por cada dato personal, agregue un <label> y, justo después, una caja de texto <input> 
con un id distinto. 
4. Use <br><br> entre cada par etiqueta/caja para que la página se vea ordenada. 
5. Guarde y pruebe escribiendo su información en cada caja de texto. 
CÓDIGO DE EJEMPLO 
<!DOCTYPE html> 
<html lang="es"> 
<head> 
  <meta charset="UTF-8"> 
  <title>Datos Personales - Página 2</title> 
</head> 
<body> 
  <h1>Formulario de Datos Personales</h1> 
 
  <form> 
    <label for="nombre">Nombre:</label> 
    <input type="text" id="nombre" name="nombre"><br><br> 
 
    <label for="apellido1">Primer apellido:</label> 
    <input type="text" id="apellido1" name="apellido1"><br><br> 
 
    <label for="apellido2">Segundo apellido:</label> 
    <input type="text" id="apellido2" name="apellido2"><br><br> 
 
    <label for="correo">Correo:</label> 
    <input type="email" id="correo" name="correo"><br><br> 
 
    <label for="telefono">Teléfono:</label> 
    <input type="tel" id="telefono" name="telefono"><br><br> 
 

    <label for="direccion">Dirección:</label> 
    <input type="text" id="direccion" name="direccion"><br><br> 
  </form> 
 
</body> 
</html> 
Nota: en esta etapa el formulario todavía no "envía" los datos a ningún lado ni tiene 
botón de guardar; el objetivo es solo practicar la creación de cajas de texto. Eso se 
puede mencionar a los estudiantes para que no esperen que el botón haga algo por 
ahora. 
ACTIVIDAD DEL ESTUDIANTE  
Agregue un botón <button type="button">Guardar</button> al final del formulario (aunque 
todavía no tenga funcionalidad) y explique en un comentario HTML (<!-- comentario -->) qué 
cree que debería hacer ese botón en el futuro. 
 
 
 
 
 
 
 
 
 
 
 
 

Página 3 — Mostrar los datos en una tabla 
Objetivo de la etapa: aprender a estructurar información usando tablas HTML, organizando los 
datos personales en filas y columnas. 
CONCEPTOS NUEVOS 
• <table>: contenedor de la tabla. 
• <tr>: fila de la tabla (table row). 
• <th>: celda de encabezado (table header). 
• <td>: celda de datos (table data). 
• Atributo border (o CSS) para que las líneas de la tabla sean visibles. 
PASOS A SEGUIR 
1. Cree un nuevo archivo llamado pagina3.html. 
2. Agregue una etiqueta <table> dentro del <body>. 
3. Cree una primera fila (<tr>) con dos encabezados (<th>): "Dato" y "Valor". 
4. Cree una fila (<tr>) por cada dato personal, con dos celdas (<td>): el nombre del dato y 
su valor. 
5. Guarde y revise cómo se ve la tabla en el navegador. 
CÓDIGO DE EJEMPLO 
<!DOCTYPE html> 
<html lang="es"> 
<head> 
  <meta charset="UTF-8"> 
  <title>Datos Personales - Página 3</title> 
</head> 
<body> 
  <h1>Tabla de Datos Personales</h1> 
 
  <table border="1" cellpadding="8"> 
    <tr> 
      <th>Dato</th> 
      <th>Valor</th> 
    </tr> 
    <tr> 
      <td>Nombre</td> 
      <td>Ana</td> 
    </tr> 
    <tr> 
      <td>Primer apellido</td> 
      <td>Rodríguez</td> 
    </tr> 
    <tr> 
      <td>Segundo apellido</td> 
      <td>Solís</td> 
    </tr> 

    <tr> 
      <td>Correo</td> 
      <td>ana.rodriguez@correo.com</td> 
    </tr> 
    <tr> 
      <td>Teléfono</td> 
      <td>8888-8888</td> 
    </tr> 
    <tr> 
      <td>Dirección</td> 
      <td>San José, Costa Rica</td> 
    </tr> 
  </table> 
 
</body> 
</html> 
ACTIVIDAD DEL ESTUDIANTE  
Complete la tabla con sus propios datos y agregue una fila extra (por ejemplo, "Curso" o "Año") 
para practicar cómo crecer una tabla agregando filas nuevas. 
📋 Rúbrica de evaluación sugerida 
📦 Entrega final 
• Los tres archivos: pagina1.html, pagina2.html y pagina3.html. 
• Cada archivo debe abrir correctamente en el navegador con doble clic. 
• Opcional (extra): crear una cuarta página index.html con tres enlaces (<a href="...">) 
que lleven a cada una de las tres páginas. 
Ejercicio académico · Introducción a HTML · Etapas 1–3 
Criterio Página 1 
(labels) 
Página 2 
(cajas de texto) 
Página 3 
(tabla) 
Estructura HTML válida (doctype, html, head, body) 20% 15% 15% 
Uso correcto de la etiqueta principal de la etapa 30% 30% 30% 
Los 6 datos personales están presentes 30% 30% 30% 
Orden, legibilidad y presentación 20% 25% 25% 