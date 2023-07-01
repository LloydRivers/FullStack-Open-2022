package HashMaps;

import java.util.Arrays;

public class HashMapExample {
    // Size of the underlying array
    private static final int SIZE = 10;

    // Array to store keys
    private String[] keys;

    // Array to store values
    private String[] values;

    public HashMapExample() {
        keys = new String[SIZE];
        values = new String[SIZE];
    }

    // Method to calculate the hash code for a given key
    private int hash(String key) {
        // The hashCode() method returns a hash code for this string.
        return Math.abs(key.hashCode() % SIZE);
    }

    // Method to insert a key-value pair into the hash map
    public void put(String key, String value) {
        // Calculate the index using the hash function
        int index = hash(key);
        // Store the key at the calculated index
        keys[index] = key;
        // Store the value at the calculated index
        values[index] = value;
    }

    // Method to retrieve the value associated with a given key from the hash map
    public String get(String key) {
        int index = hash(key); // Calculate the index using the hash function
        String storedKey = keys[index];
        if (storedKey != null && storedKey.equals(key)) {
            // Return the value if the stored key matches the given key
            return values[index];
        }
        // Return null if the key is not found
        return null;
    }

    public static void main(String[] args) {
        HashMapExample hashMap = new HashMapExample();

        // Insert key-value pairs into the hash map
        hashMap.put("England", "London");
        hashMap.put("Germany", "Berlin");
        hashMap.put("Norway", "Oslo");
        hashMap.put("USA", "Washington DC");

        // Retrieve values based on keys
        System.out.println("Capital of England: " + hashMap.get("England"));
        System.out.println("Capital of Germany: " + hashMap.get("Germany"));
        System.out.println("Capital of Norway: " + hashMap.get("Norway"));
        System.out.println("Capital of USA: " + hashMap.get("USA"));

        // Print the underlying arrays for visualization
        System.out.println("Keys array: " + Arrays.toString(hashMap.keys));
        System.out.println("Values array: " + Arrays.toString(hashMap.values));
    }
}

/*
 * Code Explanation:
 * 
 * 1. We create a class called `HashMapExample` to represent our hash map
 * implementation.
 * 2. We define two arrays, `keys` and `values`, to store the key-value pairs.
 * These arrays are initialized with a fixed size of 10.
 * 3. The `hash` method takes a key as input and calculates the hash code by
 * applying the modulus operation on the hash code's absolute value divided by
 * the size of the array.
 * 4. The `put` method inserts a key-value pair into the hash map by calculating
 * the index using the `hash` method and storing the key and value at that index
 * in the respective arrays.
 * 5. The `get` method retrieves the value associated with a given key from the
 * hash map by calculating the index using the `hash` method. It checks if the
 * stored key at that index matches the given key and returns the corresponding
 * value if found, or returns `null` if the key is not found.
 * 6. In the `main` method, we create an instance of `HashMapExample`.
 * 7. We insert key-value pairs into the hash map using the `put` method.
 * 8. We retrieve the values based on the keys using the `get` method and print
 * them.
 * 9. Finally, we print the underlying arrays `keys` and
 * 
 * `values` to visualize the key-value storage.
 * 
 * This code provides a step-by-step journey of creating a hash map, inserting
 * values, retrieving values, and visualizing the underlying storage arrays.
 */