Semana 3
ISW-521 Programación en Ambiente Web I

CSS Media Queries


CSS Media Query
• Es una técnica utilizada para modificar el comportamiento y la 
apariencia de un sitio web, según las condiciones del 
dispositivo del usuario, como el tamaño de la pantalla, la 
orientación, la resolución, incluso el tipo de dispositivo 
utilizado y otras configuraciones del navegador.
• La razón principal detrás de la implementación de CSS Media 
Query es ampliar la cobertura de un sitio web en todo el 
mundo a la mayor cantidad de usuarios posible. 

Media Types CSS3
• Los tipos de
medios en CSS3
especifican el tipo
de medio o
dispositivo al que
se debe aplicar
un conjunto
particular de
estilos.


Media Query Modifiers
• Cada consulta de medios también tiene acceso a dos
modificadores u operadores lógicos específicos que le ayudan
a agregar lógica condicional a sus consultas de medios.
• Un modificador es una palabra clave única que afecta el
significado de la característica multimedia que la sigue.

Media query Modifiers
Modificador Descripción Ejemplo
not Se puede negar el resultado de una consulta de medios 
individual anteponiendo la palabra clave not. Si la 
consulta de medios normalmente se evaluaría como 
verdadera, anteponerle not hace que se evalúe como 
falsa y viceversa.
@media not print { article { padding: 
1rem 3rem; } }
only Only no tiene ningún efecto en el resultado de la consulta 
de medios, pero hará que los agentes de usuario 
heredados analicen la consulta de medios especificando 
el tipo de medio desconocido “only" y, por lo tanto, se 
ignoren
@media only screen { article { padding: 
1rem 3rem; } }
and Se utiliza para combinar varias funciones multimedia en 
una única consulta de medios.
@media screen and (min-width: 800px) { 
article { padding: 1rem 3rem; } }
, La coma permite incluir una lista de consultas de medios 
que funciona de manera similar a un operador lógico
@media screen and (min-width: 800px), 
print and (min-width: 1000px) { article
{ padding: 1rem 3rem; } }

Sintaxis CSS media query
@media screen and (min-width: 900px) {
article {
padding: 1rem 3rem;
}
}
Media 
Query 
ModifierMedia TypeRegla
Selector de CSS / 
Reglas que se aplican 
a este Media Query
Media 
Query  
Llave 
Apertura
Media 
Feature
Media 
Feature 
Value
Media 
Query  
Llave 
Cierre

Funciones de medios comunes CSS media queries
• width: ancho de la ventana gráfica, incluido el ancho de la
barra de desplazamiento. También permite el uso de los
prefijos min y max.
• height: La altura de la ventana gráfica. Acepta prefijos
mínimo y máximo.
@media (width: 800px) { ... }
@media (min-width: 360px) { ... }
@media (max-width: 1400px) { ... }
@media (height: 500px) { ... }
@media (min-height: 400px) { ... }
@media (max-height: 400px) { ... }

Funciones de medios comunes CSS media queries
• orientation: Orientación de la ventana gráfica
• display-mode: el modo de visualización de la aplicación, 
como se especifica en el manifiesto de la aplicación web
@media (orientation: portrait) { ... } 
@media (orientation: landscape) { ... }
@media (display-mode: fullscreen) { ... } 
@media (display-mode: standalone) { ... } 
@media (display-mode: minimal-ui) { ... } 
@media (display-mode: browser) { ... }

Funciones de medios comunes CSS media queries
• aspect-ratio: basada en la relación de aspecto especificada,
indicada por dos números enteros positivos separados por
una barra
• color: Número de bits por componente de color del dispositivo
de salida, o cero si el dispositivo no usa color. También
permite el uso de prefijos mínimo y máximo. Ningún valor
indica que está apuntando a cualquier dispositivo de color.
@media (aspect-ratio: 16/9) { ... }
@media (color) { ... }
@media (color: 8) { ... }
@media (min-color: 8) { ... }
@media (max-color: 16) { ... }

