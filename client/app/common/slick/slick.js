import angular from 'angular';
import uiRouter from 'angular-ui-router';
import slickComponent from './slick.component';

let slickModule = angular.module('slick', [])

.directive('slick', ['$timeout', slickComponent])

.name;

export default slickModule;
