/* =========================
1. PROTECCIÓN DE SESIÓN
========================= */

// Si no hay sesión activa, no se muestra el panel
if (!sessionStorage.getItem("sesion")) {
    window.location.replace("login.html");
}

/* =========================
2. REFERENCIAS DEL DOM
========================= */

const contenedorDestinos = document.getElementById("events-grid");
const campoBuscar = document.getElementById("buscar");
const filtroCategoria = document.getElementById("filtro-categoria");
const enlaceCerrarSesion = document.getElementById("cerrar-sesion");

// Lista completa de destinos cargada desde el JSON
let destinos = [];

/* =========================
3. FUNCIONES
========================= */

/*
Agrega un párrafo con un dato del destino.
Si el valor está vacío, no agrega nada.
*/
function agregarDato(contenido, etiqueta, valor) {
    if (valor === undefined || valor === null || String(valor).trim() === "") {
        return;
    }

    const dato = document.createElement("p");
    dato.textContent = `${etiqueta}: ${valor}`;
    contenido.append(dato);
}

/*
Acción del botón Editar de cada tarjeta.
Por ahora muestra qué destino se va a editar.
*/
function editarDestino(destino) {
    alert(`Editar destino: ${destino.nombre}\n\nLa edición de destinos estará disponible próximamente.`);
}

/*
Crea una tarjeta de destino con su imagen,
ubicación, datos principales y botón de editar.
*/
function crearTarjeta(destino) {
    const tarjeta = document.createElement("article");
    tarjeta.className = "event-card";

    const ubicacion = document.createElement("p");
    ubicacion.className = "event-card__location";
    ubicacion.textContent = destino.ubicacion || "Ubicación no disponible";

    const espacioImagen = document.createElement("div");
    espacioImagen.className = "event-card__image";

    if (destino.imagen) {
        const imagen = document.createElement("img");
        imagen.src = destino.imagen;
        imagen.alt = destino.nombre
            ? `Imagen de ${destino.nombre}`
            : "Imagen del destino";
        imagen.addEventListener("error", () => {
            console.error(`No se pudo cargar la imagen: ${destino.imagen}`);
            espacioImagen.textContent = "Imagen no disponible";
        }, { once: true });
        espacioImagen.append(imagen);
    } else {
        espacioImagen.textContent = "Imagen no disponible";
    }

    const contenido = document.createElement("div");
    contenido.className = "event-card__content";

    const nombre = document.createElement("h3");
    nombre.textContent = destino.nombre || "Destino sin nombre";
    contenido.append(nombre);

    agregarDato(contenido, "Categoría", destino.categoria);
    agregarDato(contenido, "Descripción", destino.descripcion);
    agregarDato(contenido, "Clima", destino.clima);
    agregarDato(contenido, "Actividades", destino.actividades);
    agregarDato(contenido, "Horario", destino.horario);
    agregarDato(contenido, "Reserva anticipada", destino["reserva anticipada"]);

    const botonEditar = document.createElement("button");
    botonEditar.type = "button";
    botonEditar.className = "btn-editar";
    botonEditar.textContent = "Editar";
    botonEditar.addEventListener("click", () => editarDestino(destino));
    contenido.append(botonEditar);

    tarjeta.append(ubicacion, espacioImagen, contenido);
    return tarjeta;
}

/*
Llena el select de categorías con las
categorías que existen en el JSON.
*/
function llenarCategorias() {
    const categorias = [...new Set(destinos.map(destino => destino.categoria).filter(Boolean))];

    categorias.forEach(categoria => {
        const opcion = document.createElement("option");
        opcion.value = categoria;
        opcion.textContent = categoria;
        filtroCategoria.append(opcion);
    });
}

/*
Muestra los destinos aplicando el texto de
búsqueda y la categoría seleccionada.
*/
function mostrarDestinos() {
    const texto = campoBuscar.value.trim().toLowerCase();
    const categoria = filtroCategoria.value;

    const filtrados = destinos.filter(destino => {
        const coincideTexto = (destino.nombre || "").toLowerCase().includes(texto);
        const coincideCategoria = categoria === "todas" || destino.categoria === categoria;
        return coincideTexto && coincideCategoria;
    });

    contenedorDestinos.replaceChildren();
    if (filtrados.length === 0) {
        contenedorDestinos.textContent = "No se encontraron destinos con esos criterios.";
        return;
    }

    filtrados.forEach(destino => {
        contenedorDestinos.append(crearTarjeta(destino));
    });
}

/*
Carga los destinos desde el archivo JSON
y los muestra en pantalla dinámicamente.
*/
async function cargarDestinos() {
    try {
        const respuesta = await fetch("./data/destinos.json");
        if (!respuesta.ok) {
            throw new Error(`No se pudo cargar destinos.json (HTTP ${respuesta.status}).`);
        }

        destinos = await respuesta.json();
        if (!Array.isArray(destinos)) {
            throw new Error("destinos.json debe contener una lista de destinos.");
        }

        llenarCategorias();
        mostrarDestinos();
    } catch (error) {
        console.error("Error al cargar destinos:", error);
        contenedorDestinos.textContent = "No se pudieron cargar los destinos.";
    } finally {
        contenedorDestinos.setAttribute("aria-busy", "false");
    }
}

/* =========================
4. EVENTOS
========================= */

campoBuscar.addEventListener("input", mostrarDestinos);
filtroCategoria.addEventListener("change", mostrarDestinos);

// Cerrar sesión: se limpia la sesión y se vuelve al inicio
enlaceCerrarSesion.addEventListener("click", () => {
    sessionStorage.removeItem("sesion");
});

/* =========================
5. INICIO
========================= */

cargarDestinos();
