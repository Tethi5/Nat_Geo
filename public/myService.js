angular.module('myApp').service('myService', function($http) {
    this.getPhoto = function() {
        return $http({
            url: 'https://newsapi.org/v1/articles?source=national-geographic&sortBy=top&apiKey=c540556d4e96488dade1fd06081fff3f',
            method: 'GET'
        }).then(function(response) {

            return response;

        })
    }
    // this.getAllPhotos = function() {
    //     return $http({
    //         method: 'GET',
    //         url: '/api/photo'
    //     })
    // }
    this.postPhoto = function(author, hashtags, comments, image_url) {
        return $http({
            method: 'POST',
            url: 'http://localhost:3001/api/photo',
            data: {
                name: author,
                filterName: hashtags,
                extra: comments,
                filename: image_url,


            }
        })
    }

    this.getAllPhotos = function() {
        return $http({
            method: 'GET',
            url: 'http://localhost:3001/api/picture'
        })
    }


});
