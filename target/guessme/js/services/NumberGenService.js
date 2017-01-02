var numGenService=guessMeApp.service('numGenService',function(){
	this.getRandomNumber=function(number){
		return number*number;
	}
});