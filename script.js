function actualizarHora() {
    const ahora = new Date();
    const hora = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();
    const horaFormateada = `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    document.getElementById("hora").innerText = horaFormateada;

    // Mensajes motivacionales para cada hora del día
    const mensajes = [
        "🌅 ¡Buenos días! Hoy será un día increíble. 🌞",
        "🌙 La noche avanza, respira profundo y relájate. 💫",
        "🌌 Un poco de descanso hace maravillas. ¡Duerme bien! 😴",
        "🌠 La madrugada es mágica, sueños bonitos para ti. ✨",
        "💭 ¿Estás despierto? Quizás una idea genial esté por llegar. 🤔",
        "🌞 ¡El amanecer se acerca! Hoy será un gran día. ☀️",
        "🌄 Nuevo día, nuevas oportunidades. ¡Vamos por todo! 🚀",
        "🍀 Que la suerte y la alegría te acompañen hoy. 🍀",
        "💡 Enfócate en tus metas, cada paso cuenta. 🏆",
        "🚀 ¡Tú puedes con todo! Sigue adelante sin miedo. 💪",
        "🎯 Recuerda, el esfuerzo de hoy será la recompensa de mañana. 🔥",
        "💛 ¡Mediodía! Haz una pausa, respira y sigue brillando. 🌞",
        "🥗 ¡Hora de almorzar! Recarga energías y sigue con ánimo. 🍽️",
        "🕶️ Una pequeña siesta o descanso te hará bien. 😎",
        "📖 Aprende algo nuevo hoy. ¡Siempre hay algo por descubrir! 🔎",
        "☕ Tómate un café y sigue con fuerza. ¡Lo estás haciendo genial! ☕",
        "🎵 Pon tu música favorita y disfruta el momento. 🎶",
        "🎯 ¡Terminando el día! Asegúrate de cerrar con broche de oro. ✨",
        "👏 ¡Felicidades! Diste lo mejor de ti hoy. Relájate y sonríe. 😊",
        "🎉 ¡Un gran esfuerzo merece un gran descanso! Desconéctate un poco. 🍃",
        "🌙 La noche llega y con ella la paz. ¡Descansa, te lo mereces! 😌",
        "🍵 Disfruta un té o un chocolate caliente, te lo ganaste. ☕💖",
        "🎬 Un buen momento para ver una película o leer algo interesante. 🎥",
        "💤 Hora de dormir pronto, tu cuerpo y mente lo agradecerán. 🛌",
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
