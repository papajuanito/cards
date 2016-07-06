class AppController {
	/**
	* @param {Deck} deck
	*/
	constructor(Room, $state) {
		"ngInject";

		this.$state = $state;

		this.Room = Room.resource;
	}

	createRoom() {
		let room = new this.Room();

		room.name = "test room";

		room.$save((room) => {
			console.log(room._id);

			this.$state.go('room', {
				roomId: room._id
			}, {
				location: true
			});

		});
	}
}

export default AppController;