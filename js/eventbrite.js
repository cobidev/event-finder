class EventBrite {
  constructor() {
    this.token_auth = '3JNVWOCJV27ZXVYE4OHG';
    this.ordenar = 'date';
  }
  // Obtiene solo las categorias de la REST API
  async obtenerCategorias() {
    // GET Request de la API
    const respueta = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);
    // Esperar la respuesta y convertirlo a JSON
    const categorias = await respueta.json();
    // Retornar JSON
    return categorias;
  }

  // Obtiene los eventos de la REST API
  async obtenerEventos(evento, categoria) {
    // GET Request de la API
    const respueta = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${evento}&sort_by=${this.ordenar}&categories=${categoria}&token=${this.token_auth}`);
    // Esperar la respuesta y convertirlo a JSON
    const eventos = await respueta.json();
    // Retornar JSON
    return eventos;
  }
}