"use strict";

app.controller('particularProfileCtrl', ['$scope', '$log', 'Authentification', '$stateParams', '$state', '$rootScope',
    function($scope, $log, Authentification, $stateParams, $state, $rootScope){

    var toggleCV = function(){
        $scope.showCV = !$scope.showCV;
    };

    var initCtrl = function(){
        $scope.user = Authentification.getUser();
        $scope.showCV = false;
        $scope.toggleCV = toggleCV;
        $log.debug('particularProfileCtrl is initialized with fake data.');
    };

    // TODO: initiate controller with BE's data
    initCtrl();
}]);
/**
 * Created by Charles on 09/03/2016.
 */
