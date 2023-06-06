import java.util.Scanner;
/*
 In this exercise, you'll need to use the charAt() method to iterate over each character of the input word and print them on separate lines. Remember to use a loop to iterate through the characters of the word and access each character using the charAt() method.
 */

public class PrintCharacters {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a word: ");
        String word = scanner.nextLine();

        for (int i = 0; i <= word.length(); i++) {
            System.out.println(word.charAt(i));
        }

        scanner.close();
    }
}
