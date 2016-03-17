"use strict";

app.factory('Offers', ['$q', '$timeout', function($q, $timeout){
    var offerCollection = [];

    var getOffersByBusinessId = function(){
        // TODO: implement function
    };
    var getOffersByUser = function(){
        // TODO: implement function
    };

    return {
        getOffers: function(){
            return offerCollection;
        },
        getOffersByBusinessId: getOffersByBusinessId,
        getOffersByUser: getOffersByUser
    }
}]);

/**
 * Created by Charles BARDIN on 17/03/2016.
 */
