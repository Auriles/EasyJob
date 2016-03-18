"use strict";

app.factory('Offers', ['$q', '$timeout', function($q, $timeout){
    var offerCollection = [];

    var getOffersByUser = function(){
        // TODO: implement function
    };

    var searchOffer = function(searchCriteria){
        var deferred = $q.defer();
        $timeout(function(){
            var offers = [
                {
                    title: 'Grand maitre shaman',
                    description: 'Ego vero sic intellego, Patres conscripti, nos hoc tempore in ' +
                    'provinciis decernendis perpetuae pacis habere oportere rationem. ' +
                    'Nam quis hoc non sentit omnia alia esse nobis vacua ab omni ' +
                    'periculo atque etiam suspicione belli?',
                    salary: 75000,
                    company: 'Air France'
                },
                {
                    title: 'Dompteur d\'ours',
                    description: 'Ego vero sic intellego, Patres conscripti, nos hoc tempore in ' +
                    'provinciis decernendis perpetuae pacis habere oportere rationem. ' +
                    'Nam quis hoc non sentit omnia alia esse nobis vacua ab omni ' +
                    'periculo atque etiam suspicione belli?',
                    salary: 35000,
                    company: 'HSBC'
                },
                {
                    title: 'Gérant',
                    description: 'Ego vero sic intellego, Patres conscripti, nos hoc tempore in ' +
                    'provinciis decernendis perpetuae pacis habere oportere rationem. ' +
                    'Nam quis hoc non sentit omnia alia esse nobis vacua ab omni ' +
                    'periculo atque etiam suspicione belli?',
                    salary: 25000,
                    company: 'Camping municipal'
                }
            ];
            offerCollection = offers;
            deferred.resolve(offerCollection);
        }, 1000);
        return deferred.promise;
        // TODO: implement function
    };

    return {
        getOffers: function(){
            return offerCollection;
        },
        getOffersByUser: getOffersByUser,
        searchOffer: searchOffer
    }
}]);

/**
 * Created by Charles BARDIN on 17/03/2016.
 */
