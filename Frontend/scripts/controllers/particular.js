"use strict";

app.controller('particularCtrl', ['$scope', '$log', function($scope, $log){
    var setView = function(view){
        $scope.selectedView = view;
    };
    var initCtrl = function() {
        $scope.setView = setView;
        setView('profile');
        $log.debug('particularCtrl is initialized.');
    };
    initCtrl();
}]);
/**
 * Created by Charles on 09/03/2016.
 */
