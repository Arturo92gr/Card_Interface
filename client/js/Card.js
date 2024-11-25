export class Card {
    constructor(numero, palo) {
        this.element = document.createElement('div');
        this.element.classList.add('card');
        this.element.dataset.numero = numero;
        this.element.dataset.palo = palo;
        this.element.id = `card-${palo}-${numero}`;
        this.element.innerText = `${numero} de ${palo}`;
    }
}