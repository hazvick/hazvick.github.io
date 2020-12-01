package package1;
import java.util.Scanner;

public class class1 {
	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		
		String user, pass;
		
		System.out.print("Enter your username: ");
		user = input.nextLine();
		
		System.out.print("Enter your password: ");
		pass = input.nextLine();
		
		if(user.equals("Admin") && (pass.equals("Admin123"))) {
			System.out.print("Welcome Admin!");
		}else {
			System.out.print("Invalid credentials.");
		}
	}
}
