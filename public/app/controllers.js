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