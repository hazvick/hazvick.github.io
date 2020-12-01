import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;

import java.awt.BorderLayout;
import javax.swing.JTextField;
import javax.swing.JButton;
import java.awt.Font;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class Login {

	private JFrame frame;
	private JTextField username;
	private JTextField password;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					Login window = new Login();
					window.frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the application.
	 */
	public Login() {
		initialize();
	}

	/**
	 * Initialize the contents of the frame.
	 */
	private void initialize() {
		frame = new JFrame();
		frame.setBounds(100, 100, 750, 600);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.getContentPane().setLayout(null);
		
		JLabel lblNewLabel = new JLabel("Anv\u00E4ndarnamn");
		lblNewLabel.setFont(new Font("Tahoma", Font.PLAIN, 16));
		lblNewLabel.setBounds(166, 184, 151, 49);
		frame.getContentPane().add(lblNewLabel);
		
		JLabel lblNewLabel_1 = new JLabel("L\u00F6senord");
		lblNewLabel_1.setFont(new Font("Tahoma", Font.PLAIN, 16));
		lblNewLabel_1.setBounds(166, 244, 151, 49);
		frame.getContentPane().add(lblNewLabel_1);
		
		username = new JTextField();
		username.setBounds(346, 184, 220, 45);
		frame.getContentPane().add(username);
		username.setColumns(10);
		
		password = new JTextField();
		password.setBounds(346, 248, 220, 45);
		frame.getContentPane().add(password);
		password.setColumns(10);
		
		
		
	
		JButton btnLogin = new JButton("Logga in");
		btnLogin.addActionListener(new ActionListener() {
			int fails = 0; // antal misslyckade inloggningar
			public void actionPerformed(ActionEvent arg0) {
				String uname = username.getText(); // anv�ndarinput f�r anv�ndarnamn
				String pass = password.getText(); // anv�ndarinput f�r l�senord
				while(true) {
					if(uname.equals("Admin") && pass.equals("Admin123") && fails < 3) { // om anv�ndarnamn �r Admin och l�senord Admin123, �tkomst
						JOptionPane.showMessageDialog(frame, "Inloggning lyckades.");
					} else {
						JOptionPane.showMessageDialog(frame, "Inloggning misslyckades.", "Felaktiga uppgifter", JOptionPane.ERROR_MESSAGE);
						fails++; // tar v�rdet i int fails och + 1
						System.out.print(fails);
						if (fails == 3) { // om antalet misslyckades inloggningar �verstiger 3, st�ngs applikationen
							JOptionPane.showMessageDialog(frame, "Appen avslutas.");
							System.exit(0); // st�nger applikationen
						}
					}
					break;
				}
			}
		});
		
		
		
		
		btnLogin.setBounds(367, 346, 184, 51);
		frame.getContentPane().add(btnLogin);
		
		JLabel lblNewLabel_2 = new JLabel("Fakebook ");
		lblNewLabel_2.setFont(new Font("Yu Gothic UI Light", Font.PLAIN, 46));
		lblNewLabel_2.setBounds(283, 11, 441, 108);
		frame.getContentPane().add(lblNewLabel_2);
	}
}
