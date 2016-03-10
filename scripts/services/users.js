"use strict";

app.factory('Users', ['$q', '$timeout', function($q, $timeout){
    var userCollection = [];

    var getUsers = function(){
        return userCollection;
    };
    var getUserByID = function(userID){
        var deferred = $q.defer();

        for(var i = 0; i < userCollection.length; i++){
            if(userCollection[i].userID === userID){
                deferred.resolve(userCollection[i]);
                return deferred.promise;
            }
        }

        // TODO: implement user from BE
        $timeout(function(){
            var user = null;
            if(userID === 2){
                user = {
                    userID: '2',
                    imgSrc: 'test2.jpg',
                    nickname: 'gaga',
                    lastName: 'Michel',
                    firstName: 'Michel',
                    gender: 'homme',
                    birthDate: 5430178954,
                    mail: 'thisismy@email.com',
                    signInDate: 964542017897,
                    score: '89',
                    userType: 'particular_person'
                };

                // TODO: determine if we really want this
                addUserToCollection(user);
            }

            deferred.resolve(user);
        },500);

        return deferred.promise;
    };
    var addUserToCollection = function(user){
      if(userCollection.indexOf(user) < 0){

          // TODO: is this the goo length ?
          if(userCollection.length > 20){
              userCollection.slice(1,1);
          }

          userCollection.push(user);
      }
    };

    return {
        getUsers: getUsers,
        getUserByID: getUserByID,
        addUser: addUserToCollection
    }
}]);
