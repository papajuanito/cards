import angular from 'angular';
import cardComponent from './card.component';

let cardModule = angular.module('card', [])
.component('card', cardComponent)
  
.name;

export default cardModule;
