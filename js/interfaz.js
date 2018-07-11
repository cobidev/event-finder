class Interfaz {
  constructor() {
    // Inicializa la app al instanciar
    this.init();
    // Div donde se motrara los resultados
    this.listado = document.getElementById('resultado-eventos');
  }

  // Esta funcion llamara todos los metodos
  init() {
    this.imprimirCategorias();
  }

  // Imprimir listado de categorias en un <select>
  imprimirCategorias() {
    const listaCategorias = eventbrite.obtenerCategorias()
      .then(data => {
        // Dentro del obj data, obtenemos solo el arreglo de categorias
        const categorias = data.categories;
        // Obtenemos el select
        const selectCategorias = document.getElementById('listado-categorias');
        
        // Recorremos cada categoria para plasmarla en un <option>
        categorias.forEach(categoria => {
          const option = document.createElement('option');
          option.value = categoria.id;
          option.appendChild(document.createTextNode(categoria.name));

          // Agramos el option al select
          selectCategorias.appendChild(option);
        });
      })
      .catch(err => console.log(err));
  }

  // Mostrar eventos
  mostrarEventos(eventos) {
    // Obtenemos el arreglo de eventos (el parametro del metodo es el JSON del Request)
    const listaEventos = eventos.events;

    // Recorremos la lista de eventos para mostrar c/u
    listaEventos.forEach(evento => {
      this.listado.innerHTML += `
        <div class="evento col-md-4 mb-4">
          <div class="card material-card">
            <img class="img-fluid" src="${evento.logo.url !== null ? evento.logo.url : '' }">
            <div class="card-body">
              <h2>${evento.name.text}</h2>
              <p class="lead text-info">Event Information</p>
              <p>${evento.description.text.substring(0, 280)}...</p>
              <span class="badge badge-secondary">Time & Hour: ${evento.start.local}</span>
              <a href="${evento.url}" class="btn btn-primary btn-block mt-4" targe="_blank">Buy Tickets</a>
            </div>
          </div>
        </div>
      `;
    })
  }

  // Eliminar listado de eventos al volver a cargar
  limpiarResultados() {
    this.listado.innerHTML = '';
  }

  // Mostrar div con mensaje, toma 2 parametros (mensaje y las clases)
  mostrarMensaje(mensaje, clases) {
    // Creamos el div que contendra el mensaje y le agregamos las clases
    const div = document.createElement('div');
    div.classList = clases;
    div.appendChild(document.createTextNode(mensaje));
    // Seleccionamos donde queremos agregarlo
    const divBuscador = document.querySelector('#buscador');
    divBuscador.appendChild(div);

    setTimeout(() => {
      div.remove();
    }, 3000);
  }
}