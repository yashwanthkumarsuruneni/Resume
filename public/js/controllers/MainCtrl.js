angular.module('MainCtrl', []).controller('MainController', function($scope) {

	$scope.tagline = 'To the moon and back!';
		$scope.myInterval = 2000;
		$scope.noWrapSlides = true;
	 	$scope.slides = [{
	 		image:'../../../css/images/IMG_2018.png',
	 		text:'Hello My name is Yashwanth,I am a UI developer',
	 		id:0
	 	},
	 	{
	 		image:'../../../css/images/IMG_2018.png',
	 		text:'',
	 		id:1

	 	}];	

});