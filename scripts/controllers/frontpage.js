"use strict";

app.controller('frontPageCtrl', ['$scope', 'ngDialog', function($scope, ngDialog){
    var showLogin = function(){
        ngDialog.open({
            template: 'views/login.html',
            className: 'ngdialog-theme-default',
            controller: "loginCtrl"
        });
    };

    $scope.showLogin = showLogin;
}]);