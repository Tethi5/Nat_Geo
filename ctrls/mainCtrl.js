angular.module('myApp').controller('mainCtrl', function($scope, myService){
	$scope.getPhoto = function(){
	myService.getPhoto().then(function(response){
		$scope.data = response.data.articles
		console.table($scope.data)
	})
}
$scope.getPhoto();
});
