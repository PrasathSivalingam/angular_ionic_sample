"use strict";angular.module("ionicSampleApp",["ngCookies","ngResource","ngSanitize","ngRoute","ui.router","ionicSampleApp.services","ionicSampleApp.main"]).config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/"),a.state("login",{url:"/",templateUrl:"views/login.html",controller:"LoginCtrl"})}]),angular.module("ionicSampleApp.main",["ionic","starter.controllers"]).config(["$stateProvider","$urlRouterProvider",function(a){a.state("app",{url:"/app","abstract":!0,templateUrl:"views/menu.html",controller:"AppCtrl"}).state("app.search",{url:"/search",views:{menuContent:{templateUrl:"views/search.html"}}}).state("app.browse",{url:"/browse",views:{menuContent:{templateUrl:"views/browse.html"}}}).state("app.playlists",{url:"/playlists",views:{menuContent:{templateUrl:"views/playlists.html",controller:"PlaylistsCtrl"}}}).state("app.single",{url:"/playlists/:playlistId",views:{menuContent:{templateUrl:"views/playlist.html",controller:"PlaylistCtrl"}}})}]).controller("MainCtrl",["$scope","Cordova",function(a,b){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],b.navigator().then(function(){navigator.notification.vibrate()})}]),angular.module("ionicSampleApp.services",[]),angular.module("ionicSampleApp.services").factory("Cordova",["$q",function(a){var b=a.defer();return"undefined"!=typeof window.navigator?b.resolve(window.navigator):document.addEventListener("deviceready",function(){b.resolve(navigator)}),{navigator:function(){return b.promise}}}]),angular.module("ionicSampleApp").controller("LoginCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("starter.controllers",[]).controller("AppCtrl",["$scope",function(){}]).controller("PlaylistsCtrl",["$scope",function(a){a.playlists=[{title:"Reggae",id:1},{title:"Chill",id:2},{title:"Dubstep",id:3},{title:"Indie",id:4},{title:"Rap",id:5},{title:"Cowbell",id:6}]}]).controller("PlaylistCtrl",["$scope","$stateParams",function(){}]);