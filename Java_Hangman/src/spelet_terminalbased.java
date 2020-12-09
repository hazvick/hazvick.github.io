import java.util.regex.Pattern;
import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;

public class spelet_terminalbased {
	/*
	 * Lista på möjliga ord att gissa
	 */
    public static String [] words = {
    		"JAVA",
    		"JAVASCRIPT",
    		"HTML",
    		"CSS",
    		"GRIT",
    		"PYTHON",
    		"SQL"
    		};
    
    public static Random random = new Random(); // slumpmässigt val av ord
    public static Scanner scanner = new Scanner(System.in); // scanner för userinputs
    public static ArrayList <String> arr = new ArrayList<>(); // vid rätt bokstav, updatera och printa
    
    /*
     * självaste boardet
     */
    public static void printBoard(ArrayList<String>arr, int life){
        for(String x: arr){
            System.out.print(x);
        }
        System.out.println(" " + life + " liv kvar");
    }
    
    /*
     * validerar user input och jämför winnerCheck med thewWord
     * om life == 0, avslutas spelet
     */
    public static boolean checkWinner(ArrayList <String> arr, String theWord, int life){
        String winnerCheck = "";
        for(String x: arr){
            winnerCheck += x;
        }
        if(winnerCheck.equals(theWord)){
        	System.out.println("Grattis!");
			System.out.println("Du vann!");
            return false;
        }else if(life==0){
        	System.out.println("Inga liv kvar..");
			System.out.println("Game Over, feelsbadman");
			System.out.println();
			System.out.println();
			System.out.println();
			System.out.println();
			System.out.println();
            return false;
        }
        return true;
    }
    
    /*
     * main funktionen
     */
    public static void main(String[] args) {
    	
    	/*
    	 * deklarering av hangman illustion i form av String
    	 * skapar sedan en int med 
    	 */
    	String hangman1 = "\n" + "\n|" + "\n|" + "\n|" + "\n|" + "\n|" + "\n|_______________________\n";
    	String hangman2 = "\n_________" + "\n|" + "\n|" + "\n|" + "\n|" + "\n|" + "\n|_______________________\n";
    	String hangman3 = "\n_________" + "\n|        |" + "\n|" + "\n|" + "\n|" + "\n|" + "\n|_______________________\n";
    	String hangman4 = "\n_________" + "\n|        |" + "\n|        O" + "\n|" + "\n|" + "\n|" + "\n|_______________________\n";
    	String hangman5 = "\n_________" + "\n|        |" + "\n|        O" + "\n|        |" + "\n|" + "\n|" + "\n|_______________________\n";
    	String hangman6 = "\n_________" + "\n|        |" + "\n|        O" + "\n|     ---|" + "\n|" + "\n|" + "\n|_______________________\n";
    	String hangman7 = "\n_________" + "\n|        |" + "\n|        O" + "\n|     ---|---" + "\n|" + "\n|" + "\n|_______________________\n";
    	String hangman8 = "\n_________" + "\n|        |" + "\n|        O" + "\n|     ---|---" + "\n|       /" + "\n|     /" + "\n|_______________________\n";
    	String hangman9 = "\n_________" + "\n|        |" + "\n|        O" + "\n|     ---|---" + "\n|       /\\" + "\n|     /    \\" + "\n|_______________________";
    	int hangArrIndex = 0;
    	String[] hangArr;
    	hangArr = new String[9];
    	hangArr[0] = new String(hangman1);
    	hangArr[1] = new String(hangman2);
    	hangArr[2] = new String(hangman3);
    	hangArr[3] = new String(hangman4);
    	hangArr[4] = new String(hangman5);
    	hangArr[5] = new String(hangman6);
    	hangArr[6] = new String(hangman7);
    	hangArr[7] = new String(hangman8);
    	hangArr[8] = new String(hangman9);
    	
    	/*
    	 * självaste spelet
    	 * körs tills man väljer "a" för att avsluta eller fel inmatning
    	 */
       while (true) {
    	   /*
    	    * deklarering 
    	    */
           String theWord = ""; // tom string för userinput
           int life = 8; // antal liv från start
           
           arr.clear(); // clear metod
           
           /*
            * välkomstsekvens
            */
           	System.out.println("Välkommen till Hazvicks version av Hangman!");
			System.out.println();
			System.out.println("Tryck n för att starta ett Nytt spel");
			System.out.println("Tryck a för att Avsluta spel");
			String menu = scanner.nextLine();

			/*
			 * meny funktion
			 * trycker du a, avslutas spelet
			 * trycker du n, startas nytt spel
			 */
            if (menu.equals("a")) { 
                System.out.println("Avslutar.....");
                break;
            } else if (menu.equals("n")) {
                int index = random.nextInt(words.length);
                theWord += words[index];
                for(int i = 0; i<theWord.length(); i++){
                    arr.add("_");
                }
                printBoard(arr, life);
                while(checkWinner(arr, theWord, life)){
                    System.out.println("Skriv en stor bokstav: ");
                    String answer = scanner.nextLine();
                    if(!Pattern.matches("[A-Z]", answer)){
                        System.out.println("Endast stora bokstäver, tack");
                        continue;
                    }
                    char letter = answer.charAt(0);
                    if(arr.contains(answer)){
                        System.out.println("Oj, en dublett. Prova igen!");

                    }else {
                        for (int i = 0; i < theWord.length(); i++) {
                            if (theWord.charAt(i) == letter) {
                                arr.remove(i);
                                arr.add(i, answer);
                            }
                        }
                        if(!arr.contains(answer)){
                            life-=1;
                            hangArrIndex++;
                            if(life==0) { 
                            	hangArrIndex = 0;
                            	/*
                            	 * när spelet startar om efter du når 0 liv
                            	 * borde koden ovan setta valuen i hangArrIndex till 0 igen
                            	 * men kör du spelet igen så går den vidare till index nr.9?
                            	 */
                            }
                        }
                    }
                    printBoard(arr, life);
                    System.out.println();
                    System.out.println(hangArr[hangArrIndex]);
                }
                }else{
                System.out.println("Felaktiv inmatning");
                continue;
            }
            }
        }

}

