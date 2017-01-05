package linga.game.guessme.controllers;

import org.apache.log4j.Logger;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author linganathan.ps
 *
 */
@RestController
public class LoginController {
	
	private final static Logger Log=Logger.getLogger(LoginController.class);
	//Not required for now
	@RequestMapping(value="/login",method=RequestMethod.GET,produces="application/json")
	private Long getGuessMe(){
		//call login filter then return JSON
		return 123l;
	}

}
