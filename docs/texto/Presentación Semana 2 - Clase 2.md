--- ppt/slideLayouts/slideLayout1.xml ---
 Haga clic para modificar el estilo de título del patrón Haga clic para modificar el estilo de subtítulo del patrón 24/2/2026 ‹Nº› 

--- ppt/slideLayouts/slideLayout10.xml ---
 Haga clic para modificar el estilo de título del patrón Haga clic para modificar los estilos de texto del patrón Segundo nivel Tercer nivel Cuarto nivel Quinto nivel 24/2/2026 ‹Nº› 

--- ppt/slideLayouts/slideLayout11.xml ---
 Haga clic para modificar el estilo de título del patrón Haga clic para modificar los estilos de texto del patrón Segundo nivel Tercer nivel Cuarto nivel Quinto nivel 24/2/2026 ‹Nº› 

--- ppt/slideLayouts/slideLayout2.xml ---
 Haga clic para modificar el estilo de título del patrón Haga clic para modificar los estilos de texto del patrón Segundo nivel Tercer nivel Cuarto nivel Quinto nivel 24/2/2026 ‹Nº› 

--- ppt/slideLayouts/slideLayout3.xml ---
 Haga clic para modificar el estilo de título del patrón Haga clic para modificar los estilos de texto del patrón 24/2/2026 ‹Nº› 

--- ppt/slideLayouts/slideLayout4.xml ---
 Haga clic para modificar el estilo de título del patrón Haga clic para modificar los estilos de texto del patrón Segundo nivel Tercer nivel Cuarto nivel Quinto nivel Haga clic para modificar los estilos de texto del patrón Segundo nivel Tercer nivel Cuarto nivel Quinto nivel 24/2/2026 ‹Nº› 

--- ppt/slideLayouts/slideLayout5.xml ---
 Haga clic para modificar el estilo de título del patrón Haga clic para modificar los estilos de texto del patrón Haga clic para modificar los estilos de texto del patrón Segundo nivel Tercer nivel Cuarto nivel Quinto nivel Haga clic para modificar los estilos de texto del patrón Haga clic para modificar los estilos de texto del patrón Segundo nivel Tercer nivel Cuarto nivel Quinto nivel 24/2/2026 ‹Nº› 

--- ppt/slideLayouts/slideLayout6.xml ---
 Haga clic para modificar el estilo de título del patrón 24/2/2026 ‹Nº› 

--- ppt/slideLayouts/slideLayout7.xml ---
 24/2/2026 ‹Nº› 

--- ppt/slideLayouts/slideLayout8.xml ---
 Haga clic para modificar el estilo de título del patrón Haga clic para modificar los estilos de texto del patrón Segundo nivel Tercer nivel Cuarto nivel Quinto nivel Haga clic para modificar los estilos de texto del patrón 24/2/2026 ‹Nº› 

--- ppt/slideLayouts/slideLayout9.xml ---
 Haga clic para modificar el estilo de título del patrón Haga clic en el icono para agregar una imagen Haga clic para modificar los estilos de texto del patrón 24/2/2026 ‹Nº› 

--- ppt/slideMasters/slideMaster1.xml ---
 Haga clic para modificar el estilo de título del patrón Haga clic para modificar los estilos de texto del patrón Segundo nivel Tercer nivel Cuarto nivel Quinto nivel 24/2/2026 ‹Nº› 

--- ppt/slides/slide1.xml ---
 Semana 2 ISW-521 Programación en Ambiente Web I 

--- ppt/slides/slide10.xml ---
 Estructura CSS Selector : El selector es el elemento HTML que se específica del documento para aplicarle un estilo concreto. Propiedad : La propiedad es una de las diferentes características que brinda el lenguaje CSS Valor : Cada propiedad CSS tiene una serie de valores concretos, con los que tendrá uno u otro comportamiento. 

--- ppt/slides/slide11.xml ---
 Estructura CSS 

