'use strict';
guessMeApp.controller('guessController',['$scope','numGenService','gueemeConstant','$http',function($scope,numGenService,gueemeConstant,$http){
    $scope.welcomeMsg=gueemeConstant.welComeMsg;
    $scope.inputMsg=gueemeConstant.inputMsg;
    $scope.copyRight=gueemeConstant.copyRight;
	$scope.guessedValue=1000;
	$scope.playedCount=0;
	$scope.getcolors=function(){
	console.log('enteredvalue'+$scope.guessedValue);
	};
	$scope.input=function(inp){
		try{
		if(!inp){
			$scope.guessedValue=$scope.guessedValue.substring(0,$scope.guessedValue.length-1);
		}
		else{
			if($scope.guessedValue.toString().length < 4){
		$scope.guessedValue=$scope.guessedValue+inp;
			}
			else{
				$scope.maxInp=true;
			}
		}
		}
		catch(e){
			console.log(e.message);
		}
	};
	$scope.clear=function(){
		$scope.guessedValue='';
	};
	$scope.restart=function(){
		$scope.guessedValue='';
		$scope.playedCount=0;

	};
	$scope.submit=function(){
	$scope.playedCount=$scope.playedCount+1;
	$scope.submitObj={
			'number':$scope.guessedValue,
			'userId':'1234567'
	};
	$http.post('getcolors',$scope.submitObj).then(function (response){
    		$scope.guessedValue=response.data.color;
    	});
		
		//$scope.guessedValue=numGenService.getColors($scope.guessedValue);
	};
	
	$scope.start=function(){
		$scope.submitObj={
				'number':'num',
				'userId':'1234567'
		};
		$http.post('gendigit',$scope.submitObj).then(function(response){
			$scope.startFlag=true;
		});
	}
}]);