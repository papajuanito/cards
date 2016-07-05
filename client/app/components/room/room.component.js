import template from './room.html';
import controller from './room.controller';

import './room.styl';

let roomComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default roomComponent;
