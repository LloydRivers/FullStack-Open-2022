package ArrayList;
import java.util.ArrayList;

public class GuestList {
    public static void main(String[] args) {
        // Create an ArrayList to hold guests' names
        ArrayList<String> guestNames = new ArrayList<>();

        // Add guests to the list
        guestNames.add("Alice");
        guestNames.add("Bob");
        guestNames.add("Charlie");

        // Add a numeric guest
        guestNames.add("42"); // A String representing a number

        // Retrieve and print the guests' names
        for (String guest : guestNames) {
            System.out.println(guest);
        }
    }
}

/*
In this example, we create an ArrayList called guestNames, specifically designed to hold String objects (ArrayList<String>). We can add names to the list using the add method, and retrieve and print the names using a for-each loop.

The use of generics, denoted by <String> after ArrayList, ensures type safety by allowing only String objects to be stored in this particular ArrayList. This helps prevent type errors and provides compile-time checks.

With ArrayLists, you have the flexibility to store, manipulate, and retrieve collections of objects of any type, making them a valuable asset in the vast landscape of Java programming. 
 
 */