var app = angular.module('App', ['ui.router', 'myCtrls']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/404');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/views/home.html',
            })
            .state('newArtist', {
                url: '/newartist',
                templateUrl: 'app/views/newArtist.html',
                controller: 'HomeCtrl'
            })
            .state('newRelease', {
                url: '/newrelease',
                templateUrl: 'app/views/newRelease.html',
                controller: 'musicCtrl'
            })
            .state('newSong', {
                url: '/newsong',
                templateUrl: 'app/views/newSong.html',
                controller: 'HomeCtrl'
            })
            .state('lyrics', {
                url: '/lyrics',
                templateUrl: 'app/views/lyrics.html',
                controller: 'lyricsCtrl'
            })
        $locationProvider.html5Mode(true);
    }])
    //4. you should be able to login and be persistent. auth user instead of giving a 404 error
    .config(['$httpProvider', function($httpProvider) {
        //add the AuthInterceptor in the list of interceptors
        //use the interceptor to add on the token from the service factory
        $httpProvider.interceptors.push('AuthInterceptor')
    }]);