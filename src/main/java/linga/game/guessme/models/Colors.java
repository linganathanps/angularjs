package linga.game.guessme.models;

import java.io.Serializable;
import java.util.List;

/**
 * @author linganathan.ps
 *
 */
public class Colors implements Serializable{

	private List<String> black;
	
	private List<String> white;

	/**
	 * @return the black
	 */
	public List<String> getBlack() {
		return black;
	}

	/**
	 * @param black the black to set
	 */
	public void setBlack(List<String> black) {
		this.black = black;
	}

	/**
	 * @return the white
	 */
	public List<String> getWhite() {
		return white;
	}

	/**
	 * @param white the white to set
	 */
	public void setWhite(List<String> white) {
		this.white = white;
	}
	
	
	
}
