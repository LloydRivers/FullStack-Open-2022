/*
1. Start with a sorted array.
2. Set the left pointer to the beginning of the array and the right pointer to the end of the array.
3. Calculate the middle index by taking the average of the left and right pointers: `mid = (left + right) / 2`.
4. Compare the middle element of the array with the target value.
   - If the middle element is equal to the target, the search is successful, and the index is returned.
   - If the middle element is greater than the target, the target value must be in the left half of the array. Update the right pointer to `mid - 1` and go back to step 3.
   - If the middle element is less than the target, the target value must be in the right half of the array. Update the left pointer to `mid + 1` and go back to step 3.
5. Repeat steps 3-4 until the target value is found or the search space is exhausted (left pointer becomes greater than the right pointer).
6. If the target value is not found, return an indication (e.g., -1) to represent the value is not present in the array.

By repeatedly dividing the search space in half, the binary search algorithm efficiently narrows down the possible locations of the target value, reducing the search time significantly compared to linear search.

It's important to note that binary search requires the array to be sorted in ascending or descending order for accurate results. If the array is unsorted, the binary search may not work correctly.

If you have any further questions or if there's anything specific you'd like to know about binary search or any other topic, feel free to ask!
*/

const binarySearch = (arr, target) => {
  let left = 0; // left pointer initialized to the first index of the array
  let right = arr.length - 1; // right pointer initialized to the last index of the array
  let mid = Math.floor((left + right) / 2); // calculate the middle index of the array

  // We know that the first call looks like this: ([1, 2, 3, 4, 5], 4)
  console.log(`Initial Call: (${arr}, ${target})`);

  /*
  Values of the variables in the first call: left = 0, right = 4, mid = 2
  */

  // while(0 <= 4)
  while (left <= right) {
    // if(4 === 4). If this is true the middle element is equal to the target, return the index
    if (arr[mid] === target) {
      return mid;
      // else if: the array is ([1, 2, 3, 4, 5], 4). mid = 2, arr[mid] = 3, target = 4, so the else if cannot be true
    } else if (arr[mid] > target) {
      // if the middle element is greater than the target
      right = mid - 1; // update the right pointer to search in the left half of the array
      mid = Math.floor((left + right) / 2); // calculate the new middle index
    } else {
      // Old left was 0, right was 4, mid was 2
      // New left is 3, right is 4, mid is 3
      left = mid + 1; // update the left pointer to search in the right half of the array
      mid = Math.floor((left + right) / 2); // calculate the new middle index
    }
    console.log(`Current State: left=${left}, right=${right}, mid=${mid}`);
  }

  return -1; // target not found, return -1
};

// Call the function and print the results
console.log(binarySearch([1, 2, 3, 4, 5], 4)); // Output: 3
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // Output: -1
console.log(binarySearch([1, 2, 3, 4, 5], 1)); // Output: 0
