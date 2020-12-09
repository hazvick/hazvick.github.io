import java.util.regex.Pattern;
import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;

public class spelet_terminalbased {

	/*
	 * Lista p� m�jliga ord att gissa
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
    
    public static Random random = new Random(); // slumpm�ssigt val av ord
    public static Scanner scanner = new Scanner(System.in); // scanner f�r userinputs
    public static ArrayList <String> arr = new ArrayList<>(); // vid r�tt bokstav, updatera och printa
    
    public static void printBoard(ArrayList<String>arr, int life){

        for(String x: arr){
            System.out.print(x);

        }
        System.out.println(" " + life + " liv kvar");

    }


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


    public static void main(String[] args) {

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
    	

       while (true) {
           String theWord = ""; // tom string f�r userinput
           arr.clear(); // clear metod
           int life = 8; // antal liv fr�n start
           
           /*
            * v�lkomstsekvens
            */
           	System.out.println("V�lkommen till Hazvicks version av Hangman!");
			System.out.println();
			System.out.println("Tryck n f�r att starta ett Nytt spel");
			System.out.println("Tryck a f�r att Avsluta spel");
			String menu = scanner.nextLine();

            if (menu.equals("a")) { // avslutar spel om du trycker a
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

                    //Only letters exception regex

                    String answer = scanner.nextLine();

                    if(!Pattern.matches("[A-Z]", answer)){
                        System.out.println("Endast stora bokst�ver, tack");
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

