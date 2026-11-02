// Base de usuarios simulada (solo para práctica)
const USUARIOS = [
  { usuario: "admin1",  clave: "1234", nombre: "Ana Rojas",  rol: "Administrador1" },
  { usuario: "admin2", clave: "abcd", nombre: "Luis Mora", rol: "Administrador2" }
];

const form = document.getElementById("formLogin");
const campoUsuario = document.getElementById("usuario");
const campoClave = document.getElementById("clave");
const chkRecordar = document.getElementById("recordarme");
const mensaje = document.getElementById("mensaje");

/*mensaje error login*/ 
const errorUsuario = document.getElementById("errorUsuario");
const errorClave = document.getElementById("errorClave");

// 1) Si ya hay una sesión activa, no tiene sentido mostrar el login
if (sessionStorage.getItem("sesion")) {
  window.location.replace("administrar.html");
}

// 2) Si el usuario pidió ser recordado, precargamos el campo (localStorage)
const recordado = localStorage.getItem("usuarioRecordado");
if (recordado) {
  campoUsuario.value = recordado;
  chkRecordar.checked = true;
}

// 2b) Los mensajes de error se limpian mientras el usuario escribe
campoUsuario.addEventListener("input", function () {
  errorUsuario.textContent = "";
});

campoClave.addEventListener("input", function () {
  errorClave.textContent = "";
});

// 3) Al enviar el formulario
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
    correo: encontrado.correo,
    rol: encontrado.rol,
    horaIngreso: new Date().toLocaleString("es-CR"),
    accesoAnterior: getCookie("ultimoAcceso") || "Primer ingreso"
  };

  // sessionStorage: sesión activa (se guarda como texto JSON)
  sessionStorage.setItem("sesion", JSON.stringify(datosSesion));

  // localStorage: preferencia "recordar usuario"
  if (chkRecordar.checked) {
    localStorage.setItem("usuarioRecordado", encontrado.usuario);
  } else {
    localStorage.removeItem("usuarioRecordado");
  }

  // Cookie: último acceso, vigente 7 días
  setCookie("ultimoAcceso", datosSesion.horaIngreso, 7);

  window.location.href = "administrar.html";
});
