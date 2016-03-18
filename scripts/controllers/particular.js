"use strict";

app.controller('particularCtrl', ['$scope', '$log', '$state', function($scope, $log, $state){
    var setView = function(view){
        $scope.selectedView = view;
    };
    var goToOwnProfile = function(){
        $state.go('particular.profile', {userID: ''}, {reload: true});
    };
    var initCtrl = function() {
        $scope.setView = setView;
        $scope.goToOwnProfile = goToOwnProfile;

        setView('profile');
        $log.debug('particularCtrl is initialized.');
    };
    initCtrl();
}]);
/**
 * Created by Charles on 09/03/2016.
 */
