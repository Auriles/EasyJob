app.controller('loginCtrl', ['$scope', '$log', function($scope, $log){
    var setSide = function(side) {
        if(!$scope.side || $scope.side === 'business' || $scope.side === 'private_person') {
            $scope.side = side;
        }
    };

    var userLogin = function(){
        if($scope.side && $scope.username && $scope.password) {
            // TODO: implement loggin
            $log.debug('loggin request sent');
        }
    };

    $scope.userLogin = userLogin;
    $scope.setSide = setSide;
}]);