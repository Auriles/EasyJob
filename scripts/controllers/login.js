"use strict";

app.controller('loginCtrl', ['$scope', '$log', 'Authentification', '$state', function($scope, $log, Authentification, $state, Users){
    var userLogin = function(){
        if($scope.credentials && $scope.credentials.username && $scope.credentials.password) {
            // TODO: implement loggin
            $log.debug('Login process started.');
            Authentification.loggingIn($scope.username, $scope.password)
                .then(function(data){
                    $state.go('particular.profile', data.userID);
                })
        }
    };

    $scope.userLogin = userLogin;
}]);