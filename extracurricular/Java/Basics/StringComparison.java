/*
 In this exercise, you'll need to use the compareTo() method to compare two strings and determine their lexicographical order. Print a message indicating whether the first string is less than, equal to, or greater than the second string.
 */

 public class StringComparison {
    public static void main(String[] args) {
        String str1 = "Hello";
        String str2 = "World";

        // Compare the strings using compareTo() method
        int result = str1.compareTo(str2);

        if (result < 0) {
            System.out.println("String 1 is less than String 2");
        } else if (result > 0) {
            System.out.println("String 1 is greater than String 2");
        } else {
            System.out.println("String 1 is equal to String 2");
        }
    }
}


