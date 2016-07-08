import angular from 'angular';

import Room from './room';
import Player from './player';

import Deck from './deck/deck';
import Socket from './socket';

let serviceModule = angular
	.module('app.services', [])
  .service({
  	Room,
    Player,
    Deck,
    Socket
  })

.name

export default serviceModule;