Funciones de medios comunes CSS media queries
• grid: detecta si el dispositivo utiliza una pantalla basada en
cuadrículas (por ejemplo, un terminal basado en texto) o una
pantalla basada en mapas de bits (como la mayoría de las
computadoras, tabletas y teléfonos inteligentes modernos).
Un valor de 1 significa basado en cuadrícula, un valor de 0
significa basado en mapa de bits.
• monochrome: bits por píxel en el búfer de fotogramas
monocromáticos del dispositivo.
@media (grid: 0) { ... }
@media (grid: 1) { ... }
@media (monochrome: 0) { ... }
@media (monochrome) { ... }

Funciones de medios comunes CSS media queries
• resolution: La densidad de píxeles del dispositivo de salida.
También se puede utilizar los prefijos min y max.
@media (resolution: 72dpi) { ... }
@media (min-resolution: 300dpi) { ... }
@media (max-resolution: 150dpi) { ... }

Diseño Web Responsivo


¿Qué es el diseño responsivo? 
• Diseño web responsivo (del inglés Responsive Web Design) o RWD es un
concepto de desarrollo web que se centra en hacer que los sitios se vean y se
comporten de manera óptima en todos los dispositivos informáticos personales,
desde el escritorio hasta el móvil.
• El diseño web responsivo hace que su página web se vea bien en todos los
dispositivos.
• El diseño web responsivo no es un programa ni un JavaScript.
• Diseñando para la mejor experiencia para todos los usuarios Las páginas web se
pueden ver utilizando muchos dispositivos diferentes: computadoras de
escritorio, tabletas y teléfonos.
• Su página web debe verse bien y ser fácil de usar, independientemente del
dispositivo.

Diseño Responsivo
• Flexbox: Control de Ejes
• Flexbox es ideal para diseñar en un solo eje, ya sea horizontal o vertical. Es perfecto 
para alineaciones simples y distribuciones de espacio.
• CSS Grid: Control Total del Diseño
• CSS Grid permite diseñar en dos ejes: filas y columnas. Esto lo hace ideal para 
layouts más complejos.
• Combinar Flexbox y Grid:
• Se puede usar los dos juntos para aprovechar las fortalezas de cada uno. Usar Grid 
para el layout general y Flexbox para alinear los elementos dentro de cada grid item.
• Media Queries: Adaptabilidad en Cada Dispositivo
• Media queries para asegurar que el diseño se vea bien en cualquier pantalla. Ajusta 
los layouts Grid y Flexbox para diferentes tamaños de pantalla.

box-sizing
Content-box 
(predeterminado)
• width = 200px solo para el 
contenido
• Tamaño real = 200 + 20*2 
(padding) + 5*2 (border) = 250px
border-box
• width = 200px en total
• El contenido se ajusta automáticamente 
para incluir el padding y el border dentro 
de esos 200px.
• Tamaño real del elemento en la pantalla 
= exactamente 200px
Cómo se calcula el tamaño de 
los elementos (ancho y alto)
.elemento {
width: 200px;
padding: 20px;
border: 5px solid black;
box-sizing: content-box;
}
.elemento {
width: 200px;
padding: 20px;
border: 5px solid black;
box-sizing: border-box;
}

transform
• La propiedad CSS "transform" permite rotar, escalar, sesgar o 
trasladar un elemento. 
• Modifica el espacio de coordenadas del modelo de formato 
visual CSS.
• Enlace ejemplo

Flexbox vs Grid


CSS Grid

CSS Grid
• CSS Grid Layout (también conocido como "Grid" o "CSS Grid"), 
es un sistema de diseño bidimensional basado en cuadrículas.
• Ofrece un sistema de diseño basado en cuadrículas, con filas y 
columnas, lo que facilita el diseño de páginas web sin tener que 
utilizar elementos flotantes ni posicionamiento.

