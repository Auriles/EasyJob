"use strict";

app.controller('registerCtrl', ['$scope', 'Authentification', '$state', function($scope, Authentification, $state){
    var loggedUser = Authentification.getUser();
    if(loggedUser){
        $scope.hideFields = true;
        $scope.mailConfirmation = loggedUser.mail;
        $scope.user = {};
        angular.copy(loggedUser,$scope.user)
    }

    $scope.register = function(){
        var user = $scope.user;
        if($scope.user.password === $scope.passwordConfirmation && $scope.user.mail === $scope.mailConfirmation){
            Authentification.registerUser(user)
                .then(function(){
                    $state.go('particular.profile')
                })
        }else if($scope.user.password !== $scope.passwordConfirmation){
            $scope.passError = 'Votre mot de passe et la confirmation diffèrent'
        }else if($scope.user.mail !== $scope.mailConfirmation){
            $scope.mailError = 'Votre mail et la confirmation diffèrent'
        }
    };
    $scope.edit = function(){
        var user = $scope.user;
        Authentification.updateUser(user)
            .then(function(){
                $state.go('particular.profile')
            })
    };
}]);

/**
 * Created by Charles on 15/03/2016.
 */
