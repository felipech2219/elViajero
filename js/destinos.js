/*
JS compartido por destino y administrar
Ambas páginas cargan y muestran los destinos desde el JSON
con buscador y filtro por categoría. Las diferencias de cada
página se detectan por los elementos que existen en el DOM:
- administrar.html: protege la sesión y permite editar cada
  destino en la misma tarjeta, guardando en localStorage.
- destino.html: agrega enlace de reserva y contador de resultados.
*/

/* =========================
1. PROTECCIÓN DE SESIÓN
(solo aplica en administrar.html)
========================= */

const enlaceCerrarSesion = document.getElementById("cerrar-sesion");

// Si la página tiene enlace de cerrar sesión y no hay
// sesión activa, no se muestra el panel
if (enlaceCerrarSesion && !sessionStorage.getItem("sesion")) {
    window.location.replace("login.html");
}

/* =========================
2. REFERENCIAS DEL DOM
========================= */

const contenedorDestinos = document.getElementById("events-grid");
const campoBuscar = document.getElementById("buscar");
const filtroCategoria = document.getElementById("filtro-categoria");
const contadorResultados = document.getElementById("resultados");

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

/* -------- Edición inline (solo administrar.html) -------- */

// Clave de localStorage donde se guardan las ediciones
const CLAVE_EDICIONES = "destinosEditados";

// Campos que se muestran bloqueados (solo lectura) en el formulario
const CAMPOS_BLOQUEADOS = [
    { clave: "id", etiqueta: "ID" },
    { clave: "nombre", etiqueta: "Nombre" },
    { clave: "ubicacion", etiqueta: "Ubicación" },
    { clave: "imagen", etiqueta: "Imagen" }
];

/*
Lee del localStorage las ediciones guardadas:
un objeto con el id del destino como clave
y los campos editados como valor.
*/
function obtenerEdicionesGuardadas() {
    try {
        return JSON.parse(localStorage.getItem(CLAVE_EDICIONES)) || {};
    } catch (error) {
        console.error("No se pudieron leer las ediciones guardadas:", error);
        return {};
    }
}

/*
Guarda en localStorage los campos editables
del destino que se acaba de modificar.
*/
function guardarEdicion(destino) {
    const ediciones = obtenerEdicionesGuardadas();
    ediciones[destino.id] = {
        categoria: destino.categoria,
        descripcion: destino.descripcion,
        clima: destino.clima,
        actividades: destino.actividades,
        horario: destino.horario,
        "reserva anticipada": destino["reserva anticipada"],
        url: destino.url
    };
    localStorage.setItem(CLAVE_EDICIONES, JSON.stringify(ediciones));
}

/*
Aplica sobre la lista cargada del JSON las
ediciones que estén guardadas en localStorage,
para recuperarlas automáticamente al recargar.
*/
function aplicarEdicionesGuardadas() {
    const ediciones = obtenerEdicionesGuardadas();
    destinos = destinos.map(destino =>
        ediciones[destino.id] ? { ...destino, ...ediciones[destino.id] } : destino
    );
}

/*
Envuelve un control con su label, asociados
mediante los atributos for e id.
*/
function crearGrupoCampo(idCampo, etiqueta, control) {
    const grupo = document.createElement("p");
    grupo.className = "form-grupo";

    const label = document.createElement("label");
    label.htmlFor = idCampo;
    label.textContent = etiqueta;

    control.id = idCampo;
    grupo.append(label, control);
    return grupo;
}

/*
Crea un input de texto corto editable (clima,
actividades, horario) con su valor inicial.
*/
function crearInputEditable(nombre, valor) {
    const input = document.createElement("input");
    input.type = "text";
    input.name = nombre;
    input.required = true;
    input.value = valor || "";
    return input;
}

