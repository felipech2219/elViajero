10/1/26, 5:25 PM Laboratorio guiado de CSS: Café V olcán 
 1/8 
ISW-521 Programación en Ambiente Web I · Semana 2 · Clase 2 
Laboratorio guiado: construyendo la página de Café 
Volcán 
Duración: 60 minutos · Modalidad: individual, con apoyo del docente · Herramientas: VS 
Code (o similar), navegador con DevTools (F12) 


10/1/26, 5:25 PM Laboratorio guiado de CSS: Café V olcán 
 2/8  
  <meta charset 
UTF 
8 
> 
  <title>Café Volcán</title> 
  <link rel="stylesheet" href="styles.css"> 
< 
/head 
> 
< 
body 
> 
  <header class="encabezado"> 
    <h1 id="logo">Café Volcán</h1> 
    <nav class="menu"> 
      <a href="#menu">Menú</a> 
      <a href="#nosotros">Nosotros</a> 
      <a href="#contacto">Contacto</a> 
    </nav> 
  </header> 
  <main> 
    <section class="hero"> 
      <h2>Café de altura, tostado en Alajuela</h2> 
      <p>Granos de origen único preparados cada mañana.</p> 
      <button class="boton">Ver el menú</button> 
    </section> 
    <section id="menu"> 
      <h2>Nuestro menú</h2> 
      <div class="tarjetas"> 
        <article class="tarjeta"><h3>Espresso</h3><p>Intenso y corto.</p><span c 
        <article class="tarjeta"><h3>Capuchino</h3><p>Espuma cremosa.</p><span c 
        <article class="tarjeta"><h3>Cold brew</h3><p>Infusionado 12 horas.</p>< 
      </div> 
    </section> 
    <section id="nosotros" class="nosotros"> 
      <article class="historia"><h2>Nuestra historia</h2><p>Empezamos con un tos 
      <aside class="horario"><h3>Horario</h3><p>Lunes a sábado, 7 a. m. a 6 p. m 
    </section> 
  </main> 
  <footer id="contacto"><p class="copyright">© 2026 Café Volcán</p></footer> 
< 
/body 
> 
< 
/html 
> 
 
  
  
 
  
 
  
 
  
 
 
 
  
index.html 
  
 
 
  
 
 
  
 
 
 
  
 
 
 
  
 
  
 
 
 
  
 
 
 
  
 
 
 
  
 
 
 
 
  
 
  
 
 
 
 
  
 
 
  
 
 
  
 
 
  
 
  
 
 
 
 
 
  
 
 
 
  
 
 
 
  
 
 
 
 
 
  
 
 
 
  
 
  
 
 
  
 
  
  
  
 
En  
styles.css 
, agrega primero un comentario y los estilos base. Recuerda: tamaños de 
fuente 
en 
rem 
nunca 
en 
px 

10/1/26, 5:25 PM Laboratorio guiado de CSS: Café V olcán 
 3/8  
