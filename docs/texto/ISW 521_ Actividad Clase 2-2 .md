Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
Práctica #4 
Semana 2-Clase 2: Continuación Guiada de una Página Web básica 
I. Parte: Introducción 
El laboratorio de la clase anterior llegó a HTML semántico básico, para esta versión estaremos 
agregando lo siguiente: 
● clases (class="")  
● contenedores (container)  
● estructura para layout  
● conexión con CSS externo  
 
II. Conectar archivo CSS externo 
 
1. Crear carpeta CSS 
Dentro de la carpeta principal cree una nueva carpeta llamada: css 
2. Crear archivo CSS 
Dentro de la carpeta css cree el archivo: style.css 
3. Dentro del archivo debe copiar lo siguiente: 
 
/* ========================= 
2.2 CSS BASE 
Reglas generales del sitio 
========================= */ 
 
/* Elimina márgenes y espacios automáticos del navegador */ 
* { 
    margin: 0; 
    padding: 0; 
 
    /* Hace que padding y border no aumenten el tamaño real */ 
    box-sizing: border-box; 
} 
 
/* Configuración general del documento */ 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
html { 
 
    /* Tamaño base para usar rem */ 
    font-size: 16px; 
 
    /* Hace suave el desplazamiento entre anclas */ 
    scroll-behavior: smooth; 
} 
 
/* Estilo general del sitio */ 
body { 
    font-family: Arial, Helvetica, sans-serif; 
    background-color: #f4f7fb; 
    color: #1f2937; 
 
    /* Mejora separación entre líneas */ 
    line-height: 1.6; 
 
    /* Evita que el header fijo tape contenido */ 
    padding-top: 82px; 
} 
 
/* Hace multimedia adaptable al ancho del contenedor */ 
img, 
video, 
iframe { 
    max-width: 100%; 
} 
 
/* Evita deformación y espacios extra debajo de imágenes */ 
img { 
    height: auto; 
    display: block; 
} 
 
/* Quita subrayado predeterminado */ 
a { 
    text-decoration: none; 
} 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
 
/* Muestra viñetas dentro del bloque */ 
ul { 
    list-style-position: inside; 
} 
 
/* ========================= 
UTILIDADES GENERALES 
========================= */ 
 
/* Contenedor reutilizable para centrar contenido */ 
.container { 
    width: 90%; 
 
    /* Limita el ancho máximo en pantallas grandes */ 
    max-width: 1100px; 
 
    /* Centra horizontalmente */ 
    margin: 0 auto; 
} 
 
/* Espaciado vertical general */ 
section, 
aside { 
    padding: 40px 0; 
} 
 
/* Estilo base para títulos */ 
h1, 
h2, 
h3, 
h4, 
h5, 
h6 { 
    color: #0f172a; 
    margin-bottom: 15px; 
} 
 
/* Separación entre párrafos */ 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
p { 
    margin-bottom: 15px; 
} 
 
/* ========================= 
HEADER 
========================= */ 
 
/* 
fixed: 
mantiene el encabezado visible siempre 
*/ 
.site-header { 
    background-color: #00194a; 
    color: white; 
    padding: 18px 0; 
    border-bottom: 4px solid #00b4d8; 
 
    position: fixed; 
 
    /* Lo fija en la parte superior */ 
    top: 0; 
    left: 0; 
 
    /* Ocupa todo el ancho */ 
    width: 100%; 
 
    /* 
    z-index: 
    controla qué elemento queda encima 
    */ 
    z-index: 1000; 
} 
 
/* 
overflow:hidden: 
contiene elementos con float 
*/ 
.header-content { 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
    overflow: hidden; 
} 
 
/* 
float:left: 
mueve el logo a la izquierda 
*/ 
.logo { 
    font-size: 1.4rem; 
    margin-bottom: 0; 
    float: left; 
} 
 
/* ========================= 
NAVEGACIÓN 
========================= */ 
 
/* 
float:right: 
mueve el menú a la derecha 
*/ 
.main-nav { 
    float: right; 
} 
 
/* Quita viñetas del menú */ 
.main-nav ul { 
    list-style: none; 
} 
 
/* 
inline-block: 
permite mostrar elementos en línea 
pero con tamaño y padding 
*/ 
.main-nav li { 
    display: inline-block; 
    margin-left: 18px; 
} 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
 
.main-nav a { 
    color: white; 
    font-weight: bold; 
    padding: 8px 10px; 
    border-radius: 6px; 
 
    /* Permite tratar el enlace como bloque pequeño */ 
    display: inline-block; 
} 
 
