class CardController {
	constructor(Deck) {
		"ngInject";
		this.deck = Deck;
	}

	onRemoveClick() {

		console.log('here');

		this.deck.remove(this._card);
	}
}

export default CardController;