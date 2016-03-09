"use strict";

app.controller('particularProfileCtrl', ['$scope', '$log', function($scope, $log){

    var initCtrlWithNoBE = function(){
        var user = {
            id: 1,
            imgSrc: 'test.jpg',
            lastName: 'McDeath',
            firstName: 'Hjördis',
            gender: 'women',
            birthDate: 54201789,
            mail: 'please@givemea.job',
            signInDate: 954542017897
        };
        $scope.user = user;
        $log.debug('particularProfileCtrl is initialized with fake data.')
    };
    var initCtrl = function(){

        $log.debug('particularProfileCtrl is initialized.')
    };

    // TODO: initiate controller with BE's data
    initCtrlWithNoBE();
//    initCtrl();
}]);
/**
 * Created by Charles on 09/03/2016.
 */
