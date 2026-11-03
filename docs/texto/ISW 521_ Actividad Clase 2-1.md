Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
Práctica #3- 
Semana 2-Clase 2: Construcción Guiada de una Página Web básica 
Objetivo 
Construir paso a paso un sitio web llamado TechEvents CR utilizando etiquetas semánticas de 
HTML5. 
I. Preparación del entorno 
1 – Crear la carpeta del proyecto 
Instrucciones 
1. Minimice Visual Studio Code si lo tiene abierto.  
2. Vaya al escritorio de Windows.  
3. Haga clic derecho sobre el escritorio o ruta que desee. 
4. Seleccione:  
Nuevo → Carpeta 
 
2 – Nombre de la carpeta 
Asigne el siguiente nombre: tech-events-cr 
 
3 – Abrir Visual Studio Code 
3.1 – Abrir la carpeta del proyecto 
3.2 – Ir al menú File 
En la esquina superior izquierda haga clic en: File 
3.3 – Seleccionar Open Folder 
3.4 – Buscar la carpeta creada 
3.5 – Abrir la carpeta 
3.6 – Confiar en la carpeta 
3.7 – Confirmar acceso 
3.8 – Verificar el Explorer 
3.9 – Revisar el panel izquierdo 
En el panel izquierdo debe aparecer: 
TECH-EVENTS-CR 
 
II. Parte – Crear el proyecto 
 
1. Seleccionar la carpeta llamada: Tech-Events-CR, que creó en el paso anterior. 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
 
2. Dentro de la carpeta crear: index.html 
 
En este archivo iniciaremos con la estructura básica HTML5 
 
2.1 Escriba la siguiente estructura básica: 
<!DOCTYPE html> 
<html lang="es"> 
<head> 
</head> 
 
<body> 
</body> 
 
</html> 
 
2.2 Dentro de <head> agregue las siguientes etiquetas: 
 
<meta charset="UTF-8"> 
<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
 
Agregue el siguiente título:  
<title>TechEvents CR | Inicio</title> 
 
Metadatos 
Agregue la siguiente meta descripción: 
<meta  
    name="description"  
    content="TechEvents CR es un sitio web informativo sobre eventos tecnológicos en Costa 
Rica."> 
 
Agregue las palabras clave: 
<meta  
    name="keywords"  
    content="eventos tecnológicos, Costa Rica, programación, inteligencia artificial, 
ciberseguridad, desarrollo web" > 
 
Agregue el autor: 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
<meta name="author" content="TechEvents CR"> 
 
Así le debería quedar esta parte: 
 
 
2.3 – Header y navegación 
Dentro de <body> agregue la etiqueta: 
<header> 
</header> 
 
Dentro del <header> agregue el siguiente texto utilizando <strong>: 
<p><strong>TechEvents CR</strong></p> 
 
Debajo del nombre agregue una etiqueta <nav>. 
<nav> 
</nav> 
 
Dentro de <nav> cree una lista no ordenada. 
<ul> 
</ul> 
 
Agregue los siguientes elementos de navegación dentro de <ul>: 
<li><a href="index.html">Inicio</a></li> 
<li><a href="eventos.html">Eventos</a></li> 
<li><a href="#sobre-plataforma">Sobre la plataforma</a></li> 
<li><a href="#contacto">Contacto</a></li> 
 
Agregue un enlace externo que abra en otra pestaña. 


Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
<li> 
    <a href="https://www.w3schools.com/html/" target="_blank"> 
        Recurso externo HTML 
    </a> 
</li> 
 
Así le debería quedar esta parte: 
 
 
2.4 Main 
Debajo del <header> agregue: 
<hr> 
 
<main> 
</main> 
 
2.5 Sección principal 
 
Dentro de <main> cree una sección con el id: 
<section id="inicio"> 
</section> 
 
Dentro de la sección agregue el siguiente encabezado: 


Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
<h1>Eventos tecnológicos en Costa Rica</h1> 
 
