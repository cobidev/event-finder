class EventBrite {
  constructor() {
    this.ordenar = 'date';
  }
  // Obtiene solo las categorias de la REST API
  async obtenerCategorias() {
    // GET Request de la API
    const init = {
      method: 'GET',
      mode: 'cors',
    }
    const respueta = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${process.env.EVENT_BRITE_API}`, init);
    // Esperar la respuesta y convertirlo a JSON
    const categorias = await respueta.json();
    // Retornar JSON
    return categorias;
  }

  // Obtiene los eventos de la REST API
  async obtenerEventos(evento, categoria) {
    // GET Request de la API
    const init = {
      method: 'GET',
      mode: 'cors',
    }
    const respueta = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${evento}&sort_by=${this.ordenar}&categories=${categoria}&token=${process.env.EVENT_BRITE_API}`, init);
    // Esperar la respuesta y convertirlo a JSON
    const eventos = await respueta.json();
    // Retornar JSON
    return eventos;
  }
}

export default EventBrite;