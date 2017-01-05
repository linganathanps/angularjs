package linga.game.guessme.apis;

import linga.game.guessme.models.Colors;
import linga.game.guessme.models.Submit;

/**
 * @author linganathan.ps
 *
 */
public interface ColorsApi {

	public Colors getColors(Submit num);
	
	public Boolean genRandom(String userId);
}
