"use strict";

app.controller('loginCtrl', ['$scope', '$log', 'Authentification', '$state', 'ngDialog', function($scope, $log, Authentification, $state, ngDialog){
    var userLogin = function(){
        console.log($scope.credentials);
        if($scope.credentials && $scope.credentials.username && $scope.credentials.password) {
            // TODO: implement loggin
            $log.debug('Login process started.');
            Authentification.loggingIn($scope.username, $scope.password)
                .then(function(data){
                    ngDialog.close();
                    $state.go('particular.profile', data.userID);
                })
        }
    };

    $scope.userLogin = userLogin;
}]);