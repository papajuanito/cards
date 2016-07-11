import template from './card.html';
import controller from './card.controller';
import './card.styl';


let cardComponent = {
  restrict: 'E',
  bindings: {
  	_card: '=card'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default cardComponent;
