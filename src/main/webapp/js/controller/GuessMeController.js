'use strict';
guessMeApp.controller('guessController',['$scope','numGenService','gueemeConstant','$http',function($scope,numGenService,gueemeConstant,$http){
    $scope.welcomeMsg=gueemeConstant.welComeMsg;
    $scope.inputMsg=gueemeConstant.inputMsg;
    $scope.copyRight=gueemeConstant.copyRight;
    $scope.maxDigit=gueemeConstant.maxDigit;
	$scope.playedCount=0;
	$scope.guessedValue='';
	$scope.getcolors=function(){
	console.log('enteredvalue'+$scope.guessedValue);
	};
	$scope.input=function(inp){
		try{
		if(!inp){
			$scope.enableButton();
			$scope.guessedValue=$scope.guessedValue.substring(0,$scope.guessedValue.length-1);
		}
		else{
			switch(inp){
			case '0':
				$scope.zero=true;
				break;
			case '1':
				$scope.one=true;
				break;
			case '2':
				$scope.two=true;
				break;
			case '3':
				$scope.three=true;
				break;
			case '4':
				$scope.four=true;
				break;
			case '5':
				$scope.five=true;
				break;
			case '6':
				$scope.six=true;
				break;
			case '7':
				$scope.seven=true;
				break;
			case '8':
				$scope.eight=true;
				break;
			case '9':
				$scope.nine=true;
				break;
				default:
					
			}
			if($scope.guessedValue.toString().length < 4){
		$scope.maxInp=true;
		$scope.guessedValue=$scope.guessedValue+inp;
		if($scope.guessedValue.toString().length==4){
		$scope.maxInp=false;
		}
			}
			else{
				$scope.maxInp=false;
			}
		}
		}
		catch(e){
			console.log(e.message);
		}
	};
	$scope.clear=function(){
		$scope.enableButton();
		$scope.guessedValue='';
	};
	$scope.submit=function(){
		$scope.enableButton();
		$scope.maxInp=true;
	if($scope.playedCount<4){
	$scope.maxCount=false;
	$scope.playedCount=$scope.playedCount+1;
	$scope.submitObj={
			'number':$scope.guessedValue.toString().substring(0,4),
			'userId':$scope.random
	};
	$scope.callBack($scope.submitObj,'getcolors',function(responseData){
		$scope.colors=responseData;
		var playHistory=document.getElementById('history');
		//$scope.guessedValue=numGenService.getColors($scope.guessedValue);
		 var newcolor = document.createElement('div');
		 $scope.notes='';
		 if($scope.colors.black.length>0){
			 $scope.notes=$scope.colors.black+' is on Wrong place';
		 }
		 if($scope.colors.black.length>0&&$scope.colors.white.length>0){
			 $scope.notes=$scope.notes+', '+$scope.colors.white+' is correct';
		 }
		 else if($scope.colors.white.length>0){
			 $scope.notes=$scope.colors.white+' is correct';
		 }
		 else if($scope.colors.black.length==0&&$scope.colors.white.length==0){
			 $scope.notes='No Digit Found'; 
		 }
		 if(isNaN($scope.colors.white)&&isNaN($scope.colors.black)){
			 newcolor.innerHTML = 'Please Restart the Game'; 
		 }
		 else{
			 newcolor.innerHTML = $scope.guessedValue+' :: '+$scope.notes; 
		 }
		 playHistory.appendChild(newcolor);
		 $scope.guessedValue='';
		 if($scope.colors.white.length==4){
			var playHistoryF=document.getElementById('history');
			//$scope.guessedValue=numGenService.getColors($scope.guessedValue);
			var newcolorF = document.createElement('div');
			newcolorF.innerHTML = '<div style="background-color:while;color:#004a7f;font-size:20px">WOOOW YOU GOT ME <div>'+'Keep Going and Challenge Yourself' ;
			playHistoryF.appendChild(newcolorF);
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
		$scope.enableButton();
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
		
	};
	//can use ng-change,$watch 
	$scope.keyPress=function($event){
		if(!$scope.guessedValue)
			$scope.guessedValue='';
		if($scope.guessedValue.toString().length==4){
			$scope.maxInp=false;
		}
		else{
			$scope.maxInp=true;
		}
		if(isNaN(String.fromCharCode($event.keyCode))){
            $event.preventDefault();
        }
	};
	
	$scope.$watch('guessedValue',function guessedValueChangeListener(newVal,oldVal){
		console.log('new value='+newVal+','+'Old value='+oldVal);
		if(!newVal||newVal.toString().length<4){
			$scope.maxInp=true;	
		}
		
	});
	
	$scope.guessedValueChangeEvent=function(guessedValue){
		console.log('Value change Event has been triggered ='+guessedValue);
	};
	$scope.enableButton=function(){
		$scope.one=false;
		$scope.two=false;
		$scope.three=false;
		$scope.four=false;
		$scope.five=false;
		$scope.six=false;
		$scope.seven=false;
		$scope.eight=false;
		$scope.nine=false;
		$scope.zero=false;
	}
}]);