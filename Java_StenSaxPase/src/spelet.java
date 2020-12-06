import java.util.Scanner;

public class spelet {

	public static void main(String[] args) {
		
		// tar in value
		Scanner console = new Scanner(System.in);
		
		// anger din input som value
		String choice = console.nextLine();
		
		if (isValid(choice)) {
			// om användarval är valid, exekvera nedan
			int aiChoice = (int)(Math.random()*3); // random nummer mellan 0.0 - 0.9999, gånger 3 och avrundar
			int userChoice = getVal(choice); // user input
			System.out.println("Du valde " + choice);
			System.out.println("Datorn valde " + getAIChoice(aiChoice));
			System.out.println("Det blev " + didPersonWin(userChoice, aiChoice));
			// 0 = sten, 1 = papper, 2 = sax
		}
		else {
			System.out.print("Felaktig input.");
		}
	}
	
	public static String getAIChoice(int x) {
		if (x == 0 ) {
			return "Sten";
		}
		if (x == 1 ) {
			return "Papper";
		}
		if (x == 2 ) {
			return "Sax";
		}
		return "Om detta visas, är det något fruktansvärt fel i koden.. feelsbadman";
	}
	
	public static String didPersonWin(int userChoice, int aiChoice) {
		// oavgjort, förslust, vinst
		if (userChoice == 0) {
			if (aiChoice != 1) {
				if (aiChoice != 0) {
					return "VINST!";
				}
				return "OAVGJORT!";
			}
			return "FÖRLUST!";
		}
		if (userChoice == 1) {
			if (aiChoice != 2) {
				if (aiChoice != 1) {
					return "VINST!";
				}
				return "OAVGJORT!";
			}
			return "FÖRLUST!";
		}
		if (userChoice == 2) {
			if (aiChoice != 0) {
				if (aiChoice != 2) {
					return "VINST!";
				}
				return "OAVGJORT!";
			}
			return "FÖRLUST!";
		}
		return "Om detta visas, är det något fruktansvärt fel i koden.. feelsbadman";
	}
	
	// om user input är lika med sten, papper eller sax, returnera true annars false
	public static boolean isValid(String string) {
		if (string.equalsIgnoreCase("Sten")) {
			return true; 
		}
		if (string.equalsIgnoreCase("Papper")) {
			return true;
		}
		if (string.equalsIgnoreCase("Sax")) {
			return true;
		}
		return false;
	}
	
	// konverterar input string till int
	public static int getVal(String string) {
		if (string.equalsIgnoreCase("sten")) {
			return 0;
		}
		if (string.equalsIgnoreCase("papper")) {
			return 1;
		}
		else {
			return 2;
		}
		// har inte 3 st if's eftersom det inte finns mer inputs, lika bra köra en else
	}
}