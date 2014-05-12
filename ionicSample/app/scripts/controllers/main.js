'use strict';

angular.module('ionicSampleApp.main',['ionic', 'starter.controllers'])
.config(function ($stateProvider,$urlRouterProvider) {
        
        $stateProvider
        
        .state('app', {
               url: "/app",
               abstract: true,
               templateUrl: "views/menu.html",
               controller: 'AppCtrl'
               })
        
        .state('app.search', {
               url: "/search",
               views: {
               'menuContent' :{
               templateUrl: "views/search.html"
               }
               }
               })
        
        .state('app.browse', {
               url: "/browse",
               views: {
               'menuContent' :{
               templateUrl: "views/browse.html"
               }
               }
               })
        .state('app.playlists', {
               url: "/playlists",
               views: {
               'menuContent' :{
               templateUrl: "views/playlists.html",
               controller: 'PlaylistsCtrl'
               }
               }
               })
        
        .state('app.single', {
               url: "/playlists/:playlistId",
               views: {
               'menuContent' :{
               templateUrl: "views/playlist.html",
               controller: 'PlaylistCtrl'
               }
               }
               });
        
        })
  .controller('MainCtrl', function ($scope,Cordova) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
              
    Cordova.navigator().then(function(n) {
     navigator.notification.vibrate();
    });
  });