Agregue el siguiente párrafo: 
<p> 
    Bienvenido a <strong>TechEvents CR</strong>, una plataforma informativa para conocer 
    eventos relacionados con <em>programación, inteligencia artificial, ciberseguridad 
    y desarrollo web</em>. 
</p> 
 
2.6 Imágenes 
 
Agregue una etiqueta <figure>. 
<figure> 
</figure> 
 
Dentro de <figure> agregue la siguiente imagen: 
<img  
    src="assets/images/hero-eventos.png"  
    alt="Personas participando en un evento tecnológico" 
    width="600" 
> 
 
Debajo de la imagen agregue: 
<figcaption> 
    Comunidad tecnológica participando en actividades de aprendizaje. 
</figcaption> 
 
2.7 Texto destacado 
 
Agregue el siguiente párrafo utilizando <mark>: 
<p> 
    <mark>Próximamente:</mark> registro de usuarios, detalle de eventos y gestión completa 
    de inscripciones. 
</p> 
 
Agregue un botón: 
<button>Ver eventos</button> 
 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
Así debería estar quedando esta parte: 
 
 
2.8 Sobre la plataforma 
 
Agregue un <hr>. 
 
Cree una sección con el id: 
<section id="sobre-plataforma"> 
</section> 
 
Agregue el siguiente título: 
<h2>Sobre la plataforma</h2> 
 
Agregue el siguiente párrafo: 
<p> 
    TechEvents CR busca centralizar información sobre actividades tecnológicas relevantes 


Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
    para estudiantes, docentes, profesionales y comunidades de innovación. 
</p> 
 
Agregue el subtítulo: 
<h3>Beneficios principales</h3> 
 
Agregue la siguiente lista: 
<ul> 
    <li><strong>Organización:</strong> eventos clasificados por categoría.</li> 
    <li><strong>Accesibilidad:</strong> información disponible desde cualquier navegador.</li> 
    <li><strong>Actualización:</strong> contenido preparado para crecer con datos 
dinámicos.</li> 
    <li><strong>Aprendizaje:</strong> práctica progresiva de HTML, CSS, JavaScript y React.</li> 
</ul> 
 
Así le debe estar quedando esta parte: 
 
 
2.9 Aside 
Debajo de la sección anterior agregue: 
<aside> 
</aside> 
 
Dentro del <aside> agregue: 
<h4>Evento destacado</h4> 
 
Agregue el siguiente contenido: 


Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
<p> 
    <strong>React Summit Alajuela</strong><br> 
    Fecha: <time datetime="2026-06-15">15 de junio de 2026</time><br> 
    Cupos disponibles: <span>35</span> 
</p> 
 
Así le debe estar quedando esta parte: 
 
 
Luego del aside, va a agregar dos secciones más, así como se muestra a continuación: 
 
 
 


Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
 
 
No olvide cerrar la etiqueta <main> 
 
2.10 Footer 
Al final del documento agregue: 
<footer id="contacto"> 
</footer> 
 
Dentro del footer escriba: 
<h5>Contacto</h5> 
 
Agregue la información de contacto usando <address>: 
<address> 
    TechEvents CR<br> 
    Correo: contacto@techeventscr.com<br> 
    Alajuela, Costa Rica 
</address> 
 
2.11 Verificación 
Abra el archivo en el navegador y verifique: 
• navegación funcional,  
• imágenes cargadas,  
• estructura correcta,  
• enlaces funcionando.  
 
2.12 Uso de DevTools 
 


Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
Abra DevTools utilizando: 
F12 
 
Ingrese a la pestaña: 
Network 
 
Recargue la página y observe: 
Columna Descripción 
Name Nombre del recurso 
Status Estado HTTP 
Type Tipo de archivo 
Size Tamaño 
Time Tiempo de carga 
 
3. Dentro de la carpeta crear un nuevo archivo .html: eventos.html 
 
Así debe irse viendo el explorador de archivos 
 
 
3.1 Para el archivo de eventos se debe guiar con estas imágenes: 


Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
 


Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
 


Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
 


Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
 
 
 
4. En el navegador se debería ver algo como esto, estando en index. 


Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
 
 
5. La página de evento.html debería verse de esta manera. 
 
