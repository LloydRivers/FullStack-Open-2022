/*
This SelectionSort class contains the selectionSort method that implements the selection sort algorithm. It takes an integer array arr as input and sorts it in ascending order. The main method demonstrates the usage of the selectionSort method by sorting an example array and printing the original and sorted arrays.

The selection sort algorithm is implemented using two nested loops. The outer loop iterates from the first element to the second-to-last element of the array, representing the boundary between the sorted and unsorted parts. The inner loop finds the minimum element in the unsorted part and swaps it with the first element of the unsorted part.  
 
 */

 public class SelectionSort {
    public static void selectionSort(int[] arr) {
        // Get the length of the array.
        int length = arr.length;

        /* 
         Outer loop: Iterate from the first element to the second-to-last element
         (representing the boundary between the sorted and unsorted parts)
         */
        for (int i = 0; i < length - 1; i++) {
            // Find the minimum element in the unsorted part of the array
            // Initialize minIndex as the current iteration's index
            int minIndex = i;

            // Inner loop: Iterate from the next element after i to the last element
            // to find the minimum element in the unsorted part
            for (int j = i + 1; j < length; j++) {
                // Check if the current element at index j is less than the minimum element found so far
               
                if (arr[j] < arr[minIndex]) {
                    // Update minIndex to the index of the new minimum element
                    minIndex = j;
                }
            }

            // Swap the minimum element with the first element of the unsorted part
            int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }

    public static void main(String[] args) {
        int[] arr = {2, 7, -7, 20, -5};

        System.out.println("Original Array:");
        printArray(arr);

        selectionSort(arr);

        System.out.println("Sorted Array:");
        printArray(arr);
    }

    public static void printArray(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }
}
