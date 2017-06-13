angular.module('myCtrls', ['somethingServices'])
    .controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {
        var searchTerm = 'drake'
        var track = 'the motto'
        $http({
        url: 'http://api.musixmatch.com/ws/1.1/matcher.lyrics.get',
        params: {
        callback: 'callback',
        format: 'json',
            'apikey': 'fdc9ad9d9fa9d41f48a88a72c770f024',
            'q_artist': searchTerm,
            'q_track': track 
        }
    }).then(function succes(req) {
        console.log('what is this', req)
        $scope.test = req.data.message.body.lyrics
    }).catch(function error(err) {
        console.log('what is the erro', err)
    });
}])
    .controller('ArtistCtrl', ['$scope', '$http', function($scope, $http) {
        $http({
            url: 'http://api.musixmatch.com/ws/1.1/artist.get',
            params: {
                callback: 'callback',
                format: 'json',
                'apikey': 'fdc9ad9d9fa9d41f48a88a72c770f024',
                artist_id: ''
            }
        })
    }])