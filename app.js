angular.module('myApp', ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('/', {
                url: '/home',
                templateUrl: './views/home.html'
            })
            .state('latest', {
                url: '/latest',
                templateUrl: './views/latest_stories.html'
            })
    })
