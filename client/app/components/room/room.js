import angular from 'angular';
import uiRouter from 'angular-ui-router';
import roomComponent from './room.component';

let roomModule = angular.module('room', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('room', {
      url: '/room',
      template: '<room></room>'
    });
})

.component('room', roomComponent)
  
.name;

export default roomModule;