/* Cambio visual al pasar mouse */ 
.main-nav a:hover { 
    background-color: #00b4d8; 
    color: #00194a; 
} 
 
/* ========================= 
SECCIÓN HERO 
========================= */ 
 
.hero { 
    background-color: #e0f2fe; 
    padding: 70px 0; 
} 
 
/* 
Contiene columnas creadas con float 
*/ 
.hero-content { 
    overflow: hidden; 
} 
 
/* 
Columna izquierda 
*/ 
.hero-text { 
    width: 48%; 
    float: left; 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
} 
 
.hero-text h1 { 
    font-size: 2.8rem; 
    color: #00194a; 
    margin-bottom: 20px; 
 
    /* Reduce altura entre líneas del título */ 
    line-height: 1.2; 
} 
 
.hero-text p { 
    font-size: 1.1rem; 
    color: #334155; 
    margin-bottom: 20px; 
} 
 
/* 
Etiqueta visual decorativa 
*/ 
.hero-badge { 
    display: inline-block; 
    background-color: #dbeafe; 
    color: #00194a; 
    padding: 6px 12px; 
    border-radius: 20px; 
    font-weight: bold; 
    margin-bottom: 15px; 
} 
 
/* 
Columna derecha 
*/ 
.hero-image { 
    width: 48%; 
    float: right; 
 
    background-color: white; 
    padding: 15px; 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
    border-radius: 18px; 
 
    /* Sombra para profundidad */ 
    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.08); 
} 
 
.hero-image img { 
    width: 100%; 
    border-radius: 12px; 
} 
 
.hero-image figcaption { 
    margin-top: 10px; 
    font-size: 0.9rem; 
    color: #64748b; 
    text-align: center; 
} 
 
/* 
relative: 
sirve como referencia para absolute 
*/ 
.hero-info { 
    margin-top: 25px; 
    padding: 25px 18px 18px 18px; 
    background-color: rgba(255, 255, 255, 0.7); 
    border-left: 5px solid #00b4d8; 
    border-radius: 10px; 
 
    position: relative; 
} 
 
/* 
absolute: 
ubica el elemento dentro del contenedor relative 
*/ 
.info-label { 
    position: absolute; 
 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
    /* Coordenadas dentro del contenedor */ 
    top: -12px; 
    right: 18px; 
 
    background-color: #00194a; 
    color: white; 
    padding: 4px 10px; 
    border-radius: 20px; 
    font-size: 0.75rem; 
    font-weight: bold; 
 
    /* Lo coloca encima del contenido */ 
    z-index: 2; 
} 
 
 
Ahora debe agregar también este código: 
 
 
/* ========================= 
BOTONES 
========================= */ 
 
/* 
Enlace con apariencia de botón 
*/ 
.btn-primary { 
    display: inline-block; 
    background-color: #00194a; 
    color: white; 
    padding: 12px 22px; 
    border-radius: 8px; 
    font-weight: bold; 
} 
 
.btn-primary:hover { 
    background-color: #00b4d8; 
    color: #00194a; 
} 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
 
/* 
Botón HTML real 
*/ 
.btn-secondary { 
    background-color: #00b4d8; 
    color: #00194a; 
    border: none; 
    padding: 12px 18px; 
    border-radius: 8px; 
    font-weight: bold; 
 
    /* Cambia cursor para indicar clic */ 
    cursor: pointer; 
} 
 
/* ========================= 
SECCIÓN EVENTOS 
========================= */ 
 
.events-section { 
    background-color: #f4f7fb; 
} 
 
/* 
Contiene tarjetas con float 
*/ 
.events-grid { 
    overflow: hidden; 
} 
 
/* 
float: 
permite colocar tarjetas en horizontal 
*/ 
.event-card { 
    width: 31%; 
    float: left; 
    margin-right: 3.5%; 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
 
    background-color: white; 
    border: 1px solid #dbeafe; 
    border-radius: 16px; 
 
    overflow: hidden; 
 
    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.08); 
 
    /* 
    Permite usar absolute dentro 
    */ 
    position: relative; 
} 
 
/* Quita margen en la última tarjeta */ 
.event-card:last-child { 
    margin-right: 0; 
} 
 
.event-card img { 
    width: 100%; 
    height: 220px; 
 
    /* Ajusta imagen sin deformarla */ 
    object-fit: cover; 
} 
 
/* 
Etiqueta flotante sobre la tarjeta 
*/ 
.card-label { 
    position: absolute; 
    top: 12px; 
    right: 12px; 
 
    background-color: #00194a; 
    color: white; 
    padding: 5px 10px; 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
    border-radius: 20px; 
 
    font-size: 0.75rem; 
    font-weight: bold; 
 
    z-index: 5; 
} 
 
