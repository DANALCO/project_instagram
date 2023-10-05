// Obtén una referencia al video
const video = document.querySelector('.myVideo');

// Obtén una referencia a los elementos relacionados con el audio
const muteButton = document.querySelector('.mute-button');
const mute = document.querySelector('.mute');

// Obtén una referencia al botón de pausa
const pausa = document.querySelector('.pausa');
let videoPaused = false;

// Función para mutear o desmutear el video
function Mutear() {
    if (video.muted) {
        video.muted = false;
        mute.src = "../assets/iconos/audio-on white.png";
    } else {
        video.muted = true;
        mute.src = "../assets/iconos/audio-off white.png";
    }
}

// Obtén una referencia al botón para mostrar/ocultar pausa
const mostrarBtn = document.querySelector('.mostrarBtn');

// Agrega un controlador de clic al botón para mostrar/ocultar pausa
mostrarBtn.addEventListener('click', () => {
    if (pausa.classList.contains('oculto')) {
        // Mostrar la imagen de pausa
        pausa.classList.remove('oculto');
        pausa.classList.remove('desaparecer'); // Quitar la clase de desaparición si estaba presente
        pausa.classList.add('visible');
        if (!videoPaused) {
            video.pause(); // Pausar el video
            videoPaused = true;
        }
    } else {
        // Ocultar la imagen de pausa con animación de desaparición
        pausa.classList.remove('visible');
        pausa.classList.add('desaparecer');
        if (videoPaused) {
            video.play(); // Reanudar el video
            videoPaused = false;
        }
        // Después de la animación de desaparición, restablecer la imagen a su estado inicial
        setTimeout(() => {
            pausa.classList.remove('desaparecer');
            pausa.classList.add('oculto');
        }, 500); // La duración de la animación de desaparición es de 0.5 segundos
    }
});

// Agrega un controlador de clic a la imagen de pausa para mostrar/ocultar pausa
pausa.addEventListener('click', () => {
    if (pausa.classList.contains('oculto')) {
        // Mostrar la imagen de pausa
        pausa.classList.remove('oculto');
        pausa.classList.remove('desaparecer'); // Quitar la clase de desaparición si estaba presente
        pausa.classList.add('visible');
        if (!videoPaused) {
            video.pause(); // Pausar el video
            videoPaused = true;
        }
    } else {
        // Ocultar la imagen de pausa con animación de desaparición
        pausa.classList.remove('visible');
        pausa.classList.add('desaparecer');
        if (videoPaused) {
            video.play(); // Reanudar el video
            videoPaused = false;
        }
        // Después de la animación de desaparición, restablecer la imagen a su estado inicial
        setTimeout(() => {
            pausa.classList.remove('desaparecer');
            pausa.classList.add('oculto');
        }, 500); // La duración de la animación de desaparición es de 0.5 segundos
    }
});

// Variable para rastrear el estado actual del corazón
let imagenActual = 1;

// Función para cambiar la imagen del corazón y aplicar la animación
function cambiarImagen() {
    const corazon = document.querySelector(".corazon");

    // Cambia la imagen y el estado actual
    if (imagenActual === 1) {
        corazon.src = "../assets/iconos/heart red.png";
        imagenActual = 2;

        // Aplica la animación "palpitar"
        corazon.style.animation = "palpitar 0.3s";
        setTimeout(() => {
            corazon.style.animation = ""; // Restaura la animación
        }, 300);
    } else {
        corazon.src = "../assets/iconos/heart.png";
        imagenActual = 1;
    }
}

// Función para manejar el evento mouseout del corazón
function onMouseOut() {
    if (imagenActual === 1) {
        const corazon = document.querySelector(".corazon");
        // Aplica la animación "palpitar" en caso de mouseout
        corazon.style.animation = "palpitar 0.3s";
        setTimeout(() => {
            corazon.style.animation = ""; // Restaura la animación
        }, 300);
    }
}

// Agrega eventos click y mouseout al corazón
const corazon = document.querySelector(".corazon");
corazon.addEventListener("click", cambiarImagen);
corazon.addEventListener("mouseout", onMouseOut);

