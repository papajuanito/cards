import angular from 'angular';

import Home from './home/home';
import Card from './card/card';
import Room from './room/room';

let componentModule = angular.module('app.components', [
  Card,
  Room,
  Home
])
  
.name;

export default componentModule;
