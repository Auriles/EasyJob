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
        Authentification.registerUser(user)
            .then(function(){
                $state.go('particular.profile')
            })
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
