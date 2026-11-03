# elViajero
elViajero: plataforma web para descubrir destinos y experiencias de viaje 

# Estado 
En desarrollo 

# Estructura del proyecto
```
elViajero/
├── index.html          # Página principal (inicio)
├── destino.html        # Destinos con búsqueda y filtro
├── login.html          # Ingreso de administradores
├── administrar.html    # Panel de administración de destinos
├── css/
│   ├── style.css       # Estilos compartidos del sitio
│   ├── destino.css     # Estilos de la página de destinos
│   └── login.css       # Estilos de la página de ingreso
├── js/
│   ├── script.js       # Carga de destinos en el inicio
│   ├── destinos.js     # Búsqueda, filtro y edición de destinos
│   ├── login.js        # Validación e ingreso de administradores
│   └── utilidades.js   # Funciones de apoyo (cookies)
├── images/             # Imágenes del sitio
├── data/
│   └── destinos.json   # Datos de destinos (JSON)
└── docs/               # Documentación del curso
```

# Cómo ejecutar el proyecto
El proyecto es una página estática (`index.html`), por lo que no requiere instalar dependencias.

## Opción 1: Live Server (recomendada)
1. Instala la extensión **Live Server** en Visual Studio Code.
2. Abre la carpeta del proyecto en VS Code.
3. Haz clic derecho sobre `index.html` y selecciona **Open with Live Server**
   (o pulsa **Go Live** en la barra de estado inferior).
4. El navegador se abrirá automáticamente en:

   **http://127.0.0.1:5500** (puerto **5500**)
Live Server recarga la página cada vez que guardas un cambio.

## Opción 2: Abrir directamente
Abre el archivo `index.html` con tu navegador (doble clic).

