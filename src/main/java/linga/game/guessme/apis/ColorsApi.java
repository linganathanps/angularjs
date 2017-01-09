package linga.game.guessme.apis;

import linga.game.guessme.models.Colors;
import linga.game.guessme.models.Submit;

/**
 * @author linganathan.ps
 *
 */
public interface ColorsApi {

	/**
	 * @param num
	 * @return Colors
	 */
	public Colors getColors(Submit num);
	
	/**
	 * @param userId
	 * @return Boolean
	 */
	public Boolean genRandom(String userId);
	
	/**
	 * @param key
	 * @return String
	 */
	public String getAnswer(String key);
}
