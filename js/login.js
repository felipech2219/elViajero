// datos quemados
const USUARIOS = [
  { usuario: "admin1",  clave: "1234", nombre: "Ana Rojas",  rol: "Administrador1" },
  { usuario: "admin2", clave: "abcd", nombre: "Luis Mora", rol: "Administrador2" }
];

const form = document.getElementById("formLogin");
const campoUsuario = document.getElementById("usuario");
const campoClave = document.getElementById("clave");
const chkRecordar = document.getElementById("recordarme");
const mensaje = document.getElementById("mensaje");

/* Mensajes de error del login */
const errorUsuario = document.getElementById("errorUsuario");
const errorClave = document.getElementById("errorClave");

// Si ya hay una sesión activa, no tiene sentido mostrar el login
if (sessionStorage.getItem("sesion")) {
  window.location.replace("administrar.html");
}

// Si el usuario pidió ser recordado, precargamos el campo (localStorage)
const recordado = localStorage.getItem("usuarioRecordado");
if (recordado) {
  campoUsuario.value = recordado;
  chkRecordar.checked = true;
}

// Los mensajes de error se limpian mientras el usuario escribe
campoUsuario.addEventListener("input", function () {
  errorUsuario.textContent = "";
});

campoClave.addEventListener("input", function () {
  errorClave.textContent = "";
});

// Al enviar el formulario
form.addEventListener("submit", function (evento) {
  evento.preventDefault();

  // Validar que ningún campo esté vacío
  let valido = true;

  if (campoUsuario.value.trim() === "") {
    errorUsuario.textContent = "Debe ingresar un nombre de usuario.";
    valido = false;
  }

  if (campoClave.value.trim() === "") {
    errorClave.textContent = "Debe ingresar una contraseña.";
    valido = false;
  }

  if (!valido) {
    return;
  }

    const encontrado = USUARIOS.find(function (u) {
    return u.usuario === campoUsuario.value.trim() && u.clave === campoClave.value;
  });

  if (!encontrado) {
    mensaje.textContent = "Usuario o contraseña incorrectos.";
    return;
  }

  // Datos de sesión: NUNCA guardamos la contraseña
  const datosSesion = {
    usuario: encontrado.usuario,
    nombre: encontrado.nombre,
    rol: encontrado.rol,
    horaIngreso: new Date().toLocaleString("es-CR")
  };

  // sessionStorage: sesión activa (se guarda como texto JSON)
  sessionStorage.setItem("sesion", JSON.stringify(datosSesion));

  // localStorage: preferencia "recordar usuario"
  if (chkRecordar.checked) {
    localStorage.setItem("usuarioRecordado", encontrado.usuario);
  } else {
    localStorage.removeItem("usuarioRecordado");
  }

  window.location.href = "administrar.html";
});
