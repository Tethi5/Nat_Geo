angular.module('myApp', ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: './views/home.html',
            })
            .state('latest', {
                url: '/latest',
                templateUrl: './views/latest_stories.html'
            })
            .state('photo', {
              url: '/photo',
              templateUrl: './views/photo.html'
            })
            .state('climate', {
              url: '/climate',
              templateUrl: './views/climate.html'
            })

        $urlRouterProvider
        .otherwise('/')

    });
