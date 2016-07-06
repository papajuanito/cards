class Room {
	constructor($resource) {
		"ngInject";

		this.resource = $resource('http://localhost:3012/api/rooms/:roomId', {roomId: '@id'});
	}
}

export default Room;