"use strict";

app.factory('Applications', ['$q', '$timeout', function($q, $timeout){
    var applicationsCollection = [];

    var getApplicationsByUserID = function(userID){
        var deferred = $q.defer();

        $timeout(function(){
            var applications = [
                {
                    applicationID: '12342',
                    userID: userID,
                    offer: {
                        businessName: 'Les Photocopies',
                        job: 'Esclave de photocopieuse',
                        contact: 'jaimefairedesphotocopies@esclave.com'
                    },
                    status: 'En attente de rendez-vous',
                    lastUpdate: 1457951237614
                },
                {
                    applicationID: '12572',
                    userID: userID,
                    offer: {
                        businessName: 'Le Pingouin d\'antartique',
                        job: 'Chercheur de café',
                        contact: 'capuccino@esclave.com'
                    },
                    status: 'Refusé',
                    lastUpdate: 1457941237614
                },
                {
                    applicationID: '12375',
                    userID: userID,
                    offer: {
                        businessName: 'Pikachu',
                        job: 'Rat electrique',
                        contact: 'pikachu@pokemon.com'
                    },
                    status: 'Envoyé',
                    lastUpdate: 1457921237614
                }
            ];

            deferred.resolve(applications);
        }, 500);

        return deferred.promise;
    };

    return {
        getApplications: function () {
            return applicationsCollection;
        },
        getApplicationsByUserID: getApplicationsByUserID
    }
}]);

/**
 * Created by Charles on 15/03/2016.
 */