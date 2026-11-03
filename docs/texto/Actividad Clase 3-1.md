Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
Cambios en el CSS 
PARTE 1. Modernizar el Header con Flexbox 
1. Reemplazar contenedor flotante 
Versión 2-2 
.header-content { 
   overflow: hidden; 
} 
Versión 3-1 
.header-content { 
   display: flex; 
   align-items: center; 
   justify-content: space-between; 
   gap: 20px; 
} 
 
2. Eliminar float del logo, el resto en .logo queda igual 
Versión 2-2 
.logo { 
    font-size: 1.4rem; 
    margin-bottom: 0; 
    float: left; 
 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
} 
Eliminar float:left. 
y agregar: 
.logo { 
   white-space: nowrap; 
} 
 
3. Eliminar float del menú 
Versión 2-2 
.main-nav { 
   float: right; 
} 
Eliminar completamente esa regla. 
 
4. Convertir menú a Flexbox 
Versión 2-2 
.main-nav li { 
   display: inline-block; 
   margin-left: 18px; 
} 
Versión 3-1 
.main-nav ul { 
   list-style: none; 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
   display: flex; 
   align-items: center; 
   gap: 12px; 
} 
 
PARTE 2. Agregar soporte para menú móvil 
Agregar: 
.menu-toggle { 
   display: none; 
} 
 
.menu-button { 
   display: none; 
   width: 38px; 
   height: 32px; 
   cursor: pointer; 
} 
 
.menu-button span { 
   display: block; 
   height: 4px; 
   margin-bottom: 6px; 
   background-color: white; 
   border-radius: 4px; 
} 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
 
PARTE 3. Modernizar el Hero con Flexbox 
5. Reemplazar layout flotante 
Versión 2-2 
.hero-content { 
   overflow: hidden; 
} 
Versión 3-1 
.hero-content { 
   display: flex; 
   align-items: center; 
   gap: 40px; 
} 
 
6. Reemplazar columna izquierda 
Versión 2-2 
.hero-text { 
   width: 48%; 
   float: left; 
} 
Versión 3-1 
.hero-text { 
   flex: 1; 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
} 
 
7. Reemplazar columna derecha 
Versión 2-2 
.hero-image { 
  width: 48%; 
    float: right; 
 
    background-color: white; 
    padding: 15px; 
    border-radius: 18px; 
 
    /* Sombra para profundidad */ 
    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.08); 
} 
Versión 3-1 
.hero-image { 
    flex: 1; 
    background-color: white; 
    padding: 15px; 
    border-radius: 18px; 
    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.08); 
 
} 
 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
En resumen, eliminar: 
width: 48%; 
float: right; 
y conservar el resto de propiedades. 
 
8. Hacer título adaptable 
Versión 2-2 
.hero-text h1 { 
    font-size: 2.8rem; 
    color: #00194a; 
    margin-bottom: 20px; 
 
    /* Reduce altura entre líneas del título */ 
    line-height: 1.2; 
} 
 
Versión 3-1 
/* Título principal */ 
.hero-text h1 { 
    font-size: clamp(2rem, 5vw, 2.8rem); 
    color: #00194a; 
    margin-bottom: 20px; 
    line-height: 1.2; 
} 
 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
 
PARTE 4. Mejorar algunos estilos generales 
9. Mejorar contenedor 
Versión 2-2 
/* Contenedor reutilizable para centrar contenido */ 
.container { 
    width: 90%; 
    /* Limita el ancho máximo en pantallas grandes */ 
    max-width: 1100px; 
    /* Centra horizontalmente */ 
    margin: 0 auto; 
} 
 
Versión 3-1 
/* Contenedor centrado reutilizable */ 
.container { 
    width: min(90%, 1100px); 
    margin: 0 auto; 
} 
 
 
10. Aumentar espaciado general 
Versión 2-2 
section, 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
aside { 
   padding: 40px 0; 
} 
Versión 3-1 
section, 
aside { 
   padding: 48px 0; 
} 
 
11. Ajustar espacio del body 
Versión 2-2 
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
 
