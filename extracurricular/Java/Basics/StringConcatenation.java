/*
 In this exercise, you'll need to use the concat() method to concatenate two strings and store the result in a new string variable. Print the concatenated string.
 */

 public class StringConcatenation {
    public static void main(String[] args) {
        String str1 = "Hello";
        String str2 = "World";

        // Concatenate the strings using concat() method
        String result = str1.concat(str2);

        // Print the concatenated string
        System.out.println("Concatenated String: " + result);
    }
}
