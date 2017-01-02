guessMeApp.controller('guessController',function($scope,numGenService){
	$scope.number=123;
	$scope.random=function(){
		$scope.ran=numGenService.getRandomNumber($scope.number);
	};
})