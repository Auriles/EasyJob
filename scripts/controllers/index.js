"use strict";

app.controller('indexCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
        $scope.currentView = toState.name;
    });
}]);

/**
 * Created by Charles BARDIN on 10/03/2016.
 */
