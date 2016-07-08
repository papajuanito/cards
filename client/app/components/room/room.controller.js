class RoomController {

  constructor($stateParams, Socket, Room, Player) {
  	"ngInject";
    this.roomId = $stateParams.roomId;
    this.players = [];
    this.Socket = Socket;
    this.Room = Room.resource;
    // this.Player = Player.resource;

    this.newPlayer = new Player.resource();

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
    this.newPlayer.$save({
      roomId: this.roomId
    }, player => {

      if(!player._id) return;

      this.Socket.emit('player-room-connect', player);
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
