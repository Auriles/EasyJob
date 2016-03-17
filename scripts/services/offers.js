"use strict";

app.factory('Offers', ['$q', '$timeout', function($q, $timeout){
    var offerCollection = [];

    var getOffersByUser = function(){
        // TODO: implement function
    };

    var searchOffer = function(searchCriteria){
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
