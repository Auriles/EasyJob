"use strict";

app.controller('particularProfileCtrl', ['$scope', '$log', 'Authentification', '$stateParams', 'Users', '$state', '$rootScope',
    function($scope, $log, Authentification, $stateParams, Users, $state, $rootScope){

    var toggleCV = function(){
        $scope.showCV = !$scope.showCV;
    };

    var initCtrlWithNoBE = function(){
        if($stateParams.userID !== Authentification.getUserID()) {
            Users.getUserByID($stateParams.userID)
                .then(function(data){
                    var user;
                    if(data){
                        user = data;
                    }
                    else {
                        user = Authentification.getUser();
                    }
                    console.log(user);
                    $scope.user = user;
                });
        }
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
