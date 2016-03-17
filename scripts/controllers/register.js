"use strict";

app.controller('registerCtrl', ['$scope', 'Authentification', '$state', function($scope, Authentification, $state){
    $scope.register = function(){
        var user = $scope.user;
        Authentification.registerUser(user)
            .then(function(){
                $state.go('particularprofile')
            })
    };
}]);

/**
 * Created by Charles on 15/03/2016.
 */