Versión 3-1 
/* Estilo general del sitio */ 
body { 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
    font-family: Arial, Helvetica, sans-serif; 
    background-color: #f4f7fb; 
    color: #1f2937; 
    line-height: 1.6; 
 
    /* *** Espacio para que el header fixed no tape el contenido */ 
    padding-top: 88px; 
} 
 
PARTE 5. Modernizar eventos con CSS Grid 
12. Reemplazar contenedor de floats 
Versión 2-2 
.events-grid { 
   overflow: hidden; 
} 
Versión 3-1 
.events-grid { 
   display: grid; 
   grid-template-columns: 
       repeat(auto-fit, minmax(260px, 1fr)); 
   gap: 28px; 
   align-items: stretch; 
} 
 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
13. Eliminar propiedades de float de la tarjeta 
Versión 2-2 
.event-card { 
   width: 31%; 
   float: left; 
   margin-right: 3.5%; 
} 
Eliminar: 
width: 31%; 
float: left; 
margin-right: 3.5%; 
El resto de propiedades permanecen iguales. 
 
 
14. Eliminar corrección de última tarjeta 
Eliminar: 
.event-card:last-child { 
   margin-right: 0; 
} 
 
15. Convertir la tarjeta de evento a Flexbox interno 
Agregar dentro de .event-card: 
display: flex; 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
flex-direction: column; 
para permitir que el contenido crezca verticalmente. 
 
 
16. Agregar contenedor de contenido 
.event-card-content { 
   padding: 20px; 
   flex: 1; 
} 
17. Mejorar separación del figcaption 
.event-card figcaption { 
   padding: 10px 16px 0 16px; 
} 
 
 
PARTE 6. Mejorar Aside 
Agregar: 
aside p, 
aside small, 
aside h2, 
aside h4 { 
   width: min(90%, 1100px); 
   margin-left: auto; 
   margin-right: auto; 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
} 
 
PARTE 7. Crear tabla responsiva 
18. Agregar contenedor responsive 
Nueva clase: 
.table-responsive { 
   width: 100%; 
   overflow-x: auto; 
   border-radius: 14px; 
   box-shadow: 0 8px 20px rgba(15,23,42,.08); 
} 
 
19. Mejorar tabla 
Versión 2-2 
 
table { 
    width: 100%; 
    border-collapse: collapse; 
    background-color: white; 
    margin-top: 20px; 
 
    /* Asegura separación de floats */ 
    clear: both; 
} 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
 
Versión 3-1 
 
/* *** Tabla limpia, legible y adaptable */ 
table { 
    width: 100%; 
    border-collapse: collapse; 
    background-color: white; 
    min-width: 650px; 
} 
 
20. Mejorar filas 
Agregar: 
tbody tr:hover { 
   background-color: #e0f2fe; 
} 
 
PARTE 8. Responsive avanzado 
21. Eliminar responsive basado en floats 
Eliminar: 
.logo, 
.main-nav, 
.hero-text, 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
.hero-image, 
.event-card { 
   float: none; 
   width: 100%; 
} 
porque Flexbox y Grid manejarán la adaptación. 
Eliminar responsive basado en floats 
.main-nav li { 
   display: block; 
   margin: 8px 0; 
} 
porque eso también existía dentro del media query de 2-2 y desaparece en 3-1. 
 
21. Reemplazar media query única 
Versión 2-2 
@media (max-width:768px) 
Versión 3-1 
Crear tres niveles: 
 
/* ========================= 
MEDIA QUERY TABLET 
========================= */ 
 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
/* *** Ajustes para pantallas medianas */ 
@media (max-width: 900px) { 
    body { 
        padding-top: 86px; 
    } 
 
    /* *** Hero pasa de dos columnas a una columna */ 
    .hero-content { 
        flex-direction: column; 
        align-items: flex-start; 
    } 
 
    .hero-text, 
    .hero-image { 
        width: 100%; 
    } 
 
    .hero-image { 
        max-width: 650px; 
    } 
 
    /* *** Menú todavía visible, pero con menos separación */ 
    .main-nav ul { 
        gap: 6px; 
    } 
 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
    .main-nav a { 
        font-size: 0.9rem; 
        padding: 7px 8px; 
    } 
} 
 
