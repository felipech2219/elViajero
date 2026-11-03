Librerías recomendadas

SweetAlert2
SweetAlert2 permite reemplazar los mensajes tradicionales de 
JavaScript (alert, confirm, prompt) por ventanas modernas, atractivas y 
personalizables.
Casos de uso
• Confirmar eliminación de registros. 
• Mostrar mensajes de éxito. 
• Mostrar errores de validación. 
• Solicitar confirmaciones al usuario. 
Documentación oficial
• SweetAlert2 Documentation

SweetAlert2
Swal.fire({
title: "Inscripción completada",
text: "Su registro fue exitoso",
icon: "success"
});

Toastify JS
Toastify JS permite mostrar notificaciones temporales tipo "toast" 
como las utilizadas en aplicaciones modernas.
Casos de uso
• Usuario autenticado. 
• Evento registrado. 
• Datos guardados. 
• Errores no críticos. 
Documentación oficial
• Toastify JS Documentation

Toastify JS
Toastify({
text: "Evento creado correctamente",
duration: 3000
}).showToast();

Chart.js
• Chart.jspermite crear gráficos interactivos para visualizar 
información de forma clara y profesional.
Casos de uso
• Eventos por categoría. 
• Cantidad de inscritos. 
• Cupos disponibles. 
• Estadísticas del sistema. 
Documentación oficial
• Chart.js Documentation

Chart.js
const ctx = document.getElementById("grafico");
new Chart(ctx, {
type: "bar",
data: {
labels: ["Web", "IA", "Cloud"],
datasets: [{
label: "Eventos",
data: [8, 5, 3]
}]
}
});

Motion One
• Motion One permite crear animaciones modernas mediante 
JavaScript utilizando una sintaxis simple y fácil de aprender.
Casos de uso
• Aparición de tarjetas. 
• Animación de botones. 
• Menús interactivos. 
• Transiciones visuales. 
Documentación oficial
• Motion One Documentation

Motion One
animate(
".card",
{
opacity: [0, 1],
y: [50, 0]
},
{
duration: 0.8
}
);

AOS (Animate On Scroll)
AOSpermite animar elementos automáticamente cuando 
aparecen en pantalla al hacer scroll.
Casos de uso
• Tarjetas de eventos. 
• Secciones informativas. 
• Galerías. 
• Landing pages. 
Documentación oficial
• AOS Documentation

AOS (Animate On Scroll)
<div data-aos="fade-up">
Evento Destacado
</div>
AOS.init();