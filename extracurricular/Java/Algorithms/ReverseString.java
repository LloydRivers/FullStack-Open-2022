public class ReverseString {
    // Function to reverse a given string
    public static String reverseString(String text) {
        // Create an empty string to store the reversed string
        String reversed = new String("");
        
        // Iterate through each character in the original string
        for (int i = 0; i < text.length(); i++) {
            // Prepend each character to the reversed string
            reversed = text.charAt(i) + reversed;
        }
        
        // Return the reversed string
        return reversed;
    }
    
    public static void main(String[] args) {
        // Create a new string to be reversed
        String str = new String("howdy");
        
        // Call the reverseString function and store the reversed string
        String reverse = reverseString(str);
        
        // Print the reversed string
        System.out.println(reverse); // Prints: ydwoh
    }
}
