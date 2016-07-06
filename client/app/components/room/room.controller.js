class RoomController {

  constructor($stateParams, Socket, Room) {
  	"ngInject";
    this.roomId = $stateParams.roomId;
    this.players = [];
    this.Socket = Socket;
    this.Room = Room.resource;

    if(this.roomId) {
      this.retrieveRoom();
    }

    this.Socket.on('connect', () => {
      // this.socket.emit('room')
      this.setEvents();
    });
    
  }

  retrieveRoom() {
    this.Room.get({
      roomId: this.roomId
    }, (room) => {
      this.players = room.players;
    });
  }

  createRoom(Room) {
    "ngInject";
    console.log(Room);
  }

  addPlayer() {
    const data = {
      player: {
        name: this.newPlayer
      },
      room: this.roomId
    };

  	// this.players.push(data.player);

  	this.Socket.emit('player-room-connect', data, function() {
  		console.log('here');
  	});

  }

  setEvents() {
  	this.Socket.on('player-room-connect', (player) => {

  		console.log(player);

  		this.players.push(player);
  	});
  }
}

export default RoomController;
