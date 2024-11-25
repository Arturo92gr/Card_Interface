import { uiDrag } from "./uiDrag.js";
import { Card } from "./Card.js";

const baraja = document.querySelector('.baraja');

const palos = ['oros', 'espadas', 'copas', 'bastos'];
palos.forEach(palo => {
    for (let numero = 1; numero <= 12; numero++) {
        const card = new Card(numero, palo);
        baraja.appendChild(card.element);
    }
});

// Permitir el arrastre dentro del contenedor
uiDrag.init(".contenedor, .baraja", ".card");