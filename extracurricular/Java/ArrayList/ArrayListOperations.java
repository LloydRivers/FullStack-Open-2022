package ArrayList;

import java.util.ArrayList;

/*
 In this example, we start by creating an ArrayList called colors to store strings representing colors. We add three colors to the list: "Red", "Green", and "Blue".

Next, we demonstrate different operations on the ArrayList. We use size() to get the size of the ArrayList and get() to retrieve the item at index 1. We then use set() to change the value at index 2 from "Blue" to "Yellow".

After that, we showcase the removal of an item using remove(). We remove the color "Red" from the ArrayList. Finally, we use indexOf() to find the index of the color "Green" in the modified ArrayList. 
 In this example, we start by creating an ArrayList called colors to store strings representing colors. We add three colors to the list: "Red", "Green", and "Blue".

Next, we demonstrate different operations on the ArrayList. We use size() to get the size of the ArrayList and get() to retrieve the item at index 1. We then use set() to change the value at index 2 from "Blue" to "Yellow".

After that, we showcase the removal of an item using remove(). We remove the color "Red" from the ArrayList. Finally, we use indexOf() to find the index of the color "Green" in the modified ArrayList.
 */

public class ArrayListOperations {
    public static void main(String[] args) {
        // Creating an ArrayList of Strings
        ArrayList<String> colors = new ArrayList<>();

        // Adding items to the ArrayList using add()
        colors.add("Red");
        colors.add("Green");
        colors.add("Blue");

        // Accessing the size of the ArrayList using size()
        int size = colors.size();
        System.out.println("Size of the ArrayList: " + size);

        // Finding an item by index using get()
        String itemAtIndex1 = colors.get(1);
        System.out.println("Item at index 1: " + itemAtIndex1);

        // Changing the value of an ArrayList item using set()
        colors.set(2, "Yellow");
        System.out.println("Modified ArrayList: " + colors);

        // Removing an item with a specific value using remove()
        colors.remove("Red");
        System.out.println("ArrayList after removing 'Red': " + colors);

        // Retrieving the index of an item with a specific value using indexOf()
        int index = colors.indexOf("Green");
        System.out.println("Index of 'Green': " + index);
    }
}