/* 
Etiqueta visual de categoría 
*/ 
.event-category { 
    display: inline-block; 
    background-color: #dbeafe; 
    color: #00194a; 
    padding: 5px 10px; 
    border-radius: 20px; 
    font-size: 0.85rem; 
    font-weight: bold; 
} 
 
/* ========================= 
ASIDE 
========================= */ 
 
/* 
clear: 
evita conflictos con floats anteriores 
*/ 
aside { 
    background-color: #ecfeff; 
    border-top: 1px solid #bae6fd; 
    border-bottom: 1px solid #bae6fd; 
    clear: both; 
} 
 
/* ========================= 
TABLA 
========================= */ 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
 
table { 
    width: 100%; 
    border-collapse: collapse; 
    background-color: white; 
    margin-top: 20px; 
 
    /* Asegura separación de floats */ 
    clear: both; 
} 
 
th, 
td { 
    padding: 12px; 
    border: 1px solid #cbd5e1; 
    text-align: left; 
} 
 
th { 
    background-color: #00194a; 
    color: white; 
} 
 
/* Alterna colores entre filas */ 
tr:nth-child(even) { 
    background-color: #f1f5f9; 
} 
 
/* ========================= 
FOOTER 
========================= */ 
 
/* 
Se mantiene debajo de floats 
*/ 
footer { 
    background-color: #00194a; 
    color: white; 
    padding: 35px 0; 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
    text-align: center; 
    clear: both; 
} 
 
/* ========================= 
RESPONSIVE 
========================= */ 
 
/* 
Cambios para pantallas pequeñas 
*/ 
@media (max-width: 768px) { 
 
    /* 
    Elimina diseño horizontal 
    */ 
    .logo, 
    .main-nav, 
    .hero-text, 
    .hero-image, 
    .event-card { 
        float: none; 
        width: 100%; 
    } 
 
    /* 
    Menú vertical 
    */ 
    .main-nav li { 
        display: block; 
        margin: 8px 0; 
    } 
 
    /* 
    Más espacio por header más alto 
    */ 
    body { 
        padding-top: 150px; 
    } 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
} 
 
 
4. Conectar CSS al HTML, para la página index.html 
Dentro de <head> agregue: 
<link rel="stylesheet" href="css/style.css"> 
Así debería verse: 
<head> 
    <meta charset="UTF-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
 
    <link rel="stylesheet" href="css/style.css"> 
 
    <title>TechEvents CR | Inicio</title> 
</head> 
III. Agregar clases y estructura moderna 
Esta versión incluirá las siguientes clases: 
class="site-header" 
class="container" 
class="hero" 
class="hero-content" 
class="event-card" 
 
III.1. En el <header > realice lo siguiente: 
III.1.1. Reemplace: 
<header> 
por: 
<header class="site-header"> 
III.1.2. Dentro del <header> agregue: 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
<div class="container header-content"> 
 
</div> 
III.2. Mueva el logo y navegación dentro del contenedor. 
III.2.1. Navegación 
Cambie: 
<nav> 
por: 
<nav class="main-nav"> 
 
III.2.2. Logo 
Cambie: 
<p><strong>TechEvents CR</strong></p> 
por: 
<p class="logo"><strong>TechEvents CR</strong></p> 
Así le debería quedar:
 
III.2.3. Main 


Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
 <!-- Contenido principal --> 
    <main> 
        <!-- Sección hero con columnas flotantes --> 
        <section id="hero" class="hero"> 
            <div class="container hero-content"> 
                <div class="hero-text"> 
                    <span class="hero-badge">Comunidad tecnológica</span> 
 
                    <h1>Eventos tecnológicos en Costa Rica</h1> 
                    <p> 
                        Bienvenido a <strong>TechEvents CR</strong>, una 
plataforma informativa para conocer 
                        eventos relacionados con programación, inteligencia 
artificial, ciberseguridad 
                        y desarrollo web. 
                    </p> 
 
                    <a class="btn-primary" href="eventos.html"> 
                        Ver eventos 
                    </a> 
 
                    <!-- Caja relativa que contiene un elemento absoluto --> 
                    <div class="hero-info"> 
                        <span class="info-label">Nuevo</span> 
                        <p> 
                            <mark>Próximamente:</mark> registro de usuarios, 
detalle de eventos y gestión completa 
                            de inscripciones. 
                        </p> 
                        <button class="btn-secondary"> 
                            Explorar plataforma 
                        </button> 
                    </div> 
                </div> 
 
                <figure class="hero-image"> 
                    <img src="assets/images/hero-eventos.png" alt="Personas 
