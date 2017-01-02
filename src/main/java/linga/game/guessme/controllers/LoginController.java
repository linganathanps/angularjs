package linga.game.guessme.controllers;

import java.awt.PageAttributes.MediaType;

import org.apache.log4j.Logger;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
	
	private final static Logger Log=Logger.getLogger(LoginController.class);
	
	@RequestMapping(value="/login",method=RequestMethod.GET,produces="application/json")
	private Long getGuessMe(){
		return 123l;
	}

}
