var guessMeApp=angular.module('guessMe',['ngMaterial','ui.router']);
guessMeApp.config(function($urlRouterProvider,$stateProvider){
	 $urlRouterProvider.when('/', '/login');
	 $urlRouterProvider.when('', '/login');
     $urlRouterProvider.otherwise("/error");

	$stateProvider
	.state('home',{
		url:"/login",
		templateUrl:"pages/login.jsp",
		controller:"guessController"
	})
	.state('first',{
		url:"/",
		templateUrl:"pages/login.jsp",
		controller:"guessController"
	});

});
