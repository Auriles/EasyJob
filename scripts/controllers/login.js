"use strict";

app.controller('loginCtrl', ['$scope', '$log', 'Authentification', '$state', 'ngDialog', function($scope, $log, Authentification, $state, ngDialog){
    var userLogin = function(){
        console.log($scope.credentials);
        if($scope.credentials && $scope.credentials.username && $scope.credentials.password) {
            var credential = {
                username: $scope.credentials.username,
                password: CryptoJS.SHA3($scope.credentials.password).toString()
            };
        console.log(credential);

            // TODO: implement loggin
            $log.debug('Login process started.');
            Authentification.loggingIn(credential)
                .then(function(data){
                    console.log(CryptoJS.SHA3($scope.credentials.password).toString());
                    ngDialog.close();
                    $state.go('particular.profile', data.userID);
                },
                function(){
                    $scope.error = 'Mauvais nom d\'utilisateur/mot de passe';
                })
        }
    };
    var goToRegister = function(){
        ngDialog.close();
        $state.go('register', 'register');
    };

    $scope.goToRegister = goToRegister;
    $scope.userLogin = userLogin;
}]);