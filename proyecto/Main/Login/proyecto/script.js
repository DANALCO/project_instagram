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
