"use strict";

app.controller('loginCtrl', ['$scope', '$log', 'Authentification', '$state', 'Users', function($scope, $log, Authentification, $state, Users){
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
                Authentification.loggingIn($scope.username, $scope.password)
                    .then(function(data){
                        Users.addUser(data);
                        $state.go('particular.profile', data.userID);
                    })
            }
        }
    };

    $scope.userLogin = userLogin;
    $scope.setSide = setSide;
}]);