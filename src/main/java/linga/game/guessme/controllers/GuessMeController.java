package linga.game.guessme.controllers;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import linga.game.guessme.apis.ColorsApi;
import linga.game.guessme.constants.Constants;
import linga.game.guessme.models.Colors;
import linga.game.guessme.models.Submit;

/**
 * @author linganathan.ps
 *
 */
@RestController
public class GuessMeController {

@Autowired
ColorsApi colorApi;
	
@RequestMapping(value="/getcolors",method=RequestMethod.POST,produces=org.springframework.http.MediaType.APPLICATION_JSON_VALUE)	
public Colors getColors(@RequestBody Submit gussedValue,HttpServletRequest request){
	
	return colorApi.getColors(gussedValue);
}

@RequestMapping(value="/gendigit",method=RequestMethod.POST,produces="application/json")
public String genDigit(@RequestBody Submit submit,HttpServletRequest req,HttpServletResponse resp){
	if(colorApi.genRandom(submit.getUserId())){
	return Constants.SUCCESS_MESSAGE;
	}
	else{
		return Constants.FAILURE_MESSAGE;
	}
}

}
