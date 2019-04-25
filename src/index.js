import { run } from './app/app.js';
import { EventBrite } from './app/eventbrite.js';
import { Interfaz } from './app/interfaz.js';

// Instanciar classes
const eventbrite = new EventBrite();
const ui = new Interfaz();

// Scroll Reveal
window.sr = ScrollReveal({
  reset: true
});

run();