// Función para habilitar o deshabilitar el botón de publicar comentario
function commentButton() {
    const commentInput = document.querySelector(".comment-input");
    const publishButton = document.querySelector(".publish-button");

    if (commentInput.value.trim() !== "") {
        publishButton.style.display = "block";
    } else {
        publishButton.style.display = "none";
    }
}

// Función para agregar comentarios
function addComment() {
    const commentInput = document.querySelector(".comment-input");
    const commentText = commentInput.value.trim();

    if (commentText !== "") {
        const commentsDiv = document.querySelector(".comments");
        const newComment = document.createElement("div");
        newComment.textContent = commentText;
        commentsDiv.appendChild(newComment);
        commentInput.value = "";
        commentButton();
    }
}

// Variable para rastrear la visibilidad de los comentarios
let commentsVisible = false;

// Función para mostrar u ocultar los comentarios
function toggleComments() {
    const commentsContainer = document.querySelector(".comments-container");

    commentsVisible = !commentsVisible;

    if (commentsVisible) {
        commentsContainer.style.display = "block";
        if (shareVisible){
            toggleShare()
        }
        if (moreVisible){
            toggleMore()
        }
        // No mostramos emoji-container aquí
    } else {
        commentsContainer.style.display = "none";
        document.querySelector(".emoji-container").style.display = "none"; // Ocultar emoji-container
        if (emojiContainerVisible){
            emojiContainerVisible = !emojiContainerVisible;
        }
    }
}

// Variable para rastrear la visibilidad del emoji-container
let emojiContainerVisible = false;

// Función para mostrar u ocultar el emoji-container
function emojiButtonClick() {
    if (commentsVisible) {
        const emojiContainer = document.querySelector(".emoji-container");
        emojiContainerVisible = !emojiContainerVisible;

        if (emojiContainerVisible) {
            emojiContainer.style.display = "block"; // Mostrar emoji-container
        } else {
            emojiContainer.style.display = "none"; // Ocultar emoji-container
        }
    }
}

// Variable para rastrear la visibilidad de "share"
let shareVisible = false;

// Función para mostrar u ocultar "share"
function toggleShare() {
    const shareContainer = document.querySelector(".share-container");

    shareVisible = !shareVisible;

    if (shareVisible) {
        shareContainer.style.display = "block";
        if (commentsVisible){
            toggleComments()
        }
        if (moreVisible){
            toggleMore()
        }
    } else {
        shareContainer.style.display = "none";
    }
}

// Variable para rastrear el estado actual de la imagen de guardar
let guardarActual = 1;

// Función para cambiar la imagen de guardar y su estado
function cambiarGuardado() {
    const guardar = document.querySelector(".guardar");

    // Cambia la imagen y el estado actual
    if (guardarActual === 1) {
        guardar.src = "../assets/iconos/bookmark black.png";
        guardarActual = 2;
    } else {
        guardar.src = "../assets/iconos/bookmark.png";
        guardarActual = 1;
    }
}

// Agrega un controlador de clic a la imagen de guardar
const guardar = document.querySelector(".guardar");
guardar.addEventListener("click", cambiarGuardado);

// Variable para rastrear la visibilidad de "more"
let moreVisible = false;

// Función para mostrar u ocultar "more"
function toggleMore() {
    const moreContainer = document.querySelector(".more-container");

    moreVisible = !moreVisible;

    if (moreVisible) {
        moreContainer.style.display = "block";
        if (commentsVisible){
            toggleComments()
        }
        if (shareVisible){
            toggleShare()
        }
    } else {
        moreContainer.style.display = "none";
    }
}

// Obtén una referencia al botón de seguir
const seguirBoton = document.querySelector('.seguirBoton');

// Agrega un evento click al botón de seguir
seguirBoton.addEventListener('click', function() {
    // Verifica el texto actual del botón
    if (seguirBoton.textContent === '. Seguir') {
        // Si el texto es '. Seguir', cámbialo a '. Siguiendo'
        seguirBoton.textContent = '. Siguiendo';
    } else {
        // Si el texto no es '. Siguiendo', cámbialo nuevamente a '. Seguir'
        seguirBoton.textContent = '. Seguir';
    }
});
