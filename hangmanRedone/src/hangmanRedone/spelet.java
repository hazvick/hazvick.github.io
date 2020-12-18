package hangmanRedone;

import java.util.Scanner;

public class spelet {
	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);

		System.out.println("Hangman Spelet! Tryck 1 för att forstätta eller 2 för att avsluta.");

		int gameMode = scanner.nextInt();

		if (gameMode % 2 != 0) {
			Scanner scannertwo = new Scanner(System.in);
			String[] words = new String[] { "google", "microsoft", "facebook", "instagram", "yahoo", "alphabet",
					"apple" };
			String wordToGuess = words[(int) (Math.random() * words.length)];
			char[] lettersOfWord = new char[wordToGuess.length()];
			String checksum = "#" + wordToGuess;

			for (int i = 0; i < lettersOfWord.length; i++) {
				lettersOfWord[i] = '-';
			}

			int failedAttempts = 0;
			int maxAttempt = 7;

			System.out.println("Spelet har nu börjat!");

			while (failedAttempts < 7) {
				System.out.println();// dummy whitespace
				System.out.println("Liv: " + (maxAttempt - failedAttempts));
				System.out.println("Välj en bokstav att gissa!");
				System.out.println("Eller! Gissa ett helt ord genom att sätta en hashtag före ord. Exempel: #<ord>");

				System.out.println();// dummy for whitespace

				String guessedInput = scannertwo.nextLine();

				char letter = guessedInput.charAt(0);

				if (letter == '#' && checksum.equals(guessedInput)) {
					System.out.println("Grattis! Vilken våghals!");
					break;

				}

				boolean isGuessLetterTrue = false;

				for (int i = 0; i < wordToGuess.length(); i++) {
					char isLetterFound = wordToGuess.charAt(i);

					if (isLetterFound == letter) {
						lettersOfWord[i] = isLetterFound;
						isGuessLetterTrue = true;

					}

				}
				if (!isGuessLetterTrue) {
					failedAttempts++;
				}

				boolean didYouWin = true;

				System.out.println();// dummy whitespace

				if (failedAttempts == 1) {
					System.out.println("|");
					System.out.println("|");
					System.out.println("|");
					System.out.println("|");
					System.out.println("|");
					System.out.println("|");
					System.out.println("|");
					System.out.println("|");
				}

				if (failedAttempts == 2) {
					System.out.println("|--------");
					System.out.println("|");
					System.out.println("|");
					System.out.println("|");
					System.out.println("|");
					System.out.println("|");
					System.out.println("|");
					System.out.println("|");
				}
				if (failedAttempts == 3) {
					System.out.println("|--------");
					System.out.println("|       |");
					System.out.println("|       O");
					System.out.println("|");
					System.out.println("|");
					System.out.println("|");
					System.out.println("|");
					System.out.println("|");
				}
				if (failedAttempts == 4) {
					System.out.println("|--------");
					System.out.println("|       |");
					System.out.println("|       O");
					System.out.println("|      /|\\");
					System.out.println("|");
					System.out.println("|");
					System.out.println("|");
					System.out.println("|");
				}
				if (failedAttempts == 5) {
					System.out.println("|--------");
					System.out.println("|       |");
					System.out.println("|       O");
					System.out.println("|      /|\\");
					System.out.println("|       |");
					System.out.println("|");
					System.out.println("|");
					System.out.println("|");
				}
				if (failedAttempts == 6) {
					System.out.println("|--------");
					System.out.println("|       |");
					System.out.println("|       O");
					System.out.println("|      /|\\");
					System.out.println("|       |");
					System.out.println("|      /");
					System.out.println("|");
					System.out.println("|");
				}

				System.out.print("Ordet: ");

				for (int i = 0; i < lettersOfWord.length; i++) {
					if (lettersOfWord[i] == '-') {
						didYouWin = false;
					}

					System.out.print(lettersOfWord[i]);

				}

				System.out.println();// dummy white space


				if (didYouWin) {
					System.out.println("Bra jobbat!");
					break;
				}

			}
			if (failedAttempts == maxAttempt) {
				System.out.println("Lol, tappert försök. Ordet var: " + wordToGuess);

				System.out.println("|--------");
				System.out.println("|       |");
				System.out.println("|       O");
				System.out.println("|      /|\\");
				System.out.println("|       |");
				System.out.println("|      / \\");
				System.out.println("|");
				System.out.println("|");

			}

		}


	}
}
