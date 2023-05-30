package Loops;

public class LoopExamples {
    public static void main(String[] args) {
        // Array of numbers
        int[] numbers = { 1, 2, 3, 4, 5 };

        // For loop
        System.out.println("For loop:");
        for (int i = 0; i < numbers.length; i++) {
            System.out.println(numbers[i]);
        }

        // Enhanced for loop (for-each loop)
        System.out.println("\nEnhanced for loop:");
        for (int number : numbers) {
            System.out.println(number);
        }

        // While loop
        System.out.println("\nWhile loop:");
        int counter = 0;
        while (counter < numbers.length) {
            System.out.println(numbers[counter]);
            counter++;
        }

        // Do-While loop
        System.out.println("\nDo-While loop:");
        int index = 0;
        do {
            System.out.println(numbers[index]);
            index++;
        } while (index < numbers.length);

        // Break statement in a loop
        System.out.println("\nLoop with break statement:");
        for (int number : numbers) {
            if (number == 3) {
                break; // Exit the loop when the number is 3
            }
            System.out.println(number);
        }

        // Continue statement in a loop
        System.out.println("\nLoop with continue statement:");
        for (int number : numbers) {
            if (number % 2 == 0) {
                continue; // Skip even numbers and continue with the next iteration
            }
            System.out.println(number);
        }
    }
}
