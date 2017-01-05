package linga.game.guessme.models;

import java.io.Serializable;

/**
 * @author linganathan.ps
 *
 */
public class Colors implements Serializable{

	private String black;
	
	private String white;

	/**
	 * @return the black
	 */
	public String getBlack() {
		return black;
	}

	/**
	 * @param black the black to set
	 */
	public void setBlack(String black) {
		this.black = black;
	}

	/**
	 * @return the white
	 */
	public String getWhite() {
		return white;
	}

	/**
	 * @param white the white to set
	 */
	public void setWhite(String white) {
		this.white = white;
	}
	
	
	
}