/* ========================= 
MEDIA QUERY MÓVIL 
========================= */ 
 
/* *** Ajustes para pantallas pequeñas */ 
@media (max-width: 700px) { 
    body { 
        padding-top: 78px; 
    } 
 
    .site-header { 
        padding: 14px 0; 
    } 
 
    .header-content { 
        position: relative; 
    } 
 
    /* *** Muestra el botón hamburguesa */ 
    .menu-button { 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
        display: block; 
    } 
 
    /* *** Menú oculto inicialmente */ 
    .main-nav { 
        display: none; 
        position: absolute; 
        top: 52px; 
        left: 0; 
        width: 100%; 
 
        background-color: #00194a; 
        border-top: 1px solid #00b4d8; 
        padding: 14px; 
        border-radius: 0 0 12px 12px; 
 
        z-index: 999; 
    } 
 
    /* *** Cuando el checkbox está activo, se muestra el menú */ 
    .menu-toggle:checked~.main-nav { 
        display: block; 
    } 
 
    /* *** Menú vertical en móvil */ 
    .main-nav ul { 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
        display: flex; 
        flex-direction: column; 
        align-items: stretch; 
        gap: 8px; 
    } 
 
    .main-nav a { 
        display: block; 
        padding: 12px; 
        background-color: rgba(255, 255, 255, 0.08); 
    } 
 
    .hero { 
        padding: 48px 0; 
    } 
 
    .hero-text h1 { 
        font-size: 2rem; 
    } 
 
    .events-grid { 
        grid-template-columns: 1fr; 
    } 
 
    .event-card img { 
        height: 200px; 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
    } 
 
    /* *** La tabla cambia a formato tarjeta en móvil */ 
    .table-responsive { 
        overflow-x: visible; 
        box-shadow: none; 
    } 
 
    table { 
        min-width: 0; 
        border-collapse: separate; 
        border-spacing: 0 14px; 
        background-color: transparent; 
    } 
 
    thead { 
        display: none; 
    } 
 
    tbody, 
    tr, 
    td { 
        display: block; 
        width: 100%; 
    } 
 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
    tr { 
        background-color: white; 
        border: 1px solid #dbeafe; 
        border-radius: 14px; 
        padding: 12px; 
        box-shadow: 0 6px 16px rgba(15, 23, 42, 0.08); 
    } 
 
    td { 
        border-bottom: 1px solid #e2e8f0; 
        padding: 10px 8px; 
    } 
 
    td:last-child { 
        border-bottom: none; 
    } 
 
    /* *** Muestra el nombre de cada columna antes del valor */ 
    td::before { 
        content: attr(data-label); 
        display: block; 
        font-weight: bold; 
        color: #00194a; 
        margin-bottom: 4px; 
    } 
 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
    /* *** Resalta visualmente el nombre del evento en móvil */ 
    td[data-label="Evento"] { 
        color: #00194a; 
        font-weight: bold; 
        font-size: 1rem; 
        background-color: #dbeafe; 
        padding: 12px; 
        border-radius: 8px; 
        margin-bottom: 8px; 
    } 
} 
 
/* ========================= 
MEDIA QUERY MÓVIL PEQUEÑO 
========================= */ 
 
/* *** Ajustes para teléfonos angostos */ 
@media (max-width: 420px) { 
    .logo { 
        font-size: 1.15rem; 
    } 
 
    .hero-text h1 { 
        font-size: 1.75rem; 
    } 
 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
    .btn-primary, 
    .btn-secondary { 
        width: 100%; 
        text-align: center; 
    } 
 
    .event-card-content { 
        padding: 18px; 
    } 
 
    .card-label { 
        font-size: 0.7rem; 
        right: 8px; 
    } 
} 
 
Index.html 
Así debería quedar, en esta versión 3-1: 
 

Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
 


Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
 


Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
 


Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
 


Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
 
 
 
Eventos.html 


Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
Así debería estar: 
 


Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
 
 


Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
 


Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
 


Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
 


Carrera Ingeniería del Software – Sede Central 
Curso: Programación Ambiente Web I        
 
 
