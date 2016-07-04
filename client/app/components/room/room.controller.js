class RoomController {
  constructor($stateParams) {
  	"ngInject";
    this.name = 'Room';


    console.log($stateParams.roomId);
  }
}

export default RoomController;
