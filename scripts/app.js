"use strict";

var app = angular.module('EasyJob', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/login");
        $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: "views/login.html",
                controller: "loginCtrl"
            })
            .state('particular', {
                url: "/particular",
                templateUrl: "views/particular.html",
                controller: "particularCtrl"
            })
            .state('particular.profile', {
                url: '/profile',
                templateUrl: "views/particularprofile.html",
                controller: "particularProfileCtrl"
            })
    })
    .run(['$rootScope', '$state', 'Authentification', function($rootScope, $state, Authentification){
        $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
            if (toState.name !== 'login') {
                if (!Authentification.isLoggedIn()) {
                    e.preventDefault();
                    $state.go('login');
                } else if(toState.name === 'particular'){
                    e.preventDefault();
                    $state.go('particular.profile');
                }
            } else {
                Authentification.forceLogOut();
            }
        })
    }]);