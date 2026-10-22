const contenedorDestinos = document.querySelector(".tarjetaAll");

function agregarDato(contenido, etiqueta, valor) {
    if (valor === undefined || valor === null || String(valor).trim() === "") {
        return;
    }

    const dato = document.createElement("p");
    dato.textContent = `${etiqueta}: ${valor}`;
    contenido.append(dato);
}

function crearTarjeta(destino) {
    const tarjeta = document.createElement("article");

    const ubicacion = document.createElement("p");
    ubicacion.className = "destination-card__location";
    ubicacion.textContent = destino.ubicacion || "Ubicación no disponible";

    const espacioImagen = document.createElement("div");
    espacioImagen.className = "destination-card__image";

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
    contenido.className = "destination-card__content";

    const nombre = document.createElement("h3");
    nombre.textContent = destino.nombre || "Destino sin nombre";
    contenido.append(nombre);

    /*agregarDato(contenido, "ID", destino.id);*/
    agregarDato(contenido, "Categoría", destino.categoria);
    agregarDato(contenido, "Descripción", destino.descripcion);
    agregarDato(contenido, "Clima", destino.clima);
    agregarDato(contenido, "Actividades", destino.actividades);
    agregarDato(contenido, "Horario", destino.horario);
    agregarDato(contenido, "Reserva anticipada", destino["reserva anticipada"]);

    if (/^https?:\/\//i.test(destino.url || "")) {
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

async function cargarDestinos() {
    try {
        if (!contenedorDestinos) {
            throw new Error('No se encontró el contenedor ".tarjetaAll" en el HTML.');
        }

        const respuesta = await fetch("./data/destinos.json");
        if (!respuesta.ok) {
            throw new Error(`No se pudo cargar destinos.json (HTTP ${respuesta.status}).`);
        }

        const destinos = await respuesta.json();
        if (!Array.isArray(destinos)) {
            throw new Error("destinos.json debe contener una lista de destinos.");
        }

        contenedorDestinos.replaceChildren();
        if (destinos.length === 0) {
            contenedorDestinos.textContent = "No hay destinos registrados.";
            return;
        }

        destinos.forEach(destino => {
            contenedorDestinos.append(crearTarjeta(destino));
        });
    } catch (error) {
        console.error("Error al cargar destinos:", error);
        if (contenedorDestinos) {
            contenedorDestinos.textContent = "No se pudieron cargar los destinos.";
        }
    } finally {
        if (contenedorDestinos) {
            contenedorDestinos.setAttribute("aria-busy", "false");
        }
    }
}

cargarDestinos();
