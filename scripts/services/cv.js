"use strict";

app.factory('Cv', ['$q', '$timeout', function($q, $timeout) {
    var languagesCollection = [];
    var experiencesCollection = [];
    var skillsCollection = [];

    return {
        getCV: function(){
            return {
                experiences: experiencesCollection,
                skills: skillsCollection,
                languages: languagesCollection
            };
        }
    };
}]);

/**
 * Created by Charles on 18/03/2016.
 */
