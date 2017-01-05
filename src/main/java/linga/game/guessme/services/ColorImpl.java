package linga.game.guessme.services;

import java.util.HashMap;
import java.util.LinkedList;
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
	public Colors getColors(Submit num) {
		int black=0;
		int white=0;
		String number=randoms.get(num.getUserId());
		String userNum=num.getNumber();
		if(number!=null){
		for(int i=0;i<4;i++){
			String chars=String.valueOf(userNum.charAt(i));
			String chars1=String.valueOf(number.charAt(i));
			if(chars.equals(chars1)){
				white++;
				continue;
			}
			else if(number.contains(chars)){
				black++;
				continue;
			}
			else{
				continue;
			}
		}
		}
		else{
			return colorForm("please restart Game","please restart Game");
		}
		return colorForm(String.valueOf(white),String.valueOf(black));
	}
	
	public Boolean genRandom(String userID){
		Queue<Character> queue=new LinkedList<Character>();
		String ran=null;
		ran:
		while(true){
		for(ran=String.valueOf((Math.round(Math.random()*10000)));ran.length()!=4;){continue;}
        for(int j=0;j<ran.length();j++){
			queue.add(ran.charAt(j));
		}
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
	
	public static Colors colorForm(String white,String black){
		Colors color=new Colors();
		color.setBlack(black);
		color.setWhite(white);
		return color;
		
	}

}
