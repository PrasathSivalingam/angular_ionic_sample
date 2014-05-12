'use strict';

angular
  .module('ionicSampleApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute','ui.router',
    'ionicSampleApp.services','ionicSampleApp.main'
  ])
  .config(function ($stateProvider,$urlRouterProvider) {
         $urlRouterProvider.otherwise('/');
          $stateProvider.state('login', {
                 url: "/",
                 templateUrl: "views/login.html",
                 controller: 'LoginCtrl'
                 });

  });
