"use strict";

app.controller('particularCtrl', ['$scope', '$log', '$state', 'Authentification', function($scope, $log, $state, Authentification){
    var setView = function(view){
        $scope.selectedView = view;
    };
    var goToOwnProfile = function(){
        $state.go('particular.profile', {userID: ''}, {reload: true});
    };
    var logout = function(){
        Authentification.forceLogOut();
        $state.go('frontpage');
    };
    var initCtrl = function() {
        $scope.setView = setView;
        $scope.goToOwnProfile = goToOwnProfile;
        $scope.logout = logout;

        setView('profile');
        $log.debug('particularCtrl is initialized.');
    };
    initCtrl();
}]);
/**
 * Created by Charles on 09/03/2016.
 */
