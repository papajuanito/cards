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

    const playerId = sessionStorage.getItem('player');

    if(playerId) {
      Player.resource.get({
        roomId: this.id,
        playerId: playerId
      }, (player) => {
        this.player = player;
        console.log(this.player);
      });
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
      this.status = room.status;
      this.Socket.emit('room-connect', {
        room: this.id
      });

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

      this.player = player;

      sessionStorage.setItem('player', this.player._id);

      this.Socket.emit('player-room-connect', {
        player: this.player,
        broadcast: true
      });
    });
  }

  setEvents() {
  	this.Socket.on('player-room-connect', (player) => {
  		this.players.push(player);
      console.log(this.players);
  	});

    this.Socket.on('player-room-closed', (room) => {
      console.log('Start play', 'Room Closed');
      this.status = room.status;
    })
  }
}

export default RoomController;
