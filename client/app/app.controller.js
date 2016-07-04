class AppController {
	/**
	* @param {Deck} deck
	*/
	constructor(Deck) {
		"ngInject";
		this.deck = Deck;
		console.log(this.deck);
	}
}

export default AppController;