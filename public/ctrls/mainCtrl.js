angular.module('myApp').controller('mainCtrl', function($scope, myService) {
    $scope.getPhoto = function() {
        myService.getPhoto().then(function(response) {
          console.log('working')
            $scope.data = response.data.articles
            console.log($scope.data)
        })
    }
    // $scope.photos = [];
    // $scope.getPhoto().then(function(response) {
    //     $scope.data = response.data.map(function(x) {
    //         $scope.photos.push(x)
    //     })
    // });

    //////MY API's///////////s
    $scope.add = function() {
					myService.postPhoto($scope.author, $scope.filter,$scope.comments, $scope.image)
    }
$scope.send = function() {
  myService.postPicture($scope.picture)
}
myService.getAllPhotos();
myService.getPhoto().then(function(response) {
  console.log('working')
    $scope.data = response.data.articles
    console.log($scope.data)
})
});



// var app = require('../index');
// var Db = app.get('Db');
//
// module.exports = {
// 	getUser_photo: function(req, res, next){
// 		Db.getUser_photo([], function(err, photo){
// 			if(err){
// 				return res.status(500).send(err)
// 			}
// 			else {
// 				res.send(photo)
// 			}
// 		})
// 	}
// }
// });
