angular.module('myApp').service('myService', function($http){
	this.getPhoto = function (){
		return $http({
		url: 'https://newsapi.org/v1/articles?source=national-geographic&sortBy=top&apiKey=c540556d4e96488dade1fd06081fff3f',
    method: 'GET'
}).then(function(response) {
console.log(response)
	return response;

})
}
})
