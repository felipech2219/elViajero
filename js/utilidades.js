// Funciones de apoyo para manejo de cookies

function setCookie(nombre, valor, dias) {
  const fecha = new Date();
  fecha.setTime(fecha.getTime() + dias * 24 * 60 * 60 * 1000);
  document.cookie = `${nombre}=${encodeURIComponent(valor)};expires=${fecha.toUTCString()};path=/`;
}

function getCookie(nombre) {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const separador = cookie.indexOf("=");
    const clave = cookie.substring(0, separador);
    const valor = cookie.substring(separador + 1);
    if (clave === nombre) {
      return decodeURIComponent(valor);
    }
  }
  return "";
}
