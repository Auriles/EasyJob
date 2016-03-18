"use strict";

app.controller('registerCtrl', ['$scope', 'Authentification', '$state', function($scope, Authentification, $state){
    var loggedUser = Authentification.getUser();
    if(loggedUser){
        $scope.hideFields = true;
        $scope.mailConfirmation = loggedUser.mail;
        $scope.user = {}
        angular.copy(loggedUser,$scope.user)/*{
            nickname: loggedUser.nickname,
            lastName: loggedUser.lastName,
            firstName: loggedUser.firstName,
            gender: loggedUser.gender,
            birthDate: loggedUser.birthDate,
            mail: loggedUser.mail,
            signInDate: loggedUser.signInDate
            adress: loggedUser.adress,
            town: loggedUser.town,
            zip: loggedUser.zip
        }*/
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
