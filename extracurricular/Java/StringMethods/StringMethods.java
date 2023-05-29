package StringMethods;

public class StringMethods {
    public static void main(String[] args) {
        // Using the length() method to get the length of a string
        String str = "Hello, world!";
        System.out.println(str.length()); // Length of the string: 13

        // Using the concat() method to concatenate two strings
        String str1 = "Hello";
        String str2 = "World";
        System.out.println(str1.concat(str2)); // Concatenated string: HelloWorld

        // Using the equals() method to check if two strings are equal
        String str3 = "Java";
        String str4 = "Java";
        System.out.println(str3.equals(str4)); // Comparison result: true

        // Using the indexOf() method to find the index of a character in a string
        String str5 = "Hello, world!";
        System.out.println(str5.indexOf('o')); // Index of 'o': 4

        // Using the charAt() method to get the character at a specific index
        String str6 = "Hello";
        System.out.println(str6.charAt(1)); // Character at index 1: 'e'

        // Using the substring() method to extract a portion of a string
        String str7 = "Hello, world!";
        System.out.println(str7.substring(7)); // Substring from index 7: "world!"

        // Using the toUpperCase() and toLowerCase() methods to change the case of a string
        String str8 = "Hello, world!";
        System.out.println(str8.toUpperCase()); // Uppercase string: "HELLO, WORLD!"
        System.out.println(str8.toLowerCase()); // Lowercase string: "hello, world!"
    }
}
