'use strict'
var guessMeApp=angular.module('guessMe',['ui.router']);
guessMeApp.config(function($urlRouterProvider,$stateProvider){
	 $urlRouterProvider.when('/', '/guessme');
	 $urlRouterProvider.when('', '/guessme');
     $urlRouterProvider.otherwise("/error");

	$stateProvider
	.state('home',{
		url:"/guessme",
		templateUrl:"pages/guessme.jsp",
		controller:"guessController"
	})
	.state('first',{
		url:"/",
		templateUrl:"pages/guessme.jsp",
		controller:"guessController"
	});

});
