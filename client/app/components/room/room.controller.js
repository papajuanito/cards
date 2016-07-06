class RoomController {

  constructor($stateParams, Socket, Room) {
  	"ngInject";
    this.roomId = $stateParams.roomId;
    this.players = [];
    this.Socket = Socket;
    this.Room = Room;

    //connect to socket room;

    console.log('here');

    this.Socket.on('connect', () => {
      // this.socket.emit('room')
      this.setEvents();
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

  		// console.log(this);
  	});
  }
}

export default RoomController;