--- ppt/slides/slide12.xml ---
 ¿Qué es un selector? Un selector indica qué elemento HTML será estilizado. Ejemplo: p { color: blue; } Selector → p Propiedad → color Valor → blue 

--- ppt/slides/slide13.xml ---
 Tipos de selectores 1️⃣ Por etiqueta h1 { } 2️⃣ Por clase . miClase { } 3️⃣ Por id #miId { } 4️⃣ Descendentes div p { } Clase: Se puede repetir. Se usa para estilos reutilizables. ID: Es único. Se usa para elementos específicos. 

--- ppt/slides/slide14.xml ---
 Selectores {00A15C55-8517-42AA-B614-E9B94910E393} Tag . — Class # — ID Selecciona todas las etiquetas del mismo tipo. Selecciona un elemento que tenga la clase. Selecciona un elemento que tenga el ID. html {} h1 {} p {} .encabezado {} .navega {} .contacto {} #linea-1 {} # github {} #top {} {00A15C55-8517-42AA-B614-E9B94910E393} Espacio— Descendiente &gt; — Hijo + — Hermano adyacente Seleccione un elemento que sea descendiente de otro elemento. Selecciona un elemento que tenga la clase. Seleccione un elemento inmediatamente al lado de otro elemento. ul li {} nav a {} ul li {} ul &gt; li {} h1 &gt; span {} footer &gt; .copyright {} h1 + p {} hr + p {} li + li {} 

