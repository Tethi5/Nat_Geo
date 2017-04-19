angular.module('myApp').service('myService', function($http) {
            this.getPhoto = function() {
                return $http({
                    url: 'https://newsapi.org/v1/articles?source=national-geographic&sortBy=top&apiKey=c540556d4e96488dade1fd06081fff3f',
                    method: 'GET'
                }).then(function(response) {
                    console.log(response)
                    return response;

                })
            }
            this.getAllPhotos = function() {
                return $http({
                    method: 'GET',
                    url: '/api/photo'
                })
            }
            this.postPhoto = function(author, hashtags, comments, image_url) {
                return $http({
                    method: 'POST',
                    url: 'http://localhost:3001/api/photo',
                    data: {
                        name: author,
                        filterName: hashtags,
												extra: comments,
                        image: image_url,


                    }
                })
							}

							this.postPicture = function(picture){
								return $http({
									method: 'POST',
									url: 'http://localhost:3001/api/picture',
									data: {
										main: picture
									}
								})
							}
            });
