import angular from 'angular';

import Home from './home/home';
import Card from './card/card';
import Room from './room/room';
import Slick from './slick/slick';

let componentModule = angular.module('app.components', [
  Card,
  Room,
  Slick,
  Home
])
  
.name;

export default componentModule;
