"use strict";

app.filter('timeRemaining', ['$filter', function($filter) {
    return function(input) {
        var now = Date.now();
        var difference = now - input;
        var result;
        if(difference < 3600000){
            result = "Il y a moins d'un heure";
        }
        else{
            result = 'Il y a environ ' + $filter('date')(now - input, 'h') + 'h';
        }

        return result;
    };
}]);

/**
 * Created by Charles on 15/03/2016.
 */
