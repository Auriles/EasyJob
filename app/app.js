"use strict";

var app = angular.module('EasyJob', ['ui.router'])
    // States config
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/login");
        $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: "views/login.html",
                controller: "loginCtrl"
            })
            .state('particular', {
                url: "",
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

            if (!Authentification.isLoggedIn() && toState.name !== 'login') {
                    e.preventDefault();
                    $state.go('login');
            } else if(toState.name === 'particular'){
                e.preventDefault();
                $state.go('particular.profile', Authentification.getUserID());
            }
        })
    }]);