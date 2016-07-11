import SlickModule from './slick'
import SlickController from './slick.controller';
import SlickComponent from './slick.component';
import SlickTemplate from './slick.html';

describe('Slick', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SlickModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SlickController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(SlickTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SlickComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SlickTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SlickController);
      });
  });
});
