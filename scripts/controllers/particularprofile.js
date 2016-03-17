"use strict";

app.controller('particularProfileCtrl', ['$scope', '$log', 'Authentification', '$stateParams', '$state', '$rootScope',
    function($scope, $log, Authentification, $stateParams, $state, $rootScope){

    var toggleCV = function(){
        $scope.showCV = !$scope.showCV;
    };

    var initCtrlWithNoBE = function(){
        $scope.user = Authentification.getUser();
        $scope.showCV = false;
        $scope.toggleCV = toggleCV;
        $log.debug('particularProfileCtrl is initialized with fake data.');

        // TODO: remove
        $scope.goToProfile = function(userID){
            $state.go($state.current, {userID: userID}, {reload: true});
        };
    };
    var initCtrl = function(){

        $log.debug('particularProfileCtrl is initialized.')
    };

    // TODO: initiate controller with BE's data
        $rootScope.$on()
    initCtrlWithNoBE();
//    initCtrl();
}]);
/**
 * Created by Charles on 09/03/2016.
 */
