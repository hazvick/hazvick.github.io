import java.util.*;

class PasswordRegex {
    public static void main(String[] args) {
    	Scanner scan = new Scanner(System.in);
    	System.out.println(
    			"Thank you for joining r/dankmemes, please create a password.\n" +
    			"- length between 6-12 \n" + 
    			"- has to contain at least 2 numbers \n" + 
    			"Please enter your new password: " 
    			);
    	while (int i=0; i < 3; i++) { 
        	String password = scan.nextLine();
    		if (password.matches("(?!.*[^A-Za-z0-9])(?=.{6,12}).*\\d.*\\d.*")) { //implementering av regex
        	    System.out.println("Password is valid");
        	    scan.close(); //stänga scanner för att förhindra resource leak
        	    break;
        	} else {
        		System.err.println("The password: " + password + " is invalid. Try again.");
        	}
    	}
    }
	scan.close(); //stänga scanner för att förhindra resource leak
}
	
















