public class LinearSearch {

    /*
     * Linear search is a brute force search algorithm that iterates through the
     * array and compares each element to the target value.
     * 
     * Time Complexity: O(n) - Linear time complexity, where 'n' is the size of the array.
     * It may take longer as the size of the array increases.
     * 
     * Space Complexity: O(1) - Constant space complexity, as it only uses a few additional variables
     * regardless of the size of the input.
     */

    public static int linearSearch(int[] arr, int target) {
        // Iterate through the array
        for (int i = 0; i < arr.length; i++) {
            // Compare each element to the target value
            if (arr[i] == target) {
                return i; // Return the index of the target value
            }
        }
        // Return -1 if the target value is not found
        return -1;
    }

    public static void main(String[] args) {
        int[] arr = { 1, 2, 3, 4 };
        System.out.println(linearSearch(arr, 3));
    }
}
