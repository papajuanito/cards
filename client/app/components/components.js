import angular from 'angular';
import Card from './card/card';
import Room from './room/room';

let componentModule = angular.module('app.components', [
  Card,
  Room
])
  
.name;

export default componentModule;
