export class Card {
    static palos = ['diamantes', 'corazones', 'picas', 'treboles'];
    
    constructor(numero, palo) {
        this.element = document.createElement('div');
        this.element.classList.add('card');
        this.element.dataset.numero = numero;
        this.element.dataset.palo = palo;
        this.element.id = `card-${palo}-${numero}`;
        
        const symbol = {
            'diamantes': '♦',
            'corazones': '♥',
            'picas': '♠',
            'treboles': '♣'
        }[palo];

        this.element.innerHTML = `
            <span class="numero top-left">${numero}</span>
            <span class="palo top-right">${symbol}</span>
            <span class="palo bottom-left">${symbol}</span>
            <span class="numero bottom-right">${numero}</span>
        `;
    }

    static createDeck() {
        let deck = [];
        this.palos.forEach(palo => {
            for (let numero = 1; numero <= 12; numero++) {
                deck.push(new Card(numero, palo));
            }
        });
        return deck;
    }

    static shuffleDeck(deck) {
        let currentIndex = deck.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [deck[currentIndex], deck[randomIndex]] = [deck[randomIndex], deck[currentIndex]];
        }
        return deck;
    }

    static dealCards(container) {
        const deck = this.shuffleDeck(this.createDeck());
        let offset = 0;
        deck.forEach(card => {
            card.element.style.position = 'absolute';
            card.element.style.left = `${offset}px`;
            card.element.style.top = '50%';
            card.element.style.transform = 'translateY(-50%)';
            container.appendChild(card.element);
            offset += 20;
        });
        return deck;
    }
}