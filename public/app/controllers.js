angular.module('myCtrls', ['somethingServices'])
    .controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {
        
        $scope.search = function(){
            $http({
                url: 'https://itunes.apple.com/search?&term=?' + $scope.artist,
                params: {
                    limit: 20
                }
            }).then(function succes(req) {
                console.log('what is this', req)
                $scope.test = req.data.results
            }).catch(function error(err) {
                console.log('what is the erro', err)
            });
        }
}])
    .controller('musicCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.search = function() {
            $http({
                url: 'https://itunes.apple.com/search?term=' + $scope.artist + '&entity=musicVideo'
            }).then(function success (req) {
                console.log('is this the music video?', req);
                $scope.test = req.data.results
            }).catch(function error (err) {
                console.log('give me an error baby..', err)
            });
        };
    }])
    .controller('lyricsCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.search = function() {
            
            $http({
                url: 'https://api.musixmatch.com/ws/1.1/matcher.lyrics.get', 
                    'params': {
                        'format': 'json',
                        'callback': 'callback',
                        'q_track': $scope.artist,
                        'q_artist': $scope.title,
                        'apikey': 'fdc9ad9d9fa9d41f48a88a72c770f024',
                    }
            }).then(function success (req) {
                console.log('give me my data', req.data.message.body.lyrics);
                $scope.test = req.data.message.body.lyrics;
            }).catch(function error (err) {
                console.log('error bro.', err);
            });
            $http({
                url: 'https://itunes.apple.com/search?&term=?' + $scope.artist,
                params: {
                    limit: 20
                }
            }).then(function succes(req) {
                console.log('what is this', req)
                $scope.test = req.data.results
            }).catch(function error(err) {
                console.log('what is the erro', err)
            });

        }

    }])
