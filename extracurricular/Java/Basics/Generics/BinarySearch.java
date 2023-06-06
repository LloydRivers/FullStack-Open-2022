/**
 * The BinarySearch class implements the binary search algorithm to find the index of a target element in a sorted array.
 * It utilizes a divide-and-conquer approach by repeatedly dividing the search space in half.
 */
class BinarySearch {
  
    /**
     * Performs binary search on a sorted array to find the index of the target element.
     *
     * @param arr    The sorted array to be searched.
     * @param target The target element to be found.
     * @return The index of the target element if found, otherwise -1.
     */
    public static int binarySearch(int[] arr, int target) {
      int left = 0; // The leftmost index of the search space.
      int right = arr.length - 1; // The rightmost index of the search space.
   
      // Iterate while there are elements remaining in the search space.
      while (left <= right) {
        int mid = (left + right) / 2; // Calculate the middle index.
   
        // Check if the target element is found at the middle index.
        if (target == arr[mid]) {
          return mid; // Return the index of the target element.
        }
   
        // Adjust the search space based on the relative value of the target and middle element.
        if (target < arr[mid]) {
          right = mid - 1; // Target is in the left half, update the right pointer.
        } else {
          left = mid + 1; // Target is in the right half, update the left pointer.
        }
      }
   
      return -1; // Target element was not found, return -1.
    }
   
    public static void main(String[] args) {
      int[] arr = { 2, 5, 6, 8, 9, 10 }; // Sorted array for binary search.
      int target = 6; // Target element to search for.
   
      // Perform binary search and print the result.
      int index = binarySearch(arr, target);
      if (index != -1) {
        System.out.println("Element found at index " + index);
      } else {
        System.out.println("Element not found in the array");
      }
    }
  }
/*
Code Explanation:

The BinarySearch class implements the binary search algorithm, which allows finding the index of a target element in a sorted array efficiently. The class contains a binarySearch method that performs the search and a main method to demonstrate its usage.

The binarySearch method takes two parameters: arr (the sorted array) and target (the element to be found). It initializes the left and right variables to represent the boundaries of the search space, initially the entire array. The method then enters a loop that continues until the search space is empty (left > right).

Within the loop, the method calculates the middle index mid as the average of left and right. It compares the target element with the element at index mid. If they are equal, the method returns the index mid as the target element has been found.

If the target is less than the element at index mid, it means the target is in the left half of the search space. In this case, the right pointer is updated to mid - 1, effectively discarding the right half of the search space.

If the target is greater than the element at index mid, it means the target is in the right half of the search space. In this case, the left pointer is updated to mid + 1, effectively discarding the left half of the search space.
*/  