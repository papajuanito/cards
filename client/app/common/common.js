import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';

import Slick from './slick/slick';

let commonModule = angular.module('app.common', [
	Slick
])
  
.name;

export default commonModule;
