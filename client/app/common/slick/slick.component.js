import template from './slick.html';
import controller from './slick.controller';
import './slick.styl';

export default function($timeout) {
	return {
	  restrict: 'AEC',
	  scope: {
	  	initOnload: '@',
	    data: '=',
	    currentIndex: '=',
	    accessibility: '@',
	    adaptiveHeight: '@',
	    arrows: '@',
	    asNavFor: '@',
	    appendArrows: '@',
	    appendDots: '@',
	    autoplay: '@',
	    autoplaySpeed: '@',
	    centerMode: '@',
	    centerPadding: '@',
	    cssEase: '@',
	    customPaging: '&',
	    dots: '@',
	    draggable: '@',
	    easing: '@',
	    fade: '@',
	    focusOnSelect: '@',
	    infinite: '@',
	    initialSlide: '@',
	    lazyLoad: '@',
	    onBeforeChange: '&',
	    onAfterChange: '&',
	    onInit: '&',
	    onReInit: '&',
	    onSetPosition: '&',
	    pauseOnHover: '@',
	    pauseOnDotsHover: '@',
	    responsive: '=',
	    rtl: '@',
	    slide: '@',
	    slidesToShow: '@',
	    slidesToScroll: '@',
	    speed: '@',
	    swipe: '@',
	    swipeToSlide: '@',
	    touchMove: '@',
	    touchThreshold: '@',
	    useCSS: '@',
	    variableWidth: '@',
	    vertical: '@',
	    prevArrow: '@',
	    nextArrow: '@'
	  },
	  controller,
	  controllerAs: 'vm',
	  bindToController: {},
	  link: function(scope, element, attrs) {
	  	$timeout(function() {

	  		var config = {
				infinite: scope.infinite !== 'false',
				slidesToShow: scope.slidesToShow != null ? parseInt(scope.slidesToShow, 10) : 1,
				slidesToScroll: scope.slidesToScroll != null ? parseInt(scope.slidesToScroll, 10) : 1,
				centerMode: scope.centerMode === 'true',
				arrows: scope.arrows !== 'false'
			};

			console.log(config);

	  		$(element).slick(config, 100);
	  	});
	  }
	};
};
