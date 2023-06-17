import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import java.util.Random;

public class MapExample {

    public static void main(String[] args) {
        /*
        What is List<Integer>?
            - List is an interface in Java that represents a list of elements
            - Integer is a wrapper class in Java that represents an integer
            - List<Integer> is a list of integers
            - List<Integer> is a generic type
            - Generics allow us to specify the type of elements in a list
            - Generics allow us to create a list of any type of elements

        What is ArrayList<Integer>?
            - ArrayList is a class in Java that implements the List interface
            - ArrayList<Integer> is a list of integers
            - ArrayList<Integer> is a generic type
            - Generics allow us to specify the type of elements in a list
            - Generics allow us to create a list of any type of elements
         */
        List<Integer> myInts = new ArrayList<>();

        // Create a random number generator
        Random random = new Random();

        /* 
        Generate and add 20 random integers (0-4) to the list.
        The nextInt method of the Random class returns a random integer between 0 (inclusive) and the specified value (exclusive).
        */
        for (int i = 0; i < 20; i++) {
            myInts.add(random.nextInt(5));
        }

        // Print the contents of the list
        System.out.println("myInts: " + myInts);

        /*
        Call the countNumbers method to count the occurrences of numbers in the list

        What is Map<Integer, Integer>?
            - Map is an interface in Java that represents a map of key-value pairs
            - Integer is a wrapper class in Java that represents an integer
            - Map<Integer, Integer> is a map of integers to integers
            - Map<Integer, Integer> is a generic type
            - Generics allow us to specify the type of keys and values in a map
            - Generics allow us to create a map of any type of keys and values
        */
        Map<Integer, Integer> intCount = countNumbers(myInts);

        /* 
        Iterate through the map entries and print the counts of each number

        What is a Map.Entry<Integer, Integer>?
            - Map.Entry is an interface in Java that represents a key-value pair in a map
            - Integer is a wrapper class in Java that represents an integer
            - Map.Entry<Integer, Integer> is a key-value pair of integers to integers
            - Map.Entry<Integer, Integer> is a generic type
        */ 
        for (Map.Entry<Integer, Integer> entry : intCount.entrySet()) {
            System.out.println("Integer: " + entry.getKey() + " appears: " + entry.getValue());
        }
    }

    // Method to count the occurrences of numbers in a list and return a map with
    // the counts
    public static Map<Integer, Integer> countNumbers(List<Integer> list) {

        // Initialize an empty map to store the counts of numbers
        Map<Integer, Integer> intCount = new HashMap<>();

        // Iterate through each element 'i' in the list
        for (int i : list) {
            // Check if the map does not contain an entry for the element 'i'
            if (intCount.get(i) == null) {
                // If there is no entry, add a new entry with the key 'i' and set the count to 1
                intCount.put(i, 1);
            } else {
                // If there is already an entry, retrieve the current count
                int currentCount = intCount.get(i);
                // Increment the count by 1
                currentCount++;
                // Update the entry in the map with the updated count
                intCount.put(i, currentCount);
            }
        }

        // Return the final map containing the counts of numbers
        return intCount;
    }

}