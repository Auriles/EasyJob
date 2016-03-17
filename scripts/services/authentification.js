"use strict";

app.factory('Authentification', ['$q', '$timeout', function($q, $timeout){
    var _user = null;

    var getUser = function(){
        return (_user) ? _user : null;
    };
    var getUserID = function(){
        return (_user) ? _user.userID : null;
    };
    var isLoggedIn = function(){
        return (_user) ? true : false;
    };
    var loggingIn = function(username){
        var deferred = $q.defer();
        // TODO: implement logging-in
        $timeout(function(){
            _user = {
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
        _user = null;
    };

    // TODO: implement function
    var registerUser = function(user){

    };

    // TODO: implement function
    var updateUser = function(user){

    };

    return {
        getUser: getUser,
        getUserID: getUserID,
        isLoggedIn: isLoggedIn,
        loggingIn: loggingIn,
        forceLogOut: forceLogOut,
        registerUser: registerUser,
        updateUser: updateUser
    }
}]);