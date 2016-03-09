"use strict";

app.controller('loginCtrl', ['$scope', '$log', 'Authentification', '$state', function($scope, $log, Authentification, $state){
    var setSide = function(side) {
        if(!$scope.side || side === 'business' || side === 'private_person') {
            $scope.side = side;
        }
    };

    var userLogin = function(){
        if($scope.side && $scope.username && $scope.password) {
            // TODO: implement loggin
            if($scope.side === 'private_person') {
                $log.debug('Login process started.');
                Authentification.loggingIn($scope.username);
                $state.go('particular');
            }
        }
    };

    $scope.userLogin = userLogin;
    $scope.setSide = setSide;
}]);