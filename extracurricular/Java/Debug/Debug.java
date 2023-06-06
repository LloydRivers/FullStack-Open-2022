package Debug;

/**
 * Debug.java - A file for demonstrating debugging techniques.
 */

 public class Debug {

    /**
     * Entry point of the program.
     */
    public static void main(String[] args) {
        // Create an example code snippet to debug
        int result = divideNumbers(10, 0);

        // Print the result
        System.out.println("Result: " + result);
    }

    /**
     * Divides two numbers and returns the result.
     *
     * @param dividend The number to be divided.
     * @param divisor  The number to divide by.
     * @return The division result.
     */
    public static int divideNumbers(int dividend, int divisor) {
        // Debugging process begins
        try {
            // Perform the division
            int result = dividend / divisor;

            // Return the result
            return result;
        } catch (ArithmeticException e) {
            // Handle the exception and provide helpful error message
            System.err.println("Error: Division by zero is not allowed.");

            // Log the exception details for debugging purposes
            System.err.println("Exception: " + e.getMessage());

            // Return a default value or propagate the exception further
            return 0;
        }
    }


}
