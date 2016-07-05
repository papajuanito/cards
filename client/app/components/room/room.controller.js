class RoomController {

  constructor($stateParams, Socket) {
  	"ngInject";
    this.room = 'room-' + $stateParams.roomId;
    this.players = [];
    this.socket = Socket;

    //connect to socket room;

    console.log(this.room);


    this.socket.on('connect', () => {
      // this.socket.emit('room')
      this.setEvents();
    });
    
  }

  addPlayer() {

  	console.log('Adding Player1');

    const data = {
      player: {
        name: this.newPlayer
      },
      room: this.room
    };

  	this.players.push(data.player);

  	this.socket.emit('player-room-connect', data, function() {
  		console.log('here');
  	});

  }

  setEvents() {
  	this.socket.on('player-join', (player) => {

  		console.log(player);

  		this.players.push(player);

  		// console.log(this);
  	});
  }
}

export default RoomController;
