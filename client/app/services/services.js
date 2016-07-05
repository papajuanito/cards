import angular from 'angular';

import Deck from './deck/deck';
import Socket from './socket';

let serviceModule = angular
	.module('app.services', [])
  .service({
    Deck,
    Socket
  })

.name

export default serviceModule;