"use strict";

app.controller('particularSearchCtrl', ['$scope', '$log', 'Offers', function($scope, $log, Offers){
    $scope.search = function(){
        var criteria = $scope.criteria;
        console.log(criteria);
        Offers.searchOffer(criteria)
            .then(function(offers){
                $scope.result = offers;
            })
    }
}]);