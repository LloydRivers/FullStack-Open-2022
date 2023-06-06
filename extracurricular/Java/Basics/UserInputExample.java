import java.util.Scanner;
/*
 In this example, we create a Scanner object scanner and associate it with the standard input source (System.in). We then use the nextLine() method to read a line of text (the user's name) and store it in the name variable. Next, we use the nextInt() method to read an integer (the user's age) and store it in the age variable. Finally, we display a greeting message using the retrieved input.

The Scanner class offers various other methods to read different types of data and perform more advanced parsing operations. It's a versatile class that can greatly simplify user input handling and data processing in Java programs.
 */

public class UserInputExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your name: ");
        String name = scanner.nextLine();

        System.out.print("Enter your age: ");
        int age = scanner.nextInt();

        System.out.println("Hello, " + name + "! You are " + age + " years old.");

        scanner.close();
    }
}