Conceptos clave de CSS Grid
• Grid Container
• Grid Item
• Grid Line
• Grid Track
• Grid Cell
• Grid Area

Grid container
• El elemento en el que se 
aplica display: grid
• Es el padre directo de todos 
los elementos de la 
cuadrícula. 
<div class="container">
<div class="item item-1"> </div>
<div class="item item-2"> </div>
<div class="item item-3"> </div>
</div>

Grid Item
• Los hijos (es decir, 
descendientes directos) de 
grid container. 
<div class="container">
<div class="item"> </div>
<div class="item">
<p class="sub-item"> </p>
</div>
<div class="item"> </div>
</div>
sub-item NO

Grid Line
• Las líneas divisorias que 
conforman la estructura de la 
grilla. 
• Pueden ser:
• verticales (“column grid lines”)
• horizontales (“row grid lines”) 
• y residir en cualquier lado de 
una fila o columna. 
Grid Line

Grid Cell
• El espacio entre dos filas 
adyacentes y dos líneas de 
cuadrícula de columnas 
adyacentes. 
• Es una única "unidad" de la 
red. 
Grid Cell

Grid Track
• El espacio entre dos líneas 
de cuadrícula adyacentes.
• Se puede pensar en ellas 
como las columnas o filas de 
la cuadrícula. 
Grid Track

Grid Area
• El espacio total rodeado por 
cuatro líneas de cuadrícula.
• Un área de cuadrícula puede 
estar compuesta por 
cualquier número de celdas 
de cuadrícula. 
Grid Area

CSS Gris Propiedades para Grid Container
● display
● grid-template-columns
● grid-template-rows
● grid-template-areas
● grid-template
● grid-column-gap
● grid-row-gap
● grid-gap
● justify-items
● align-items
● place-items
● justify-content
● align-content
● place-content
● grid-auto-columns
● grid-auto-rows
● grid-auto-flow
● grid

CSS Grid Propiedades para Grid Item
• grid-column-start
• grid-column-end
• grid-row-start
• grid-row-end
• grid-column
• grid-row
• grid-area
• justify-self
• align-self
• place-self

Flexbox

Flexbox
• El módulo Flexbox Layout (Flexible Box) tiene como objetivo
proporcionar una forma más eficiente de diseñar, alinear y distribuir
el espacio entre los elementos de un contenedor, incluso cuando su
tamaño es desconocido y/o dinámico
• El Módulo de Caja Flexible, comúnmente llamado flexbox, fue
diseñado como un modelo unidimensional de layout, y como un
método que pueda ayudar a distribuir el espacio entre los ítems de
una interfaz y mejorar las capacidades de alineación.
• El layout flex se basa en “flex-Flow directions" (en diseño normal
bloque y en línea)

Flexbox
• main axis:el eje principal de un contenedor flexible es el eje
principal a lo largo del cual se colocan los elementos flexibles
(Depende de la dirección)
• main-start | main-end: los elementos flexibles se colocan dentro
del contenedor comenzando desde el main-start hasta main-end.
• main size: es la propiedad "ancho" o "alto", la que esté en la
dimensión principal
• cross axis: el eje perpendicular al eje principal se llama eje
transversal. Su dirección depende de la dirección del eje principal.
• cross-start | cross-end: las líneas flexibles se llenan con
elementos y se colocan en el contenedor comenzando en el lado
cross-start del contenedor flexible y yendo hacia el lado cross-end.
• cross size: es el "ancho" o el "alto" que se encuentre en la
dimensión de cross

Flexbox


Flexbox Propiedades para flex container
• display
• flex-direction
• flex-wrap
• flex-flow
• justify-content
• align-items
• align-content
• gap, row-gap, column-gap

Flexbox Propiedades para flex items
• order
• flex-grow
• flex-shrink
• flex-basis
• flex
• align-self