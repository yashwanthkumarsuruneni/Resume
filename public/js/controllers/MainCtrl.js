angular.module('MainCtrl', []).controller('MainController', function($scope) {

	$scope.tagline = 'To the moon and back!';
		$scope.myInterval = 5000;
		$scope.noWrapSlides = true;
	 	$scope.slides = [{
	 		image:'../../../css/images/IMG_2018.png',
	 		text:'email',
	 		id:0
	 	},
	 	{
	 		image:'../../../css/images/IMG_2018.png',
	 		text:'email2',
	 		id:1

	 	}];	

});