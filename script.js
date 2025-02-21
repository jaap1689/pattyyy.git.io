function actualizarHora() {
    const ahora = new Date();
    const hora = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();
    const horaFormateada = `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    document.getElementById("hora").innerText = horaFormateada;

    // Mensajes motivacionales para cada hora del día
    const mensajes = [
        "🌅 ¡Buenos días! Hoy será un día increíble. 🌞", // 00:00 AM
        "🌙 La noche avanza, respira profundo y relájate. 💫", // 01:00 AM
        "🌌 Un poco de descanso hace maravillas. ¡Duerme bien! 😴", // 02:00 AM
        "🌠 La madrugada es mágica, sueños bonitos para ti. ✨", // 03:00 AM
        "💭 ¿Estás despierto? Quizás una idea genial esté por llegar. 🤔", // 04:00 AM
        "🌞 ¡El amanecer se acerca! Hoy será un gran día. ☀️", // 05:00 AM
        "🌄 Nuevo día, nuevas oportunidades. ¡Vamos por todo! 🚀", // 06:00 AM
        "🍀 Que la suerte y la alegría te acompañen hoy. 🍀", // 07:00 AM
        "💡 Enfócate en tus metas, cada paso cuenta. 🏆", // 08:00 AM
        "🚀 ¡Tú puedes con todo! Sigue adelante sin miedo. 💪", // 09:00 AM
        "🎯 Recuerda, el esfuerzo de hoy será la recompensa de mañana. 🔥", // 10:00 AM
        "💛 ¡Mediodía! Haz una pausa, respira y sigue brillando. 🌞", // 11:00 AM
        "🥗 ¡Hora de almorzar! Recarga energías y sigue con ánimo. 🍽️", // 12:00 PM
        "🕶️ Una pequeña siesta o descanso te hará bien. 😎", // 13:00 PM
        "📖 Aprende algo nuevo hoy. ¡Siempre hay algo por descubrir! 🔎", // 14:00 PM
        "☕ Tómate una taza café y sigue con fuerza. ¡Lo estás haciendo genial amorchita linda! ☕", // 15:00 PM
        "🎵 Pon tu música favorita y disfruta el momento, baila, rie. 🎶", // 16:00 PM
        "🎯 ¡Terminando el día! Asegúrate de cerrar con broche de oro y salir a tu hora =). ✨", // 17:00 PM (Desde aquí empieza el tono de felicitaciones)
        "👏 ¡Felicidades amorchita! Diste lo mejor de ti hoy. Relájate y sonríe. 😊", // 18:00 PM
        "🎉 ¡Un gran esfuerzo merece un gran descanso! Desconéctate un poco, nada de tik tok, solo descansa. 🍃", // 19:00 PM
        "🌙 La noche llega y con ella la paz. ¡Descansa, te lo mereces mi amor! 😌", // 20:00 PM
        "🍵 Disfruta un té o un chocolate caliente, te lo ganaste, o una buena copa de vino. ☕💖", // 21:00 PM
        "🎬 Un buen momento para ver una película o leer algo interesante. 🎥", // 22:00 PM
        "💤 Hora de dormir pronto, tu cuerpo y mente lo agradecerán, buenas noches amor mio. 🛌", // 23:00 PM
    ];

    // Mostrar mensaje según la hora actual
    document.getElementById("mensaje").innerText = mensajes[hora];
}

// 💖 Crear corazones cayendo
function crearCorazon() {
    const corazon = document.createElement("div");
    corazon.innerHTML = "💖";
    corazon.classList.add("heart");
    corazon.style.left = Math.random() * window.innerWidth + "px";
    corazon.style.animationDuration = (Math.random() * 2 + 3) + "s";

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 5000);
}

// 📸 Mostrar una sola foto cada 7 segundos en forma aleatoria
function mostrarFoto() {
    const fotos = [
        "foto1.jpg", "foto2.jpg", "foto3.jpg", "foto4.jpg", "foto5.jpg",
        "foto6.jpg", "foto7.jpg", "foto8.jpg", "foto9.jpg", "foto10.jpg", "foto11.jpg"
    ];

    const photoContainer = document.getElementById("photo-container");

    // Eliminar la imagen anterior antes de mostrar una nueva
    photoContainer.innerHTML = '';

    const foto = document.createElement("div");
    foto.classList.add("photo-shape"); // Todas las imágenes serán circulares automáticamente

    // Asignar una imagen aleatoria
    const imagen = document.createElement("img");
    imagen.src = fotos[Math.floor(Math.random() * fotos.length)];

    // Posicionamiento aleatorio en toda la pantalla
    const windowWidth = window.innerWidth - 200;
    const windowHeight = window.innerHeight - 200;
    foto.style.left = Math.random() * windowWidth + "px";
    foto.style.top = Math.random() * windowHeight + "px";

    foto.appendChild(imagen);
    photoContainer.appendChild(foto);

    // Eliminar la imagen después de 7 segundos
    setTimeout(() => {
        foto.remove();
    }, 7000);
}

// 📸 Muestra una nueva foto cada 7 segundos con efectos suaves
setInterval(mostrarFoto, 7000);
mostrarFoto();


// ⏳ Configurar temporizadores para las funciones
setInterval(actualizarHora, 1000); // Actualiza la hora cada segundo
setInterval(crearCorazon, 300); // Genera corazones cada 300ms
setInterval(mostrarFoto, 7000); // Muestra una nueva foto cada 7 segundos

// Inicializar la primera imagen y hora
actualizarHora();
mostrarFoto();
