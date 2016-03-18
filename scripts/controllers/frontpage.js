"use strict";

app.controller('frontPageCtrl', ['$scope', 'ngDialog', 'Offers', '$http', function($scope, ngDialog, Offers, $http){
    var showLogin = function(){
        ngDialog.open({
            template: 'views/login.html',
            controller: "loginCtrl"
        });
    };

    $scope.showLogin = showLogin;
    $scope.search = function(){
        var criteria = $scope.criteria;
        console.log(criteria);
        Offers.searchOffer(criteria)
            .then(function(offers){
                $scope.result = offers;
            })
    }
    $scope.requestServer = function(){
        $http({
            method: 'GET',
            url: '/getUser'
        });
    }
}]);