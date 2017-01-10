package linga.game.guessme.services;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Queue;

import org.springframework.stereotype.Service;

import linga.game.guessme.apis.ColorsApi;
import linga.game.guessme.models.Colors;
import linga.game.guessme.models.Submit;

/**
 * @author linganathan.ps
 *
 */
@Service
public class ColorImpl implements ColorsApi{

	static Map<String,String> randoms=new HashMap<String,String>();
	
	/* (non-Javadoc)
	 * @see linga.game.guessme.apis.ColorsApi#getColors(linga.game.guessme.models.Submit)
	 */
	public Colors getColors(Submit num) {
		List<String> black=new ArrayList<String>();
		List<String> white=new ArrayList<String>();
		String number=randoms.get(num.getUserId());
		String userNum=num.getNumber();
		//TO WISH
		//Sort and compare for better performance and clean code
		if(number!=null){
		for(int i=0;i<4;i++){
			String chars=String.valueOf(userNum.charAt(i));
			String chars1=String.valueOf(number.charAt(i));
			if(chars.equals(chars1)){
				white.add(chars);
				continue;
			}
			else if(number.contains(chars)){
				black.add(chars);
				continue;
			}
			else{
				continue;
			}
		}
		}
		else{
			black.add("please restart the game");
			white.add("please restart the game");
			return colorForm(white,black);
		}
		return colorForm(white,black);
	}
	
	/* (non-Javadoc)
	 * @see linga.game.guessme.apis.ColorsApi#genRandom(java.lang.String)
	 */
	public Boolean genRandom(String userID){
		Queue<Character> queue=new LinkedList<Character>();
		String ran=null;
		if(randoms.size()>300)
			randoms.clear();
		ran:
		while(true){
		for(ran=String.valueOf((Math.round(Math.random()*10000)));ran.length()!=4;){continue;}
        for(int j=0;j<ran.length();j++){
			queue.add(ran.charAt(j));
		}
        //For better performance sort and change the logic
        for(int k=0;k<ran.length();k++){
        	Character fi=queue.poll();
        	if(queue.contains(fi)){
        		queue.clear();
        		continue ran;
        	}
        	else{
        		queue.add(fi);
        	}
        }
        break ran;
		}
		randoms.put(userID, ran);
		if(userID !=null&&randoms.get(userID)!=null){
		return true;		
		}
		else{
			return false;
		}
	}
	
	/**
	 * @param white
	 * @param black
	 * @return
	 */
	public static Colors colorForm(List<String> white,List<String> black){
		Colors color=new Colors();
		color.setBlack(black);
		color.setWhite(white);
		return color;

	}

	/* (non-Javadoc)
	 * @see linga.game.guessme.apis.ColorsApi#getAnswer(java.lang.String)
	 */
	public String getAnswer(String key) {
		
		if(randoms.get(key)!=null&&!randoms.get(key).isEmpty()){
			return "{\"key\":"+randoms.get(key)+"}";
		}
		else{
			return "{\"key\":\"Not FOUND\"}";
		}
	}

}
