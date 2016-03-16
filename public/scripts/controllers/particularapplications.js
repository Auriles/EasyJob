"use strict";
app.controller('particularApplicationsCtrl', ['$scope', '$log', 'Applications', 'Authentification', function($scope, $log, Applications, Authentification){
    var initCtrl = function(){
        Applications.getApplicationsByUserID(Authentification.getUserID())
            .then(function(data){
                if(data) {
                    $scope.applications = data;
                }
            });
    };

    initCtrl();
}]);
/**
 * Created by Charles on 09/03/2016.
 */
