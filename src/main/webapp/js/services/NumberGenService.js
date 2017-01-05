'use strict'
guessMeApp.service('numGenService',['$http','$q',function($http,$q){

	this.getColors=function(guessedValue){
    	var defer = $q.defer();
		 $http.post('getcolors',{
    		headers: {'Content-Type': 'application/json'},
		    data:guessedValue
    	}).then(function (response){
    		defer.resolve(response.data.color);
    		return response.data.color;
    	});
	}
}]);