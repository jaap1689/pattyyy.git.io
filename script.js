function actualizarHora() {
    const ahora = new Date();
    const hora = ahora.toLocaleTimeString();
    document.getElementById("hora").innerText = hora;

    const mensajes = [
        "¡Eres increíble, nunca lo olvides!",
        "El éxito es la suma de pequeños esfuerzos repetidos cada día.",
        "Hoy es un buen día para sonreír 😊",
        "Sigue adelante, lo mejor está por venir.",
        "Cada día es una nueva oportunidad para ser feliz."
    ];

    const indiceMensaje = ahora.getHours() % mensajes.length;
    document.getElementById("mensaje").innerText = mensajes[indiceMensaje];
}

// Actualiza la hora cada segundo
setInterval(actualizarHora, 1000);

// Inicializa la primera vez
actualizarHora();
