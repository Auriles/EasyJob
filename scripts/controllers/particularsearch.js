"use strict";

app.controller('particularSearchCtrl', ['$scope', '$log', function($scope, $log){
    var toggleSearch = function(){
        $scope.advancedSearch = !$scope.advancedSearch;
    };

    var initCtrl = function(){
        $scope.advancedSearch = false;
        $scope.toggleSearch = toggleSearch;
    };

    initCtrl();
}]);