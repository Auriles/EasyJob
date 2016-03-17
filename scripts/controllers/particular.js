"use strict";

app.controller('particularCtrl', ['$scope', '$log', '$state', 'Authentification', function($scope, $log, $state, Authentification){
    var setView = function(view){
        $scope.selectedView = view;
    };
    var goToProfile = function(){
        $state.go('particular.profile');
    };
    var logout = function(){
        Authentification.forceLogOut();
        $state.go('frontpage');
    };
    var initCtrl = function() {
        $scope.setView = setView;
        $scope.goToProfile = goToProfile;
        $scope.logout = logout;

        setView('profile');
        $log.debug('particularCtrl is initialized.');
    };
    initCtrl();
}]);
/**
 * Created by Charles on 09/03/2016.
 */
