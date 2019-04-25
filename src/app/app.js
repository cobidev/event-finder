import { EventBrite } from './eventbrite.js';
import { Interfaz } from './interfaz.js';

// Instanciar classes
const eventbrite = new EventBrite();
const ui = new Interfaz();

export const run = () => {
  // Event Listener para buscar eventos
  document.getElementById('buscarBtn').addEventListener('click', (e) => {
    e.preventDefault();
  
    // Leer el evento a buscar
    const inputEvento = document.getElementById('evento').value;
    // Leer la categoria a buscar
    const selectCategorias = document.getElementById('listado-categorias');
    const categoriaSeleccionada = selectCategorias.options[selectCategorias.selectedIndex].value;
  
    // Condicion si existen campos vacioss
    if(inputEvento !== '') {
      eventbrite.obtenerEventos(inputEvento, categoriaSeleccionada)
        .then(data => {
          // Validar que el arreglo de la data tenga 1 o mas eventos
          if(data.events.length > 0) {
            ui.limpiarResultados();
            ui.mostrarEventos(data);
            // Scroll Reveal
            sr.reveal('.evento', {
              duration: 500,
              origin: 'bottom',
              easing: 'ease-in'
            });
          } else {
            ui.mostrarMensaje('No hay eventos disponibles', 'alert alert-danger mt-4 text-center');
          }
  
        })
    } else {
      ui.mostrarMensaje('Faltan campos por llenar', 'alert alert-danger mt-4 text-center');
    }
  })
}