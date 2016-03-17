"use strict";

var app = angular.module('EasyJob', ['ui.router', 'ngDialog'])
    // States config
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('frontpage', {
                url: "/",
                templateUrl: "views/frontpage.html",
                controller: "frontPageCtrl"
            })
            .state('register', {
                url: "/register/{userType:business|particular}",
                templateUrl: "views/register.html",
                controller: "registerCtrl"
            })
            .state('offer', {
                url: "/offer",
                templateUrl: "views/offer.html",
                controller: "offerCtrl"
            })
            .state('particular', {
                url: "/particular",
                templateUrl: "views/particular.html",
                controller: "particularCtrl"
            })
            .state('particular.profile', {
                url: '/profile',
                params: {userID: ''},
                templateUrl: "views/particularprofile.html",
                controller: "particularProfileCtrl"
            })
            .state('particular.applications', {
                url: '/applications',
                templateUrl: 'views/particularapplications.html',
                controller: 'particularApplicationsCtrl'
            })
            .state('particular.search', {
                url: '/search',
                templateUrl: 'views/particularsearch.html',
                controller: 'particularSearchCtrl'
            })
    })

    // State change scripts
    .run(['$rootScope', '$state', 'Authentification', function($rootScope, $state, Authentification){
        $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
            console.log(toState.name + ' : ' + toParams.userID);

            if (!Authentification.isLoggedIn() && toState.name !== 'frontpage' && toState.name !== 'register'){
                    e.preventDefault();
                    $state.go('frontpage');
            } else if(toState.name === 'particular'){
                e.preventDefault();
                $state.go('particular.profile', Authentification.getUserID());
            }
        })
    }]);