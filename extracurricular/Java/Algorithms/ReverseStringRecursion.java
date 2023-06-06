public class ReverseStringRecursion {
    public static String reverseString(String text) {
        // Base case: if the text is empty, return the empty text
        if (text.length() == 0) {
          return text;
        } else {
          
          return reverseString(text.substring(1)) + text.charAt(0);
        }
      }
     
      public static void main(String[] args) {
        String str = new String("howdy");
        // Calling the recursive function to reverse the string
        String reverse = reverseString(str);
        System.out.println(reverse); // Prints: ydwoh
      }
}
/*
The reverseString() method takes a text string as input and returns the reversed version of the text.
The base case checks if the length of the text is 0, indicating an empty text. In that case, it returns the empty text as is.

If the text is not empty, the method proceeds to the else block:
It makes a recursive call to reverseString() with the substring of the original text starting from the second character (index 1) to the end of the text.

The recursive call essentially reverses the substring.

Finally, it appends the first character of the original text (at index 0) to the end of the reversed substring, effectively reversing the entire text.

In the main() method, we create a string str with the value "howdy".
We then call the reverseString() method to reverse the str string and store the result in the reverse variable.

Finally, we print the reverse string, which should be the reversed version of "howdy" ("ydwoh").
 */


 