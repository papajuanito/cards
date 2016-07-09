class HomeController {
	constructor(Room, $state) {
		"ngInject";

		this.Room = Room.resource;
		this.$state = $state;
	}

	createRoom() {
		let room = new this.Room();

		room.name = "test room";
		room.size = 2;

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

export default HomeController;
