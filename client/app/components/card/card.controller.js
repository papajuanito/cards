class CardController {
	constructor(Deck) {
		"ngInject";
		this.deck = Deck;
	}

	onRemoveClick() {

		console.log(this._card);

		// this.deck.remove(this._card);
	}
}

export default CardController;