--- ppt/slides/slide15.xml ---
 Selectores de interacción {00A15C55-8517-42AA-B614-E9B94910E393} :link : visited : hover Para diseñar un enlace que no se ha visitado. Para diseñar un enlace que se ha visitado. Para el estilo de un elemento cuando el ratón se cierne sobre él. a:link { color: #4484c2; } a:visited { color: #ccc; } a:hover { color: #00f; } {00A15C55-8517-42AA-B614-E9B94910E393} : focus :active Para estilizar un elemento para cuando el teclado lo enfoca. Sólo funciona en &lt;a&gt; , &lt; button &gt; y inputs del form por defecto. Para estilizar un elemento cuando se hace clic en el botón del ratón. button:focus { outline : 3px solid #000; outline -offset: 2px; } a:active { color: #f33; } 

--- ppt/slides/slide16.xml ---
 Propiedades básicas color background -color font-size text-align border margin padding Ejemplo: h1 { color: white ; background -color: black ; padding : 10px; } 

--- ppt/slides/slide17.xml ---
 Unidades {7DF18680-E054-41AD-8BC1-D1AEF772440D} px em Píxeles CSS -diferentes tamaños para cada dispositivo. 100px es exactamente 100 píxeles en todas las situaciones. Basado en el font-size del padre (o elemento actual). 1em es 1 × el tamaño del elemento padre. 0.5em es 0.5 × el tamaño del elemento padre. {00A15C55-8517-42AA-B614-E9B94910E393} rem % Basado en el tamaño de fuente establecido en el elemento html . 1.5rem es 1.5 × el tamaño de fuente del elemento html . Porcentaje Un porcentaje del elemento padre. 100% es a todo el ancho del elemento padre. Si el elemento padre es 50% ancho, y este elemento es 50% ancho, entonces sólo ocupa el 25% del elemento primario original. 

--- ppt/slides/slide18.xml ---
 Reglas de uso de unidades Use em para anchos máximos Los anchos máximos requerían una medición fija, de modo que para trabajos de max-width , porque queremos que el max-width aumente a medida que aumenta el tamaño de la fuente. Utilice px para los bordes y la precisión Utilice píxeles para la precisión, cuando las cosas siempre deben tener el mismo tamaño: logotipos como ejemplo. O utilizar píxeles para los bordes. No se debería usar px para tamaños de fuente. 

--- ppt/slides/slide19.xml ---
 Reglas de uso de unidades Use rem para font-size Siempre use rem para tamaños de fuente porque es más fácil de manejar. No se debería usar px para tamaños de fuente. Use rem o em para rellenos y márgenes La idea es que queremos que los márgenes y rellenos aumenten cuando aumenta el tamaño de la fuente. Lo más a menudo uso em para padding y rem para margin Utilice % para anchos La mayoría de las veces usa % para anchos porque queremos que la mayoría de las cosas sean flexibles. A veces, el uso de px o em para anchos está bien también. 

--- ppt/slides/slide2.xml ---
 Introducción a CSS 

--- ppt/slides/slide20.xml ---
 Colores HTML En HTML, se puede especificar un color utilizando un nombre de color, un valor RGB o un valor HEX Nombres de color En HTML, se puede especificar un color utilizando un nombre de color Valor RGB En HTML, también se puede especificar un color como un valor RGB, usando esta fórmula: rgb (rojo, verde, azul) Cada parámetro (rojo, verde y azul) define la intensidad del color entre 0 y 255. Valor HEX En HTML, también se puede especificar un color con un valor hexadecimal en la forma: #RRGGBB, donde RR (rojo), GG (verde) y BB (azul) son valores hexadecimales entre 00 y FF (igual que 0-255) . 

--- ppt/slides/slide21.xml ---
 Modelo de Cajas 

--- ppt/slides/slide22.xml ---
 ¿Qué es el Box Model ? Todo elemento HTML es una caja compuesta por: Content Padding Border Margin 

--- ppt/slides/slide23.xml ---
 Modelo de caja CSS Margen Border Padding Content El margen es transparente y se sienta en el borde más exterior de una caja, proporcionando un espacio entre la caja y otras cajas en el documento. El borde rodea la propia caja. Un borde puede ser transparente, o puede ser de color y tienen un patrón como una línea discontinua.. El padding (relleno) es el espacio entre el borde de la caja y su contenido y generalmente toma en el mismo color que el color de fondo de la caja. . El contenido es todo lo que se muestra en el cuadro, como texto e imágenes. Utiliza el borde, márgenes, el padding , la altura, la anchura y las propiedades CSS para modificar las diversas partes del modelo de caja. style.visibility style.visibility style.visibility style.visibility 

--- ppt/slides/slide24.xml ---
 Modelo de caja CS La relación padre / hijo es importante entenderla cuando se trabaja con el CSS. En esencia, un cuadro padre puede contener una o más casillas. Las cajas contenidas dentro de una caja de padre se conocen como cajas hijo. Un hijo puede heredar los estilos CSS de un padre, lo que significa estilos aplicados a un padre también se aplican a un hijo. No todas las propiedades CSS son heredables; al aplicar estilos, es necesario comprobar la especificación CSS para determinar la herencia de propiedades Parent Box Child Box 

--- ppt/slides/slide25.xml ---
 Gestión de Flujo de contenido Block Inline Inline -Block Display Controla cómo se representa un elemento dentro del flujo. 

--- ppt/slides/slide26.xml ---
 Gestión de Flujo de contenido Múltiples floats Float : left | right | none Float Controla si el texto se envuelve alrededor del elemento. clear : left|right|both 

--- ppt/slides/slide27.xml ---
 Gestión de Flujo de contenido position: absolute Mover un elemento en torno a las coordenadas. Posicionamiento Proporciona un control estricto basado en coordenadas sobre el diseño. position: relative Se agrega a un elemento padre para restablecer las coordenadas absolutas del hijo. position: fixed Obliga a un elemento a no moverse cuando se desplaza la página. z- index Controle el orden de apilamiento de los elementos: el número más alto está más cerca. 

--- ppt/slides/slide28.xml ---
 Gestión de desbordamiento de contenido Desplazamiento de desbordamiento ( scrolling overflow ) : Cuando un elemento se desborda de su caja, y su desbordamiento está configurado para desplazarse, todo el contenido del elemento se mantiene dentro de la caja; ninguna de las desbordamiento aparece fuera del área. overflow : scroll ; overflow : visible; overflow : hidden ; http://www.w3schools.com/cssref/pr_pos_overflow.asp 

--- ppt/slides/slide29.xml ---
 Diseño Responsivo 

--- ppt/slides/slide3.xml ---
 CSS CSS ( Cascading Style Sheets ) es el lenguaje que define el diseño visual de una página web. HTML → estructura CSS → presentación JavaScript → comportamiento 

--- ppt/slides/slide30.xml ---
 ¿Qué es diseño responsivo? Es la capacidad de un sitio web de adaptarse a distintos dispositivos: Celular Tablet Laptop Desktop 

--- ppt/slides/slide31.xml ---
 Meta Viewport &lt;meta name =" viewport " content =" width = device-width , initial-scale =1.0"&gt; Sin esto: El sitio no escala correctamente en móvil. 

--- ppt/slides/slide32.xml ---
 Media Queries @media ( max-width : 768px) { body { background -color: lightblue ; } } 

--- ppt/slides/slide33.xml ---
 Media Queries Breakpoint Breakpoint = punto de quiebre Es el ancho de pantalla en el que el diseño cambia para adaptarse al dispositivo. Ejemplos comunes: 1200px → pantallas grandes 992px → laptops 768px → tablets 480px → celulares 

--- ppt/slides/slide34.xml ---
 Media Queries ¿Qué es max-width ? @media ( max-width : 768px) { body { background -color: lightblue ; } } max-width = aplica estilos cuando la pantalla es MENOR o igual a ese valor 

--- ppt/slides/slide35.xml ---
 Media Queries ¿Qué es min- width ? @media (min- width : 768px) { body { background -color: lightgreen ; } } min- width = aplica estilos cuando la pantalla es MAYOR o igual a ese valor 

--- ppt/slides/slide36.xml ---
 Media Queries Mobile First Mobile First = diseñar primero para móvil y luego adaptar a pantallas grandes. Ejemplo: body { font-size : 14px; } @media (min- width : 768px) { body { font-size : 18px; } } 

--- ppt/slides/slide37.xml ---
 Unidades Responsivas % em rem vh Vw Ejemplo : width : 100%; font-size : 1.2rem; 

--- ppt/slides/slide38.xml ---
 Introducci ón a Flexbox 

--- ppt/slides/slide39.xml ---
 Qué es? Flexbox es un sistema de diseño en una dimensión. Trabaja en: Filas Columnas Propiedades principales .container { display : flex ; } flex-direction justify-content align-items gap 

--- ppt/slides/slide4.xml ---
 CSS3 CSS3 es la versión de CSS que corresponde a HTML5, y la mayoría de los navegadores web modernos soporta CSS3 CSS3 generalmente agrega características y funcionalidad en lugar de cambiar cómo se utiliza siempre CSS. 

--- ppt/slides/slide40.xml ---
 Ejes en Flexbox Main axis Cross axis .container { display: flex; justify-content: space-between; align-items: center; } 

--- ppt/slides/slide41.xml ---
 Cómo cambian los ejes según flex-direction 1️⃣ Primero: regla de oro En Flexbox , TODO depende del eje principal ( main axis). Y el eje principal depende de flex-direction . 2️⃣ Eje principal Cuando usamos display : flex , por defecto el eje principal es horizontal. .container { display : flex ; } Por defecto es: flex-direction : row ; Entonces: Main axis → horizontal Cross axis → vertical 

--- ppt/slides/slide42.xml ---
 Cómo cambian los ejes según flex-direction 3️⃣ Ahora cambia flex-direction .container { display : flex ; flex-direction : column ; } Ahora el eje principal cambió. Ahora: Main axis → vertical Cross axis → horizontal 

--- ppt/slides/slide43.xml ---
 Introducción a CSS Grid 

--- ppt/slides/slide44.xml ---
 ¿Qué es CSS Grid ? CSS Grid es un sistema de diseño bidimensional: Filas Columnas Conceptos básicos .container { display : grid ; grid-template-columns : 1fr 1fr 1fr ; gap: 10px; } fr (fracción) gap columnas automáticas 

--- ppt/slides/slide45.xml ---
 ¿Qué es fr en CSS Grid ? .container { display : grid ; grid-template-columns : 1fr 1fr 1fr ; } fr = fracción del espacio disponible dentro del contenedor Ejemplos grid-template-columns : 2fr 1fr; ¿Cuál será más grande? La primera ocupa el doble del espacio. Proporción 2:1 Si el contenedor mide 900px y escribo: grid-template-columns : 1fr 1fr 1fr ; Entonces: Cada columna ocupa 1/3 del espacio. Cada una mide 300px ( aprox ). 

--- ppt/slides/slide46.xml ---
 ¿Qué es gap? .container { display : grid ; gap: 10px; } gap = espacio entre filas y columnas. Otro Ejemplo: row -gap: 20px; column -gap: 10px; No es margin . No es padding . Es espacio ENTRE elementos. row -gap → espacio vertical column -gap → espacio horizontal Pero normalmente se usa solo gap. 

--- ppt/slides/slide47.xml ---
 ¿Qué son columnas automáticas? — auto grid-template-columns : auto auto auto ; auto hace que la columna tome el tamaño necesario según su contenido. Si una celda tiene más texto, esa columna puede crecer. 

--- ppt/slides/slide48.xml ---
 ¿Qué son columnas automáticas? — repeat () grid-template-columns : repeat (3, 1fr); repeat evita escribir lo mismo varias veces. Es equivalente a: 1fr 1fr 1fr Pero más limpio. 

--- ppt/slides/slide5.xml ---
 ¿Cómo se aplica CSS? 3 formas: Inline Interno Externo (recomendado) Ejemplo &lt;link rel =" stylesheet " href ="styles.css"&gt; CSS externo es mejor práctica porque: Permite reutilización Facilita mantenimiento Mejora organización 

--- ppt/slides/slide6.xml ---
 CSS externo En la cabecera del HTML, el bloque &lt;head&gt;&lt;/head&gt;, se incluye una relación al archivo CSS en cuestión: De esta forma, los navegadores sabrán que deben aplicar los estilos de este archivo (index.css) al documento HTML actual. Esta es la manera recomendada de utilizar un archivo CSS en los documentos HTML. &lt;link rel =" stylesheet " type =" text / css " href ="index.css" /&gt; 

--- ppt/slides/slide7.xml ---
 CSS interno Otra de las formas que existen para incluir estilos en un documento HTML es añadirlos directamente en la cabecera HTML del documento: &lt;!DOCTYPE html &gt; &lt; html lang ="es"&gt; &lt;head&gt; &lt; title &gt;Título de la página&lt;/ title &gt; &lt; style type =" text / css "&gt; div { background :#FFFFFF; } &lt;/ style &gt; &lt;/head&gt; ... 

--- ppt/slides/slide8.xml ---
 CSS embebido Por último, la tercera forma de aplicar estilos en un documento HTML es hacerlo directamente en las propias etiquetas, a través del atributo style : Al igual que en el método anterior, se recomienda no utilizarse salvo casos muy específicos, ya que se pierde la independencia de la presentación y contenido. Sin embargo, puede ser una buena opción en algunos casos. &lt;p&gt;¡Hola &lt; span style ="color:#FF0000" &gt;Usuario&lt;/ span &gt;!&lt;/p&gt; 

--- ppt/slides/slide9.xml ---
 Comentarios en CSS Para agregar un comentario que ayude a ser más legible el documento que utilizar /* Comentario */ 