fuente en  
rem 
, nunca en  
px 
. 
/* ===== Café Volcán: estilos base ===== */ 
html { font-size: 100%; } 
body { font-family: Arial, sans-serif; color: #2b2118; background-color: #faf6f0 
h1 { font-size: 2rem; }          /* etiqueta */ 
.encabezado { background-color: rgb(43, 33, 24); }  /* clase, valor RGB */ 
#logo { color: #f4a259; }        /* id, valor HEX */ 
.menu a { color: white; text-decoration: none; }    /* descendiente */ 
.menu a:hover { color: #f4a259; }                   /* interacción */ 
.boton:focus { outline: 3px solid #000; outline-offset: 2px; } 
.hero > p { font-size: 1.2rem; }                    /* hijo directo */ 
 
 
 
 
  
 
  
  
 
Con un selector de  
hermano adyacente 
 ( 
+ 
) 
, cambia el color de la primera etiqueta 
p 
 que sigue a cada  
h3 
. 
Escribe una regla con  
a:active 
 para que el enlace cambie de color al hacer clic. 
Elige un nombre de color (por ejemplo  
tomato 
) 
 y conviértelo a RGB y HEX usando 
DevTools (clic en el cuadrito de color). 
 
  
  
 
  
 
  
 
  
 
 
  
 
 
  
 
 
 
  
 
 
  
 
 
 
 
  
 
 
  
 
 
 
  
 
 
  
 
 
 
 
 
 
  
 
  
 
  
 
 
  
 
  
 
 
 
 
  
 
 
 
 
 
 
 
  
 
 
  
  
 
 
  
 
 
 
  
 
 
  
 
 
  
 
 
  
#logo 
  
 
 
  
 
  
 
  
 
  
.menu 
  
 
 
  
 
 
 
 
 
 
 
 
 
  
 
 
 
  
 
 
 
  
 
 
 
  
 
  
  
  
  
 
*, *::before, *::after { box-sizing: border-box; } 
.encabezado { padding: 1em 1.5em; } 
.hero { padding: 3em 1.5em; text-align: center; background-color: #f4e3cf; } 
.boton { 
  background-color: #2b2118; color: white; 
  padding: 0.6em 1.2em; border: 2px solid #f4a259; font-size: 1rem; 
} 
.tarjeta { 
  background-color: white; 
  padding: 1em; 
  border: 1px solid #d8c8b4; 
  margin: 0.5rem 0; 
} 

10/1/26, 5:25 PM Laboratorio guiado de CSS: Café V olcán 
 4/8 
 


10/1/26, 5:25 PM Laboratorio guiado de CSS: Café V olcán 
 5/8 
Regla de oro: en Flexbox todo depende del eje principal, y este depende de flex 

10/1/26, 5:25 PM Laboratorio guiado de CSS: Café V olcán 
 6/8 
 
direction 
 
 
 
 
  
 
 
 
  
 
 
 
  
 
  
 
 
  
 
 
 
  
 
 
 
 
 
  
 
 
 
.tarjetas { 
  display: grid; 
  grid-template-columns: repeat(3, 1fr);  /* igual a 1fr 1fr 1fr */ 
  gap: 1rem; 
} 
.nosotros { 
  display: grid; 
  grid-template-columns: 2fr 1fr; 
  gap: 1.5rem; 
  padding: 2em 1.5em; 
} 
 
 
 
 
  
 
  
  
 
Si  
.tarjetas 
 mide 900 px y usa  
repeat(3, 1fr) 
, ¿cuánto mide cada columna sin 
contar el gap? Verifícalo en DevTools. 
Prueba  
auto auto auto 
 en lugar de  
repeat(3, 1fr) 
. ¿Qué cambia cuando una 
tarjeta tiene más texto? Vuelve a  
repeat 
. 
Cambia  
gap 
 por  
row-gap: 2rem; column-gap: 0.5rem; 
 y describe la diferencia. 
Agrega una cuarta tarjeta (copia una existente). ¿Dónde se ubica? ¿Qué hizo el grid por 
ti? 
 
  
  
 
  
 
  
 
  
 
 
 
  
 
 
 
 
 
 
 
  
 
 
  
 
 
 
  
 
 
  
  
 
 
  
 
 
  
 
  
 
  
 
 
 
 
  
 
 
  
 
 
 
 
 
  
 
  
 
 
 
 
  
 
 
  
 
 
 
 
 
 
 
 
 
 
 
 
  
 
 
 
  
 
 
 
  
 
 
 
 
 
  
  
 
 
  
 
 
  
 
  
 
 
 
  
 
  
 
Paso 1. 
 Reduce la ventana del navegador o activa el modo dispositivo (Ctrl+Shift+M). Las 
tarjetas se aprietan. Ahora agrega, dentro del  
< 
head 
> 
 de  
index.html 
, la etiqueta que 
faltaba: 
< 
meta name="viewport" content="width=device-width, initial-scale=1.0" 
> 

10/1/26, 5:25 PM Laboratorio guiado de CSS: Café V olcán 
 7/8 
 
Paso 2. 
 Cambia las reglas de Grid para que el diseño base sea el de móvil (una columna) y las 
columnas aparezcan en pantallas más anchas. Reemplaza  
grid-template-columns 
 en 
.tarjetas 
 y  
.nosotros 
 por una sola columna y agrega al final del CSS: 
.tarjetas { grid-template-columns: 1fr; } 
.nosotros { grid-template-columns: 1fr; } 
.encabezado { flex-direction: column; gap: 0.5rem; } 
@media (min-width: 768px) {          /* tablet o mayor */ 
  .tarjetas { grid-template-columns: repeat(3, 1fr); } 
  .nosotros { grid-template-columns: 2fr 1fr; } 
  .encabezado { flex-direction: row; } 
  h1 { font-size: 2.5rem; } 
} 
@media (min-width: 992px) {          /* laptop o mayor */ 
  .hero { padding: 5em 1.5em; } 
} 
 
 
 
 
  
 
  
  
 
Agrega un breakpoint a 480 px con  
max-width 
 que oculte el enlace "Contacto" del 
menú ( 
display: none 
) 
. Explica con tus palabras la diferencia entre  
max-width 
 y 
min-width 
. 
Haz que  
.hero 
 ocupe al menos la mitad de la altura de la pantalla con  
min-height: 
50 
vh 
. 
Prueba el sitio en tres tamaños en DevTools: 375 px, 768 px y 1200 px. 
 
  
  
 
  
 
  
 
  
 
  
  
  
 
  
 
 
 
  
 
 
  
 
  
 
  
 
  
 
 
 
  
 
 
 
 
 
 
 
  
 
  
  
  
 
 
  
 
 
 
  
 
  
 
 
  
 
 
 
 
  
 
 
  
 
 
 
 
 
 
 
  
 
 
 
  
 
 
 
  
 
 
 
 
 
  
 
  
 
  
  
Lista de verificación: 
 
 CSS en archivo externo, con al menos 3 comentarios  
/* */ 
. 
 
 Usé selectores de etiqueta, clase, id, descendiente e interacción ( 
: 
hover 
,  
: 
focus 
). 
 
 Tamaños de fuente en  
rem 
; bordes en  
px 
; anchos máximos en  
em 
. 
 
 Flexbox en el encabezado y Grid en tarjetas y sección "Nosotros". 
 
 Viewport y al menos un media query con enfoque mobile first. 

10/1/26, 5:25 PM Laboratorio guiado de CSS: Café V olcán 
 8/8 
 
 
Preguntas de reflexión (responde en un comentario al final de tu CSS): 
1 
.  
¿Cuándo usarías Flexbox y cuándo Grid en un mismo proyecto? 
2 
.  
¿Por qué no es recomendable usar CSS embebido (atributo  
style 
) 
 salvo casos muy 
específicos? 
3 
.  
¿Qué pasaría en móvil si olvidaras la etiqueta viewport? 
Entrega: 
 comprime la carpeta  
cafe-volcan 
 y súbela a la plataforma del curso. 
 
 
 
 
 
  
  
  
  
 
 
 
 
 
 
 
 
 
  
  
 
 
 
 
 
 
  
 
 
 
 
 
 
 
 
  
 
  
 
 
 
 
 
 
 
  
 
 
 
 
 
 
 
  
 
  
  
  
 
  
 
 
 
 
  
 
 
 
 
 
 
  
 
 
 
 
  
 
  
  
 
  
 
  
 
  
 
  
  
 
  
 
  
 
 
 
 
 
 
  
 
 
 
 
  
 
 
 
 
 
 
 
 
  
 
 
 
 
 
  
 
 
  
 
 
  
 
 
 
  
  
 
  
 
  
  
 
 
 
 
 
 
  
 
 
  
 
 
 
 
  
 
  
 
 
 
 
 
 
 
  
 
 
 
 
 
  
 
 
 
 
 
Agrega  
position: sticky; top: 0; z-index: 10; 
 al encabezado y un  
position: fixed 
para un botón "Subir" en la esquina inferior derecha. Explica qué hace  
z-index 
. 