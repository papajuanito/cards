import angular from 'angular';
import ngResource from 'angular-resource';
import uiRouter from 'angular-ui-router';
import Components from './components/components';
import services from './services/services';
import 'normalize.css';

import AppComponent from './app.component';

angular.module('app', [
  Components,
  services,
  ngResource
])
.config(($locationProvider) => {
  "ngInject";
  // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
  // #how-to-configure-your-server-to-work-with-html5mode
  $locationProvider.html5Mode(true).hashPrefix('!');
})

.component('app', AppComponent);
