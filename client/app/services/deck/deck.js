import Card from './card';

class Deck {
	constructor() {
		this.cards = [];

		for (let x = 0; x < 5; x++) {
			const card = new Card(x, 'white', 'this is a test - ' + Math.random());
			this.cards.push(card);
		}
	}

	remove(removedCard) {
		this.cards = this.cards.filter((card) => {
			return card !== removedCard;
		});
	}
}

export default Deck;