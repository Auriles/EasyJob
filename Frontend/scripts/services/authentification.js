"use strict";

app.factory('Authentification', [function(){
    var user;

    var isLoggedIn = function(){
        return (user) ? user : false;
    };
    var loggingIn = function(username){
        user = username;
    };
    var forceLogOut = function(){
        user = undefined;
    };

    return {
        isLoggedIn: isLoggedIn,
        loggingIn: loggingIn,
        forceLogOut: forceLogOut
    }
}]);