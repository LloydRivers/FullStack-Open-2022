/*
 The grocery store organizes all of its items in ascending alphabetical order. Before you head out, you want to check to make sure that your list is alphabetized so you can pick up your items more quickly. For example, apples are in the first aisle, bean sprouts are in the second, followed by bubble gum, and zucchini comes last. When comparing characters, spaces come before any alphabetical letter (e.g. bean sprouts come before beans).

 Update the isAlphabetized() method to return true if the list is in ascending alphabetical order or false if it is not. 
 */

public class GroceryListTwo {
    public static boolean isAlphabetized(String[] groceryList) {
        if (groceryList.length > 1) {
            String lastGroceryItem = groceryList[0];

            for (int i = 1; i < groceryList.length; i++) {
                if (lastGroceryItem.compareTo(groceryList[i]) > 0) {
                    return false;
                }

                lastGroceryItem = groceryList[i];
            }
        }

        return true;
    }

    public static void main(String[] args) {
        // Below is a sample test case you can use to run your code.
        // Try playing around with different values in the array to test edge cases
        String[] groceryList = { "apples", "banana", "bananas", "chocolate" };
        System.out.println(isAlphabetized(groceryList));
    }

}

/*
 * There’s a few tricky parts to this one. First, notice where our loop starts.
 * We start our loop at 1 rather than 0. This is because we compare the String
 * at position i to the String at the position right before i. If we were to
 * start at 0, there wouldn’t be String before that index, and we would get an
 * error. Another way to solve this would be to compare the String at position i
 * with the next String. If we were to do that, we’d want to start at 0, but end
 * at the second to last String. We would need to do this because there would be
 * no “next” String to compare the last String to.
 * 
 * Next we use .compareTo() to do the actual comparison. If the Strings are in
 * the wrong order, then comparing the previous string to current string will
 * result in a positive number, and we return false.
 * 
 * If we make it through the whole array without returning false, then we know
 * all Strings were in the correct order and we return true.
 */

 