participando en un evento tecnológico"> 
                    <figcaption> 
                        Comunidad tecnológica participando en actividades de 
aprendizaje. 
                    </figcaption> 
                </figure> 
            </div> 
        </section> 
 
        <!-- Información general de la plataforma --> 
        <section id="sobre-plataforma"> 
            <div class="container"> 
                <h2>Sobre la plataforma</h2> 
                <p> 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
                    TechEvents CR busca centralizar información sobre actividades 
tecnológicas relevantes 
                    para estudiantes, docentes, profesionales y comunidades de 
innovación. 
                </p> 
 
                <h3>Beneficios principales</h3> 
                <ul> 
                    <li><strong>Organización:</strong> eventos clasificados por 
categoría.</li> 
                    <li><strong>Accesibilidad:</strong> información disponible 
desde cualquier navegador.</li> 
                    <li><strong>Actualización:</strong> contenido preparado para 
crecer con datos dinámicos.</li> 
                    <li><strong>Aprendizaje:</strong> práctica progresiva de 
HTML, CSS, JavaScript y React.</li> 
                </ul> 
            </div> 
        </section> 
 
        <!-- Aside informativo separado del contenido principal --> 
        <aside> 
            <h4>Evento destacado</h4> 
            <p> 
                <strong>React Summit Alajuela</strong><br> 
                Fecha: <time datetime="2026-06-15">15 de junio de 2026</time><br> 
                Cupos disponibles: <span>35</span> 
            </p> 
            <small> 
                La información mostrada es parte de un ejemplo académico. 
            </small> 
        </aside> 
 
 
IV. Bloque multimedia 
 
IV.1. Crear sección multimedia 
Debajo del <aside> agregue: 
<section> 
 
</section> 
IV.2. Agregar contenedor 
Dentro de la sección agregue: 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
<div class="container"> 
 
</div> 
IV.3. Agregar título 
<h2>Contenido multimedia</h2> 
IV.4. Agregar subtítulo de video 
<h3>Video promocional</h3> 
IV.5. Agregar video 
<video controls width="500"> 
    <source src="assets/video/promo-evento.mp4" type="video/mp4"> 
 
    Su navegador no soporta la reproducción de video. 
</video> 
IV.6. Agregar audio 
<h3>Audio de bienvenida</h3> 
 
<audio controls> 
    <source src="assets/audio/bienvenida.mp3" type="audio/mpeg"> 
 
    Su navegador no soporta la reproducción de audio. 
</audio> 
 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
Así le debe quedar esta sección:
 
V. Insertar mapa con iframe 
 
V.1. Crear nueva sección 
Debajo de la sección multimedia agregue: 
<section> 
 
</section> 
 
V.2. Agregar título 
<h2>Ubicación general</h2> 
 
V.3. Agregar párrafo 
<p> 
    Algunos eventos se realizarán en sedes universitarias, auditorios y espacios de innovación. 
</p> 
 
V.4. Agregar iframe 


Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
<iframe  
    src="https://www.google.com/maps?q=Alajuela,Costa%20Rica&output=embed" 
    width="600" 
    height="350" 
    loading="lazy" 
    title="Mapa de Alajuela Costa Rica"> 
</iframe> 
 
VI. Footer 
 <!-- Pie de página --> 
    <footer id="contacto"> 
        <h5>Contacto</h5> 
        <address> 
            TechEvents CR<br> 
            Correo: contacto@techeventscr.com<br> 
            Alajuela, Costa Rica 
        </address> 
 
        <h6>Enlaces rápidos</h6> 
        <ul> 
            <li><a href="index.html">Inicio</a></li> 
            <li><a href="eventos.html">Eventos</a></li> 
            <li><a href="https://developer.mozilla.org/es/docs/Web/HTML" 
target="_blank">MDN HTML</a></li> 
        </ul> 
 
        <p> 
            <small>&copy; 2026 TechEvents CR. Todos los derechos 
reservados.</small> 
        </p> 
    </footer> 
</body> 
 
 
5. Conectar CSS al HTML, para la página eventos.html 
Realice las modificaciones que se indican en las siguientes capturas: 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
 
 


Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
 


Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
 


Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
Revise que ese div es que el cierra en la linea 96 
 


Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
 
En la etiqueta no debe realizar ninguna modificación. 
 


Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
6. Apariencia de la página con los cambios realizados 
 
Index.html 
 
 
 
 
 


Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
Eventos.html 
 
 
 
 
