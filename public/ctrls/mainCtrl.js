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

// Jquery for scroll from top
$(window).scroll(function() {
   var winScroll = $(this).scrollTop();
   

   // Fixed on scroll Ad
   if (winScroll > 400) {
       $('.theAd').css({
           'position': 'fixed',
           'top': 5

       })
    } else if (winScroll <= 399) {
      $('.theAd').css({
        'position': 'static',
        'top': 5

      })
    }
     if (winScroll > 4072){
        $('.theAd').css({
          'position': 'static',
          'top': 4075
        })
      } else if (winScroll >= 4073){
        $('.theAd').css({
          'position': 'static',
          'top': 5
        })
      }
    });


  $scope.vid1 = true;
  $scope.vid2 = false;
  $scope.vid3 = false;
  $scope.vid4 = false;
  $scope.vid5 = false;

  $scope.showVid1 = function(){
     $scope.vid1 = true;
     $scope.vid2 = false;
     $scope.vid3 = false;
     $scope.vid4 = false;
     $scope.vid5 = false;

  }
$scope.showVid2 = function(){
  $scope.vid1 = false;
  $scope.vid2 = true;
  $scope.vid3 = false;
  $scope.vid4 = false;
  $scope.vid5 = false;
}
$scope.showVid3 = function(){
  $scope.vid1 = false;
  $scope.vid2 = false;
  $scope.vid3 = true;
  $scope.vid4 = false;
  $scope.vid5 = false;
}
$scope.showVid4 = function(){
  $scope.vid1 = false;
  $scope.vid2 = false;
  $scope.vid3 = false;
  $scope.vid4 = true;
  $scope.vid5 = false;
}
$scope.showVid5 = function(){
  $scope.vid1 = false;
  $scope.vid2 = false;
  $scope.vid3 = false;
  $scope.vid4 = false;
  $scope.vid5 = true;
}

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
