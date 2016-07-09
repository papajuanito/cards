class RoomController {

  constructor($stateParams, Socket, Room, Player, $state) {
  	"ngInject";
    this.id = $stateParams.roomId;
    this.players = [];


    //injected
    this.Socket = Socket;
    this.Room = Room.resource;
    this.$state = $state;
    this.newPlayer = new Player.resource();

    if(this.id) {
      this.retrieveRoom();
    }

    this.Socket.on('connect', () => {
      // this.socket.emit('room')
      this.setEvents();
    });

  }

  retrieveRoom() {
    this.Room.get({
      roomId: this.id
    }, (room) => {
      this.size = room.size;
      this.players = room.players;

      this.missing = new Array(this.size - this.players.length);

      console.log(this.missing);

      console.log(room);

    }, (response) => {
      this.$state.go('home');
    });
  }

  createRoom(Room) {
    "ngInject";
    console.log(Room);
  }

  addPlayer() {
    this.newPlayer.$save({
      roomId: this.id
    }, player => {

      if(!player._id) return;

      this.Socket.emit('player-room-connect', player);
    });
  }

  setEvents() {
  	this.Socket.on('player-room-connect', (player) => {
  		this.players.push(player);
      this.missing = new Array(this.size - this.players.length);
  	});
  }
}

export default RoomController;
