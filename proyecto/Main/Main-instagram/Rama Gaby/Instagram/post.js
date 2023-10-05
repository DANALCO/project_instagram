/*Post*/

const likeBottomPosts = document.querySelectorAll(".posts .bottoms .like");

likeBottomPosts.forEach((likeBottomPost) => {
  likeBottomPost.addEventListener("click", () => {
    const like = likeBottomPost.querySelector("svg");
    if (isFilled) {
      like.setAttribute("fill", "none");
    } else {
      like.setAttribute("fill", "#ff3040");
    }

    isFilled = !isFilled;
  });
});

/*Guardar post*/

const saveBottomPosts = document.querySelectorAll(".posts .bottoms .save");
saveBottomPosts.forEach((saveBottomPost) => {
  saveBottomPost.addEventListener("click", () => {
    const save = saveBottomPost.querySelector("svg");
    if (isFilled) {
      save.setAttribute("fill", "none");
    } else {
      save.setAttribute("fill", "black");
    }

    isFilled = !isFilled;
  });
});

/*Buscar aside */
const buscarDiv = document.getElementById("buscar-div");

// Inicializa una variable para rastrear el estado del botón
let isStrokeIncreased = false;

buscarDiv.addEventListener("click", function () {
  const svgElement = buscarDiv.querySelector("svg");

  // Obtiene el valor actual del atributo stroke-width
  const currentStrokeWidth = parseFloat(
    svgElement.getAttribute("stroke-width")
  );

  // Alterna entre dos valores de grosor de trazo (puedes ajustarlos)
  const newStrokeWidth = isStrokeIncreased ? 1.5 : 3.5;

  // Establece el nuevo valor del stroke-width en el elemento SVG
  svgElement.setAttribute("stroke-width", newStrokeWidth);

  // Actualiza el estado del botón
  isStrokeIncreased = !isStrokeIncreased;
});

/*Seguir aside derecho*/
document.addEventListener("DOMContentLoaded", function () {
  var botonesSeguir = document.querySelectorAll(".btn-seguir");
  botonesSeguir.forEach(function (botonSeguir) {
    var activado = false; // Variable de estado inicialmente desactivada

    botonSeguir.addEventListener("click", function () {
      if (!activado) {
        // Si está desactivado
        botonSeguir.innerText = "Siguiendo";
        botonSeguir.style.color = "grey";
      } else {
        // Si está activado
        botonSeguir.innerText = "Seguir";
        botonSeguir.style.color = "#3498db";
      }
      // Alterna el estado
      activado = !activado;
    });
  });
});

/*Menu buscar*/
const buscarContainer = document.querySelector(".menu_buscar");
const buscar = document.querySelector(".buscar");

buscar.addEventListener("click", () => {
  buscarContainer.classList.toggle("activado");
});
