public class BinarySearchRecursion {
    public static int binarySearch(int[] arr, int left, int right, int target) {
        /*
         Our base case will run if the element is not in our array. We determine this by checking if our value for left is greater than our value for right. This means that we have exhausted our search.
        
        If so, return a value of -1.
         */
        if (left > right) {
            return -1;
          }
          
        /*
        Function parameter values: arr = { 2, 5, 6, 8, 9, 10 } right = 0; left = 5; target = 8
        Therefore (left + right) / 2 is (5 + 0) / 2;
        int mid = 2.5;

        In Java, when you perform integer division using the / operator, the result is always an integer. If the division results in a fractional part, it is simply truncated, and the result is an integer. 
        
        This behavior is known as "floor division" or "integer division."
        */
        int mid = (left + right) / 2; // int mid is now holding the value 2;

        // Base condition (target value is found)
        if (target == arr[mid]) {
        return mid;
      }
      /*
       We know that target is 8;
       We know that arr[mid] is 10;
       */
     
       // Is 8 less than 10?
       if (target < arr[mid]) {
        // Function parameter values: arr = { 2, 5, 6, 8, 9, 10 }; left = 5; int mid = 1; target = 8
        return binarySearch(arr, left, mid - 1, target);
      }
   
      // discard all elements in the left search space
      // including the mid element
       if (target > arr[mid]) {
        return binarySearch(arr, mid + 1, right, target);
      }
        return 1;
    }

    public static void main(String[] args) {
        int[] arr = { 2, 5, 6, 8, 9, 10 };
        int target = 8;
        int left = 0;
        int right = arr.length - 1;

        int index = binarySearch(arr, left, right, target);
        if (index != -1) {
            System.out.println("Element found at index " + index);
        } else {
            System.out.println("Element not found in the array");
        }
    }
}
