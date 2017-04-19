angular.module('myApp').directive('addsDir', function(){
	return {
		restrict:'A',
		link: function(scope,elem,attrs){
			$('.home-btn').on('click', function(){
				$('.words').fadeOut('slow');
			})
			//break
			TweenMax.to('.surveyAdd', 2.5, {
				 ease: Back.easeOut.config(1.7),
				 y: -500
			 });
	}}});
