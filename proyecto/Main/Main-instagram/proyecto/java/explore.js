        // Obtén una referencia a la división oscuro
        const oscuro = document.querySelector('.oscuro');

        // Obtén una referencia a todas las cartas y recuadros emergentes
        const cartas = document.querySelectorAll('.carta');
        const recuadrosEmergentes = document.querySelectorAll('.recuadro-emergente');

        // Agrega un controlador de clic a cada carta
        cartas.forEach((carta, index) => {
            carta.addEventListener('click', () => {
                // Muestra el recuadro emergente correspondiente al hacer clic
                const recuadroEmergente = recuadrosEmergentes[index];
                recuadroEmergente.style.display = 'flex';
                oscuro.style.display = 'flex';

                // Configura la imagen en el recuadro emergente
                const imagenCarta = carta.querySelector('.fondo-carta');
                const imagenRecuadro = recuadroEmergente.querySelector('img');
                imagenRecuadro.src = imagenCarta.src;
            });
        });

        // Agrega un controlador de clic al botón de cierre en ambos recuadros emergentes
        const botonesCerrar = document.querySelectorAll('.cerrar-recuadro');

        botonesCerrar.forEach((botonCerrar) => {
            botonCerrar.addEventListener('click', () => {
                // Oculta todos los recuadros emergentes
                recuadrosEmergentes.forEach((recuadroEmergente) => {
                    recuadroEmergente.style.display = 'none';
                });
                oscuro.style.display = 'none';
            });
        });

        function toggleSeguir(button) {
            // Encuentra el botón más cercano al que se hizo clic
            const seguirBoton = button.closest(".seguirBoton");
            
            // Cambia el texto del botón entre ". Seguir" y ". Siguiendo"
            if (seguirBoton.textContent === '. Seguir') {
                seguirBoton.textContent = '. Siguiendo';
            } else {
                seguirBoton.textContent = '. Seguir';
            }
        }

        function addComment(recuadroId) {
            const commentInput = document.querySelector(`#${recuadroId} .comment-input`);
            const commentText = commentInput.value.trim();

            if (commentText !== "") {
                const commentsDiv = document.querySelector(`#${recuadroId} .comments`);
                const newComment = document.createElement("div");
                newComment.textContent = commentText;
                commentsDiv.appendChild(newComment);
                commentInput.value = "";
            }
        }


        // Agrega un controlador de clic a la división oscuro para ocultar recuadros emergentes
        oscuro.addEventListener('click', () => {
            // Oculta todos los recuadros emergentes
            recuadrosEmergentes.forEach((recuadroEmergente) => {
                recuadroEmergente.style.display = 'none';
            });

            // Oculta la división oscuro
            oscuro.style.display = 'none';
        });

        // Variables para rastrear el estado de visibilidad de "more", "share" y "emoji"
        let moreVisible = false;
        let shareVisible = false;
        let emojiVisible = false;

        // Obtén referencias a elementos adicionales
        const oscuro2 = document.querySelector('.oscuro2');
        const mas = document.querySelector('.more-container');
        const share = document.querySelector('.share-container');
        const emoji = document.querySelector('.emoji-container');

        // Función para mostrar u ocultar "more"
        function toggleMore() {
            moreVisible = !moreVisible;

            if (moreVisible) {
                oscuro2.style.display = "flex";
                mas.style.display = "block";
            } else {
                oscuro2.style.display = "none";
                mas.style.display = "none";
            }
        }

        // Función para mostrar u ocultar "share"
        function toggleShare() {
            shareVisible = !shareVisible;

            if (shareVisible) {
                oscuro2.style.display = "flex";
                share.style.display = "block";
            } else {
                oscuro2.style.display = "none";
                share.style.display = "none";
            }
        }

        // Función para mostrar u ocultar "share"
        function toggleEmoji() {
            emojiVisible = !emojiVisible;

            if (emojiVisible) {
                emoji.style.display = "block";
            } else {
                emoji.style.display = "none";
            }
        }
        
        // Agrega controladores de clic a los botones para cerrar "share" y "more"
        const cerrarShare = document.querySelector(".salirShare");
        const cerrarMore = document.querySelector(".salirMore");

        cerrarShare.addEventListener("click", toggleShare);
        cerrarMore.addEventListener("click", toggleMore);

        // Función para cambiar la imagen del corazón y aplicar la animación
        function cambiarImagen(corazon) {
            // Obtiene el valor del atributo personalizado "data-imagen-actual"
            let imagenActual = parseInt(corazon.getAttribute("data-imagen-actual"));

            // Cambia la imagen y actualiza el valor del atributo personalizado
            if (imagenActual === 1) {
                corazon.src = "../assets/iconos/heart red.png";
                imagenActual = 2;
            } else {
                corazon.src = "../assets/iconos/heart.png";
                imagenActual = 1;
            }

            // Actualiza el valor del atributo personalizado en el botón de corazón
            corazon.setAttribute("data-imagen-actual", imagenActual);

            // Aplica la animación "palpitar"
            corazon.style.animation = "palpitar 0.3s";
            setTimeout(() => {
                corazon.style.animation = ""; // Restaura la animación
            }, 300);
        }

        // Función para manejar el evento mouseout del corazón
        function onMouseOut(corazon) {
            const imagenActual = parseInt(corazon.getAttribute("data-imagen-actual"));
            if (imagenActual === 1) {
                // Aplica la animación "palpitar" en caso de mouseout
                corazon.style.animation = "palpitar 0.3s";
                setTimeout(() => {
                    corazon.style.animation = ""; // Restaura la animación
                }, 300);
            }
        }

        // Agrega eventos click y mouseout a los botones de corazón en todos los recuadros emergentes
        const botonesCorazon = document.querySelectorAll(".corazon");
        botonesCorazon.forEach((botonCorazon) => {
            botonCorazon.addEventListener("click", () => {
                cambiarImagen(botonCorazon);
            });

            botonCorazon.addEventListener("mouseout", () => {
                onMouseOut(botonCorazon);
            });
        });

        // Agrega un controlador de clic al botón de guardar
        const botonesGuardar = document.querySelectorAll(".guardar");

        botonesGuardar.forEach((botonGuardar) => {
            botonGuardar.addEventListener("click", () => {
                cambiarGuardado(botonGuardar);
            });
        });

        // Función para cambiar el estado del botón de guardar específico
        function cambiarGuardado(botonGuardar) {
            const recuadro = botonGuardar.closest(".recuadro-emergente");
            const guardar = recuadro.querySelector(".guardar");

            // Cambia la imagen y el estado actual
            if (guardar.getAttribute("data-guardado-actual") === "1") {
                guardar.src = "../assets/iconos/bookmark black.png";
                guardar.setAttribute("data-guardado-actual", "2");
            } else {
                guardar.src = "../assets/iconos/bookmark.png";
                guardar.setAttribute("data-guardado-actual", "1");
            }
        }

        // Agrega un controlador de clic a la división oscuro2 para ocultar "more" o "share"
        oscuro2.addEventListener('click', () => {
            if (moreVisible) {
                toggleMore();
            } 
            if (shareVisible) {
                toggleShare();
            } 
        });
