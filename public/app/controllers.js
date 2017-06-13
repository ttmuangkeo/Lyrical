angular.module('myCtrls', ['somethingServices'])
    .controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {
        var artist = 'drake'
        $http({
        url: 'http://api.musixmatch.com/ws/1.1/artist.search',
        params: {
        callback: 'callback',
        format: 'json',
            'apikey': 'fdc9ad9d9fa9d41f48a88a72c770f024',
            'f_artist_id': '',
            'q_artist': artist 
        }
    }).then(function succes(req) {
        console.log('what is this', req.data.message.body)
        $scope.test = req.data.message.body.artist_list
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