/*
Construye el formulario de edición de un destino.
Los campos id, nombre, ubicación e imagen se muestran
bloqueados (solo lectura y en gris); el resto se edita
con el control apropiado (select, input o textarea).
Al enviar se actualiza el destino y se guarda en
localStorage; al cancelar se restaura la tarjeta.
*/
function crearFormularioEdicion(destino, tarjeta) {
    const formulario = document.createElement("form");
    formulario.className = "form-edicion";

    /* ----- Campos bloqueados ----- */
    const grupoBloqueados = document.createElement("fieldset");
    const leyendaBloqueados = document.createElement("legend");
    leyendaBloqueados.textContent = "Datos no editables";
    grupoBloqueados.append(leyendaBloqueados);

    CAMPOS_BLOQUEADOS.forEach(({ clave, etiqueta }) => {
        const input = document.createElement("input");
        input.type = "text";
        input.name = clave;
        input.value = destino[clave] || "";
        input.readOnly = true;
        input.tabIndex = -1;
        input.className = "campo-bloqueado";
        grupoBloqueados.append(crearGrupoCampo(`edit-${clave}-${destino.id}`, etiqueta, input));
    });

    /* ----- Campos editables ----- */
    const grupoEditables = document.createElement("fieldset");
    const leyendaEditables = document.createElement("legend");
    leyendaEditables.textContent = "Datos editables";
    grupoEditables.append(leyendaEditables);

    // Categoría: select con las categorías que existen en los datos
    const selectCategoria = document.createElement("select");
    selectCategoria.name = "categoria";
    selectCategoria.required = true;
    const categorias = [...new Set(destinos.map(d => d.categoria).filter(Boolean))];
    if (destino.categoria && !categorias.includes(destino.categoria)) {
        categorias.push(destino.categoria);
    }
    categorias.forEach(categoria => {
        const opcion = document.createElement("option");
        opcion.value = categoria;
        opcion.textContent = categoria;
        selectCategoria.append(opcion);
    });
    selectCategoria.value = destino.categoria || "";
    grupoEditables.append(crearGrupoCampo(`edit-categoria-${destino.id}`, "Categoría", selectCategoria));

    // Descripción: textarea por ser un texto largo
    const textareaDescripcion = document.createElement("textarea");
    textareaDescripcion.name = "descripcion";
    textareaDescripcion.rows = 3;
    textareaDescripcion.required = true;
    textareaDescripcion.value = destino.descripcion || "";
    grupoEditables.append(crearGrupoCampo(`edit-descripcion-${destino.id}`, "Descripción", textareaDescripcion));

    // Clima, actividades y horario: textos cortos
    const inputClima = crearInputEditable("clima", destino.clima);
    grupoEditables.append(crearGrupoCampo(`edit-clima-${destino.id}`, "Clima", inputClima));

    const inputActividades = crearInputEditable("actividades", destino.actividades);
    grupoEditables.append(crearGrupoCampo(`edit-actividades-${destino.id}`, "Actividades", inputActividades));

    const inputHorario = crearInputEditable("horario", destino.horario);
    grupoEditables.append(crearGrupoCampo(`edit-horario-${destino.id}`, "Horario", inputHorario));

    // Reserva anticipada: select con las dos opciones posibles
    const selectReserva = document.createElement("select");
    selectReserva.name = "reserva anticipada";
    selectReserva.required = true;
    ["Si", "No"].forEach(textoOpcion => {
        const opcion = document.createElement("option");
        opcion.value = textoOpcion;
        opcion.textContent = textoOpcion;
        selectReserva.append(opcion);
    });
    selectReserva.value = destino["reserva anticipada"] || "No";
    grupoEditables.append(crearGrupoCampo(`edit-reserva-${destino.id}`, "Reserva anticipada", selectReserva));

    // URL: opcional; el navegador valida que sea una URL válida
    const inputUrl = document.createElement("input");
    inputUrl.type = "url";
    inputUrl.name = "url";
    inputUrl.placeholder = "https://ejemplo.com/";
    inputUrl.value = destino.url || "";
    grupoEditables.append(crearGrupoCampo(`edit-url-${destino.id}`, "URL de reserva", inputUrl));

    /* ----- Botones de acción ----- */
    const acciones = document.createElement("p");
    acciones.className = "form-edicion__acciones";

    const botonGuardar = document.createElement("button");
    botonGuardar.type = "submit";
    botonGuardar.className = "btn-guardar";
    botonGuardar.textContent = "Guardar Cambios";

    const botonCancelar = document.createElement("button");
    botonCancelar.type = "button";
    botonCancelar.className = "btn-cancelar";
    botonCancelar.textContent = "Cancelar";
    botonCancelar.addEventListener("click", () => {
        // El destino no se modificó: se reconstruye la tarjeta original
        tarjeta.replaceWith(crearTarjeta(destino));
    });

    acciones.append(botonGuardar, botonCancelar);
    formulario.append(grupoBloqueados, grupoEditables, acciones);

    formulario.addEventListener("submit", evento => {
        evento.preventDefault();

        destino.categoria = selectCategoria.value;
        destino.descripcion = textareaDescripcion.value.trim();
        destino.clima = inputClima.value.trim();
        destino.actividades = inputActividades.value.trim();
        destino.horario = inputHorario.value.trim();
        destino["reserva anticipada"] = selectReserva.value;
        destino.url = inputUrl.value.trim();

        guardarEdicion(destino);
        tarjeta.replaceWith(crearTarjeta(destino));
    });

    return formulario;
}

/*
Acción del botón Editar: cambia la misma tarjeta a
modo edición, sin navegar a otra página ni abrir
ventanas emergentes. La tarjeta conserva su lugar,
su imagen y su ubicación; solo su contenido se
reemplaza por el formulario de edición.
*/
function entrarModoEdicion(tarjeta, destino) {
    tarjeta.classList.add("event-card--editando");
    const contenido = tarjeta.querySelector(".event-card__content");
    contenido.replaceChildren(crearFormularioEdicion(destino, tarjeta));
}

/*
Crea una tarjeta de destino con su imagen,
ubicación y datos principales. En administrar.html
agrega el botón Editar; en destino.html agrega
el enlace de reserva.
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

    if (enlaceCerrarSesion) {
        // Página de administración: botón Editar
        const botonEditar = document.createElement("button");
        botonEditar.type = "button";
        botonEditar.className = "btn-editar";
        botonEditar.textContent = "Editar";
        botonEditar.addEventListener("click", () => entrarModoEdicion(tarjeta, destino));
        contenido.append(botonEditar);
    } else if (/^https?:\/\//i.test(destino.url || "")) {
        // Página pública: enlace de reserva
        const enlace = document.createElement("a");
        enlace.href = destino.url;
        enlace.target = "_blank";
        enlace.rel = "noopener noreferrer";
        enlace.textContent = "Reserva acá";
        contenido.append(enlace);
    }

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

    if (contadorResultados) {
        contadorResultados.textContent = filtrados.length === 1
            ? "1 destino encontrado"
            : `${filtrados.length} destinos encontrados`;
    }

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

        aplicarEdicionesGuardadas();
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

if (enlaceCerrarSesion) {
    // Cerrar sesión: se limpia la sesión y se vuelve al inicio
    enlaceCerrarSesion.addEventListener("click", () => {
        sessionStorage.removeItem("sesion");
    });
}

/* =========================
5. INICIO
========================= */

cargarDestinos();
