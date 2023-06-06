/*
  As you enter the store, a greeter congratulates you on being their 99th customer! Any item in your cart that ends with 99 cents will make your entire bill $0.00!

  Update the .hasSpecialItem() method to return true if there is an item in your  list that ends with 99 cents, and false if there is not an item that ends with 99 cents.
 */

public class GroceryList {
    public static boolean hasSpecialItem(double[] groceryPrices) {
        // Iterate over each item in the groceryPrices array
        for (double itemCost : groceryPrices) {
            /*
            The java string valueOf() method converts different types of values into string. By the help of string valueOf() method, you can convert int to string, long to string, boolean to string, character to string, float to string, double to string, object to string and char array to string.
            */ 
            String itemCostStr = String.valueOf(itemCost);
            // Check if the item cost has more than one digit and ends with "99"
            if (itemCostStr.length() > 1
            /*
             A part of String is called substring. In other words, substring is a subset of another String. Java String class provides the built-in substring() method that extract a substring from the given string by using the index values passed as an argument. In case of substring() method startIndex is inclusive and endIndex is exclusive.

             Here the starting index is the length of the string minus 2, and the ending index is the length of the string. This means that the substring will be the last two characters of the string.
             */
                    && itemCostStr.substring(itemCostStr.length() - 2, itemCostStr.length()).equals("99")) {
                // If an item ending with "99" is found, return true
                return true;
            }
        }

        // If no item ending with "99" is found, return false
        return false;
    }

    public static void main(String[] args) {
        // Below is a sample test case you can use to run your code.
        // Try playing around with different values in the array to test edge cases
        double[] groceryList = { 10.0, 89.9, 8.99, 2.34 };
        System.out.println(hasSpecialItem(groceryList));
    }
}
