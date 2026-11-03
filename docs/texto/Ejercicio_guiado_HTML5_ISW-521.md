ISW-521 Programación en Ambiente Web I · Página 1 
Ejercicio guiado: Portal semántico del Club de 
Programación 
Curso: ISW-521 Programación en Ambiente Web I · Semana 2 · Duración: 60 minutos · Modalidad: individual 
Herramientas: editor de código (VS Code), navegador y el validador del W3C (https://validator.w3.org/) 
Objetivo 
Construir, paso a paso, una página HTML5 bien formada, semántica y accesible, aplicando las etiquetas 
vistas en clase. No se usa CSS ni JavaScript: HTML solo define estructura y contenido. 
Agenda 
Tiempo Parte Contenido 
0–5 min Preparación Carpeta y archivo 
5–15 min Parte 1 Esqueleto y estructura semántica 
15–32 min Parte 2 Contenido y etiquetas de texto 
32–47 min Parte 3 Tabla y formulario accesible 
47–53 min Parte 4 Cazar el error (HTML mal formado) 
53–60 min Parte 5 Validación y entrega 
 
Preparación (5 min) 
1. Cree la carpeta club-programacion/ y dentro el archivo index.html. 
2. Cree la subcarpeta img/ y coloque una imagen cualquiera llamada logo.png. 
3. Abra index.html en el editor. Cada vez que guarde (Ctrl+S), refresque el navegador para ver el 
resultado. 
Parte 1: Esqueleto y estructura semántica (10 min) 
Paso 1.1: Estructura base 
Escriba el documento mínimo. Recuerde: todo documento requiere DOCTYPE, html, head y body. 
<!DOCTYPE html> 
<html lang="es"> 
<head> 
    <meta charset="UTF-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <title>Club de Programación UTN</title> 
</head> 
<body> 
  
</body> 
</html> 
Pregunta 1: ¿Para qué sirve <meta charset="UTF-8">? ¿Qué pasaría con las tildes si se omite? Anote su 
respuesta como comentario HTML <!-- ... -->. 

ISW-521 Programación en Ambiente Web I · Página 2 
Paso 1.2: Etiquetas semánticas 
Dentro de <body> agregue la estructura recomendada: header, navegación, contenido principal y footer. 
<header> 
    <img src="img/logo.png" alt="Logo del Club de Programación UTN" width="80"> 
    <h1>Club de Programación UTN</h1> 
</header> 
  
<nav> 
    <a href="#nosotros">Nosotros</a> 
    <a href="#actividades">Actividades</a> 
    <a href="#inscripcion">Inscripción</a> 
</nav> 
  
<main> 
    <!-- Aquí irán las secciones --> 
</main> 
  
<footer> 
    <p><small>&copy; 2026 Club de Programación UTN. Todos los derechos reservados.</small></p> 
</footer> 
Reglas a verificar: 
• Solo existe un <main> y no está dentro de header ni footer. 
• Solo hay un <h1> en la página. 
• Los atributos van entre comillas. 
• La indentación es consistente. 
Parte 2: Contenido y etiquetas de texto (17 min) 
Todo el código de esta parte va dentro de `<main>`. 
Paso 2.1: Sección "Nosotros" (5 min) 
<section id="nosotros"> 
    <h2>Sobre nosotros</h2> 
    <p> 
        Somos un grupo de estudiantes de <abbr title="Ingeniería del Software">ISW</abbr> 
        que aprende <strong>desarrollo web</strong> de forma colaborativa. 
        Nos reunimos <em>todos los jueves</em> a las <time datetime="17:00">5:00 p. m.</time> 
    </p> 
    <blockquote> 
        <p>Programar es aprender a pensar.</p> 
        <footer>— Lema del club, tomado de <cite>Manual del Programador Novato</cite></footer> 
    </blockquote> 
    <p>Para escribir HTML usamos la etiqueta <code>&lt;p&gt;</code> para párrafos.</p> 
</section> 
<hr> 
Complete usted: agregue un párrafo con al menos una palabra resaltada con <mark> y la fórmula del agua 
usando <sub> (H₂O). 
Paso 2.2: Sección "Actividades" (7 min) 
Use listas: una ordenada, una desordenada y una de definiciones. No use <br> para separar contenido. 
<section id="actividades"> 
    <h2>Actividades</h2> 
  
    <h3>Temas del semestre</h3> 
    <ul> 
        <li>HTML5 y semántica</li> 
        <li>CSS y diseño</li> 

ISW-521 Programación en Ambiente Web I · Página 3 
        <li>JavaScript básico</li> 
    </ul> 
  
    <h3>Pasos para unirse</h3> 
    <ol> 
        <li>Llenar el formulario de inscripción</li> 
        <li>Asistir a la primera reunión</li> 
        <li>Elegir un proyecto</li> 
    </ol> 
  
    <h3>Glosario</h3> 
    <dl> 
        <dt>W3C</dt> 
        <dd>Consorcio que desarrolla los estándares web.</dd> 
        <dt>Semántica</dt> 
        <dd>Uso de etiquetas que describen el propósito del contenido.</dd> 
    </dl> 
  
    <figure> 
        <img src="img/logo.png" alt="Estudiantes trabajando en equipo" width="200"> 
        <figcaption>Figura 1. Sesión de trabajo del club.</figcaption> 
    </figure> 
</section> 
Complete usted: agregue un tercer término al glosario (por ejemplo, validador) y un enlace externo con <a 
href="https://www.w3.org/" target="_blank">. 
Paso 2.3: Contenido adicional (5 min) 
Después de </section> de "Actividades" (todavía dentro de <main>), agregue: 
<article> 
    <h2>Noticia: Nuevo laboratorio</h2> 
    <p>Publicado el <time datetime="2026-03-10">10 de marzo de 2026</time>.</p> 
    <p>El club estrena espacio de trabajo en la sede central.</p> 
</article> 
  
<aside> 
    <h2>¿Sabías que...?</h2> 
    <p>HTML5 nació en 2008 como sucesor de HTML 4 y XHTML 1.1.</p> 
</aside> 
Pregunta 2: ¿Cuál es la diferencia entre <section>, <article> y <aside>? Respóndala en un comentario 
HTML. 
Parte 3: Tabla y formulario accesible (15 min) 
Paso 3.1: Tabla de horarios (6 min) 
<section id="horarios"> 
    <h2>Horarios</h2> 
    <table> 
        <caption>Horario semanal del club</caption> 
        <thead> 
            <tr> 
                <th>Día</th> 
                <th>Actividad</th> 
                <th>Hora</th> 
            </tr> 
        </thead> 
        <tbody> 
            <tr> 
                <td>Martes</td> 
                <td>Taller de HTML</td> 
                <td>5:00 p. m.</td> 
            </tr> 

ISW-521 Programación en Ambiente Web I · Página 4 
            <tr> 
                <td>Jueves</td> 
                <td>Reunión general</td> 
                <td>5:00 p. m.</td> 
            </tr> 
        </tbody> 
        <tfoot> 
            <tr> 
                <td colspan="3">Total: 2 sesiones por semana</td> 
            </tr> 
        </tfoot> 
    </table> 
</section> 
Paso 3.2: Formulario de inscripción (9 min) 
Regla de accesibilidad: cada control debe tener un `<label>` asociado, donde el for del label coincide con el 
id del input. 
<section id="inscripcion"> 
    <h2>Inscripción</h2> 
    <form action="#" method="post"> 
        <fieldset> 
            <legend>Datos personales</legend> 
  
            <label for="nombre">Nombre completo:</label> 
            <input id="nombre" name="nombre" type="text" required> 
  
            <label for="correo">Correo:</label> 
            <input id="correo" name="correo" type="email" required> 
  
            <label for="carrera">Carrera:</label> 
            <select id="carrera" name="carrera"> 
                <option value="isw">Ingeniería del Software</option> 
                <option value="iti">Ingeniería en Tecnologías de Información</option> 
            </select> 
        </fieldset> 
  
        <fieldset> 
            <legend>Intereses</legend> 
  
            <label for="lenguaje">Lenguaje favorito:</label> 
            <input id="lenguaje" name="lenguaje" list="lenguajes"> 
            <datalist id="lenguajes"> 
                <option value="JavaScript"> 
                <option value="Python"> 
                <option value="Java"> 
            </datalist> 
  
            <label for="comentarios">Comentarios:</label> 
            <textarea id="comentarios" name="comentarios" rows="4" cols="40"></textarea> 
        </fieldset> 
  
        <button type="submit">Enviar inscripción</button> 
    </form> 
</section> 
Complete usted: agregue un <details> con <summary> titulado "¿Cuánto cuesta unirse?" y una respuesta 
breve. Colóquelo debajo del formulario. 
Parte 4: Cazar el error (6 min) 
El siguiente HTML está mal formado. Cópielo en un archivo aparte llamado error.html, encuentre al 
menos 4 errores y corríjalos. 
<html> 

ISW-521 Programación en Ambiente Web I · Página 5 
<head><title>Ejemplo<head> 
<body> 
<h2>Bienvenidos</h2> 
<h1>Mi página</h1> 
<p class=inicio>Hola <strong>mundo</p></strong> 
<img src="foto.png"> 
<br><br><br> 
<body> 
</html> 
Pista: revise el cierre de etiquetas, el anidamiento, las comillas en atributos, la jerarquía de encabezados, el 
texto alternativo, el uso de <br> y el DOCTYPE. 
Escriba su lista de errores como comentario al inicio de error.html. 
Parte 5: Validación y entrega (7 min) 
1. Abra https://validator.w3.org/, elija Validate by File Upload y suba index.html. 
2. Corrija todos los errores (Error). Las advertencias (Warning) se revisan y se justifican si no se 
corrigen. 
3. Repita con error.html ya corregido. 
4. Entregue la carpeta comprimida club-programacion.zip con index.html, error.html y img/. 
Lista de verificación 
☐ Tiene DOCTYPE, html lang="es", head y body 
☐ Usa header, nav, main, section, article, aside y footer 
☐ Solo un <h1>; encabezados en orden lógico (h1 → h2 → h3) 
☐ Todas las etiquetas cerradas y bien anidadas 
☐ Todos los atributos entre comillas 
☐ Todas las imágenes tienen alt 
☐ Todos los controles del formulario tienen label con for/id 
☐ No hay <br> usados para separar contenido 
☐ Pasa el validador del W3C sin errores 
Rúbrica (100 puntos) 
Criterio Puntos 
Esqueleto y estructura semántica correcta 20 
Uso adecuado de etiquetas de texto, listas y figuras 20 
Tabla completa (caption, thead, tbody, tfoot) 10 
Formulario accesible (label, fieldset, legend, etc.) 20 
Corrección de errores en error.html (mínimo 4) 15 
Validación W3C sin errores 10 
Indentación y buenas prácticas 5 
 
Reto extra (si termina antes) 

ISW-521 Programación en Ambiente Web I · Página 6 
• Agregue un <video> con <source> y <track> para subtítulos. 
• Use <progress> y <meter> para mostrar el avance del club. 
• Agregue <kbd> para indicar el atajo de teclado Ctrl + S y <samp> para mostrar un mensaje de 
salida. 
Preguntas de reflexión (para cerrar) 
1. ¿Qué ventajas tiene <header> frente a <div id="header">? 
2. ¿Por qué es importante el atributo alt y la asociación label/input? 
3. ¿Qué papel cumple el validador del W3C en el desarrollo profesional? 