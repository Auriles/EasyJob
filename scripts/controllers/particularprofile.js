"use strict";

app.controller('particularProfileCtrl', ['$scope', '$log', 'Authentification', 'Cv',
    function($scope, $log, Authentification, Cv){

    var toggleCV = function(){
        $scope.showCV = !$scope.showCV;
    };

    var initCtrl = function(){
        $scope.user = Authentification.getUser();
        $scope.showCV = false;
        $scope.toggleCV = toggleCV;
    };
    initCtrl();
}]);
/**
 * Created by Charles on 09/03/2016.
 */
