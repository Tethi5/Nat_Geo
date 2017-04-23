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
  var container = $('.theAd');
    var minTop = $('.ad').outerHeight();
    var maxTop = $('.whiteSpace').offset().top - container.outerHeight();

   var winScroll = $(this).scroll(function() {
container.css('top', Math.min( Math.max(minTop, $(document).scrollTop()), maxTop ));
    });
   console.log(winScroll);

   // Fixed on scroll Ad
  //  if (winScroll > 766) {
  //      $('.theAd').css({
  //          'position': 'fixed',
  //          'top': 5
   //
  //      })
  //   } else if (winScroll <= 765) {
  //     $('.theAd').css({
  //       'position': 'static',
  //       'top': 5
   //
  //     })
  //   }
  //    if (winScroll > 4430){
  //       $('.theAd').css({
  //         'position': 'static',
   //
   //
  //       })
  //     } else if (winScroll >= 4440){
  //       $('.theAd').css({
  //         'position': 'fixed'
  //       })
  //     }

    });
  $scope.bigAd1 = true;

  $scope.hideIt = function(){
    $scope.bigAd1 = false;
  }
  $scope.showIt = function(){
    $scope.bigAd1 = true;
  }

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




$scope.stream1 = true;
$scope.stream2 = false;
$scope.stream3 = false;
$scope.stream4 = false;
$scope.stream5 = false;

$scope.showStream1 = function(){
$scope.stream1 = true;
$scope.stream2 = false;
$scope.stream3 = false;
$scope.stream4 = false;
$scope.stream5 = false;
console.log('Yea it hit')
}
$scope.showStream2 = function(){
  $scope.stream1 = false;
  $scope.stream2 = true;
  $scope.stream3 = false;
  $scope.stream4 = false;
  $scope.stream5 = false;
}
$scope.showStream3 = function(){
  $scope.stream1 = false;
  $scope.stream2 = false;
  $scope.stream3 = true;
  $scope.stream4 = false;
  $scope.stream5 = false;
}
$scope.showStream4 = function(){
  $scope.stream1 = false;
  $scope.stream2 = false;
  $scope.stream3 = false;
  $scope.stream4 = true;
  $scope.stream5 = false;
}
$scope.showStream5 = function(){
  $scope.stream1 = false;
  $scope.stream2 = false;
  $scope.stream3 = false;
  $scope.stream4 = false;
  $scope.stream5 = true;
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
