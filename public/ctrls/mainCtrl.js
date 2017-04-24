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

    $scope.data = response.data.articles

})

// Jquery for scroll from to
  $(window).scroll(function() {
   var winScroll = $(this).scrollTop();
   console.log(winScroll)

if (winScroll > 776) {
     $('.theAd').css({
         'position': 'fixed',
         'top': 5
     });
 } else {
     $('.theAd').css({
        "position": 'static',
        'top': 5,
     });
 }
 if (winScroll > 4440 ) {
     $('.theAd').css({
         'position': 'absolute',
         'top': '595vh',
     });
 }


 if (winScroll > 776) {
      $('.theAdPhoto').css({
          'position': 'fixed',
          'top': 5
      });
  } else {
      $('.theAdPhoto').css({
         "position": 'static',
         'top': 5,
      });
  }
  if (winScroll > 1400 ) {
      $('.theAdPhoto').css({
          'position': 'absolute',
          'top': '105vh',
      });
  }
 })

  //  var winScroll = $(this).scrollTop();
  //  console.log(winScroll);
   //
  //  // Fixed on scroll Ad
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
  //         if ($window.scrollTop() > pos) {
  //             $this.css({
  //                 position: 'absolute',
  //                 top: pos
  //             });
  //         } else {
  //             $this.css({
  //                 position: 'fixed',
  //                 top: 0
  //             });
  //         }
  //     }

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
