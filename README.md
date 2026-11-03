# elViajero

Plataforma web interactiva para descubrir, consultar y gestionar destinos y experiencias de viaje en Costa Rica.

---


# Estado 
Finalizado

## Cómo ejecutar el proyecto

El proyecto es una solución web estática, por lo que no requiere instalación de dependencias ni compiladores.

### Opción recomendada: Live Server (VS Code)
1. Instala la extensión **Live Server** en Visual Studio Code.
2. Abre la carpeta del proyecto en VS Code.
3. Haz clic derecho sobre `index.html` y selecciona **Open with Live Server** (o presiona **Go Live** en la barra de estado).
4. El navegador se abrirá automáticamente en:
   **`http://127.0.0.1:5500`** (puerto `5500`).

## 1. Información Académica

* **Institución:** Universidad Técnica Nacional (UTN) — Sede Central
* **Carrera:** Ingeniería del Software
* **Curso:** ISW-521 Programación en Ambiente Web I
* **Desarrollador:** Felipe Chavarría Quesada
* **Año:** 2026

---

## 2. Contexto de la Problemática Real

* **Contexto del problema:** La información sobre destinos turísticos en Costa Rica suele encontrarse dispersa en múltiples fuentes no centralizadas, lo que dificulta a los turistas conocer con certeza horarios, condiciones climáticas y requisitos obligatorios de reserva anticipada (como en el caso de parques nacionales del SINAC).
* **Usuarios afectados:** Turistas nacionales e internacionales, familias y senderistas que buscan planificar sus visitas de manera informada y segura.
* **Necesidad principal:** Centralizar información actualizada de destinos turísticos costarricenses y facilitar la búsqueda, filtrado y administración de los mismos.
* **Solución propuesta:** Una solución web interactiva, responsiva y accesible que permite a los usuarios consultar destinos dinámicamente cargados desde un archivo JSON, filtrar por categorías y buscar por nombre en tiempo real, ofreciendo además un panel administrativo para editar información, gestionar destinos destacados y eliminar registros.

---

## 3. Estructura del Proyecto

* **HTML:** `index.html`, `destino.html`, `login.html`, `administrar.html`
* **CSS:** `css/style.css`, `css/destino.css`, `css/login.css`
* **JavaScript:** `js/script.js`, `js/destinos.js`, `js/login.js`
* **Datos (JSON):** `data/destinos.json`
* **Imágenes:** `images/`
* **Documentación:** `docs/`, `README.md`

---

## 4. Tecnologías y Enfoque Técnico

* **Persistencia:** Uso de **`localStorage`** para conservar en el navegador las ediciones de los destinos, las exclusiones de registros eliminados y la preferencia de recordar usuario.

---

## 6. Credenciales de Acceso para Pruebas

Para acceder al panel de administración en `login.html`, se pueden utilizar los siguientes usuarios de prueba:

| Usuario | Contraseña | Nombre | Rol |
| :--- | :--- | :--- | :--- |
| **`admin1`** | **`1234`** | Felipe Chavarría | Administrador1 |
| **`admin2`** | **`abcd`** | Jose Herrera | Administrador2 |

---

