public class Recursion {
    public static void main(String[] args) {
        // Call the recursive function with an initial value
        int result = recursiveFunction(5);
        System.out.println("Result: " + result);
    }
    
    /**
     * Recursive function that calculates the factorial of a number.
     *
     * @param n The number to calculate the factorial for.
     * @return The factorial of the given number.
     */
    public static int recursiveFunction(int n) {
        // Base case: If the number is 0 or 1, return 1
        if (n == 0 || n == 1) {
            return 1;
        }
        
        // Recursive case: Calculate the factorial by multiplying the number with the factorial of (n-1)
        int factorial = n * recursiveFunction(n - 1);
        
        // ASCII drawing to visualize the call stack
        System.out.println("Calculating factorial(" + n + ")");
        System.out.println("    |");
        System.out.println("    --- factorial(" + (n - 1) + ")");
        
        return factorial;
    }
}
/*
 In this example, we have a recursive function called recursiveFunction that calculates the factorial of a given number n. The function uses a base case to check if n is 0 or 1, in which case it returns 1. For any other value of n, it recursively calls itself with (n-1) and multiplies the result by n.

To help visualize the call stack during recursion, I've added an ASCII drawing in the code comments. It shows the recursive calls and the flow of the function. As each recursive call is made, the function prints the calculation being performed. This can help you understand how the function is executed and how the call stack grows and resolves.
 */
