"use strict";

app.filter('dateFormat', ['$filter', function($filter) {
    return function(input) {
        if(!(input && input.toString())) {
            return null;
        }
        var months = [
            'janv.',
            'févr.',
            'mars',
            'avril',
            'mai',
            'juin',
            'juil.',
            'août',
            'sept.',
            'oct.',
            'nov.',
            'déc.'
        ]
        var modifiedInput = $filter('date')(input, 'dd ');
        modifiedInput += months[Number($filter('date')(input, 'M')) - 1];
        modifiedInput += $filter('date')(input, ' yyyy');
        return modifiedInput
    };
}]);