// Obtén una referencia al botón de idiomas y a la lista de idiomas por su ID.
const botonIdiomas = document.getElementById('botonIdiomas');
const listaIdiomas = document.getElementById('listaIdiomas');

// Agrega un evento click al botón de idiomas para mostrar u ocultar la lista de idiomas.
botonIdiomas.addEventListener('click', function() {
  if (listaIdiomas.style.display === 'none' || listaIdiomas.style.display === '') {
    // Si la lista está oculta o no tiene estilo de visualización, muéstrala.
    listaIdiomas.style.display = 'block';
  } else {
    // Si la lista está visible, ocúltala.
    listaIdiomas.style.display = 'none';
  }
});

// Agrega un evento click al documento para ocultar la lista de idiomas si se hace clic fuera de ella.
document.addEventListener('click', function(event) {
  if (event.target !== botonIdiomas && !listaIdiomas.contains(event.target)) {
    // Si se hace clic fuera del botón de idiomas y la lista de idiomas, oculta la lista.
    listaIdiomas.style.display = 'none';
  }
});

// Obtén todos los elementos <li> dentro de la lista de idiomas.
const elementosLista = listaIdiomas.getElementsByTagName('li');

// Agrega un evento click a cada elemento de la lista para ocultar la lista cuando se hace clic en un idioma.
for (let i = 0; i < elementosLista.length; i++) {
  elementosLista[i].addEventListener('click', function() {
    // Oculta la lista de idiomas cuando se hace clic en un idioma.
    listaIdiomas.style.display = 'none';
  });
}