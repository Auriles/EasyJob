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
    var loggingIn = function(credentials){
        var deferred = $q.defer();
        // TODO: implement logging-in
        if(credentials.username == 'user' && credentials.password == 'adf34f3e63a8e0bd2938f3e09ddc161125a031c3c86d06ec59574a5c723e7fdbe04c2c15d9171e05e90a9c822936185f12b9d7384b2bedb02e75c4c5fe89e4d4') {
            $timeout(function () {
                _user = {
                    imgSrc: 'test.jpg',
                    nickname: credentials.username,
                    lastName: 'McDeath',
                    firstName: 'Hjördis',
                    gender: 'femme',
                    birthDate: 5420178954,
                    mail: 'please@givemea.job',
                    signInDate: 954542017897,
                    adress: '18 rue des peupliers',
                    town: 'Paris',
                    zip: '75000'
                };
                deferred.resolve(_user);
            }, 1000);
        }else {
            $timeout(function(){
                deferred.reject();
            }, 1000);
        }
        return deferred.promise;
    };
    var forceLogOut = function(){
        _user = null;
    };
    // TODO: implement function
    var registerUser = function(user){
        var deferred = $q.defer();

        $timeout(function(){
            var data = {
                nickname: user.nickname,
                lastName: user.lastName,
                firstName: user.firstName,
                gender: user.gender,
                birthDate: user.birthDate,
                mail: user.mail,
                signInDate: Date.now().toString(),
                adress: user.adress,
                town: user.town,
                zip: user.zip
            };
            console.log(data);
            _user = data;
            deferred.resolve(data);
        }, 1000);

        return deferred.promise;
    };
    // TODO: implement function
    var updateUser = function(user){
        var deferred = $q.defer();

        var update = {};

        if(user.nickname && user.nickname != _user.nickname){
            update.nickname = user.nickname;
        }
        if(user.lastName && user.lastName != _user.lastName){
            update.lastName = user.lastName;
        }
        if(user.firstName && user.firstName != _user.firstName){
            update.firstName = user.firstName;
        }
        if(user.gender && user.gender != _user.gender){
            update.gender = user.gender;
        }
        if(user.birthDate && user.birthDate != _user.birthDate){
            update.birthDate = user.birthDate;
        }
        if(user.mail && user.mail != _user.mail){
            update.mail = user.mail;
        }
        if(user.adress && user.adress != _user.adress){
            update.adress = user.adress;
        }
        if(user.town && user.town != _user.town){
            update.town = user.town;
        }
        if(user.zip && user.zip != _user.zip) {
            update.zip = user.zip;
        }
        console.log(update);

        $timeout(function(){
            var data = {
                nickname: update.nickname || _user.nickname,
                lastName: update.lastName || _user.lastName,
                firstName: update.firstName || _user.firstName,
                gender: update.gender || _user.gender,
                birthDate: update.birthDate || _user.birthDate,
                mail: update.mail || _user.mail,
                signInDate: _user.signInDate,
                adress: update.adress || _user.adress,
                town: update.town || _user.town,
                zip: update.zip || _user.zip
            };
            console.log(data);
            _user = data;
            deferred.resolve(data);
        }, 1000);

        return deferred.promise;
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