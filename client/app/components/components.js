import angular from 'angular';
import Card from './card/card';

let componentModule = angular.module('app.components', [
  Card
])
  
.name;

export default componentModule;
