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
	if($scope.playedCount<6){
	$scope.maxCount=false;
	$scope.playedCount=$scope.playedCount+1;
	$scope.submitObj={
			'number':$scope.guessedValue,
			'userId':$scope.random
	};
	$scope.callBack($scope.submitObj,'getcolors',function(responseData){
		$scope.colors=responseData;
		var playHistory=document.getElementById('history');
		//$scope.guessedValue=numGenService.getColors($scope.guessedValue);
		 var newcolor = document.createElement('div');
		 newcolor.innerHTML = $scope.guessedValue+' :: '+$scope.colors.black+' BLACK'+' , '+$scope.colors.white+' WHITE';
		 playHistory.appendChild(newcolor);
		 $scope.guessedValue='';
		 if($scope.colors.white=='4'){
			var playHistory=document.getElementById('history');
			//$scope.guessedValue=numGenService.getColors($scope.guessedValue);
			var newcolor = document.createElement('div');
			newcolor.innerHTML = '<div style="background-color:while;color:green;font-size:30px">WOOOW YOU GOT ME CORRECT <div>'+'I am Scared Of You Buddy ,Keep Going and Chalenge Yourself' ;
			newcolor.innerHTML = '';
			playHistory.appendChild(newcolor);
		 }
	});
	/*$http.post('getcolors',$scope.submitObj).then(function (response){
    		$scope.colors=response.data.color;
    		var playHistory=document.getElementById('history');
    		//$scope.guessedValue=numGenService.getColors($scope.guessedValue);
    		 var newcolor = document.createElement('div');
    		 newcolor.innerHTML = $scope.colors.black+' , '+$scope.colors.white;
    		 playHistory.appendChild(newcolor);
    	});*/
	}
	else{
		$scope.maxCount=true;
		$scope.ERRORMSG='Reached Maximum Attempt ,please click restart to play again;'
		$scope.getAnscCallBack('getanswer',$scope.random,function(response){
		$scope.answer=response.data;
		var playHistory=document.getElementById('history');
		//$scope.guessedValue=numGenService.getColors($scope.guessedValue);
		var newcolor = document.createElement('div');
		newcolor.innerHTML = 'Answe Is :'+$scope.answer.key;
		playHistory.appendChild(newcolor);
		})	
	}
	}
	$scope.start=function(){
		$scope.guessedValue='';
		$scope.playedCount=0;
		$scope.maxCount=false;
		document.getElementById('history').innerHTML='';
		$scope.random=Math.random();
		$scope.submitObj={
				'number':'num',
				'userId':$scope.random
		};
		$http.post('gendigit',$scope.submitObj).then(function(response){
			$scope.startFlag=true;
		});
	}
	$scope.callBack=function(submitObj,url,callBackFunc){
		$http.post(url,submitObj).then(function (response){
			callBackFunc(response.data);
		});
	};
	$scope.getAnscCallBack=function(url,key,callBack){
		$http.get(url+'?key='+key).then(function(response){
			callBack(response);
		});
		
	}
}]);