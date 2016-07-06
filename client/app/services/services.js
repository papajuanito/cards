import angular from 'angular';

import Room from './room';

import Deck from './deck/deck';
import Socket from './socket';

let serviceModule = angular
	.module('app.services', [])
  .service({
  	Room,
    Deck,
    Socket
  })

.name

export default serviceModule;