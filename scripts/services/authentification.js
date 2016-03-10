"use strict";

app.factory('Authentification', ['$q', '$timeout', function($q, $timeout){
    var user = null;

    var getUser = function(){
        return (user) ? user : null;
    };
    var getUserID = function(){
        return (user) ? user.userID : null;
    };
    var isLoggedIn = function(){
        return (user) ? true : false;
    };
    var loggingIn = function(username){
        var deferred = $q.defer();
        // TODO: implement logging-in
        $timeout(function(){
            user = {
                userID: 1,
                imgSrc: 'test.jpg',
                nickname: username,
                lastName: 'McDeath',
                firstName: 'Hjördis',
                gender: 'femme',
                birthDate: 5420178954,
                mail: 'please@givemea.job',
                signInDate: 954542017897,
                score: '58',
                userType: 'particular_person'
            };

            deferred.resolve(user);
        }, 1000);
        return deferred.promise;
    };
    var forceLogOut = function(){
        user = null;
    };

    return {
        getUser: getUser,
        getUserID: getUserID,
        isLoggedIn: isLoggedIn,
        loggingIn: loggingIn,
        forceLogOut: forceLogOut
    }
}]);