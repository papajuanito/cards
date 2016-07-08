class Player {
  constructor($resource) {
    "ngInject";

    this.resource = $resource('http://localhost:3012/api/rooms/:roomId/players/:playerId',
      {
        roomId: '@roomId',
        playerId: '@playerId'
      }
    );
  }
}

export default Player;
