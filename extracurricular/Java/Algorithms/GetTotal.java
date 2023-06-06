 /*
 Exercise taken from Codecademy's Learn Java course, lesson on Recursion.
 */

import java.util.ArrayList;
class Total {
   /* 
   The getTotal method takes an ArrayList of integers (arr) as a parameter and returns the total sum of the integers in the list.
   */
  public static int getTotal(ArrayList<Integer> arr) {
    /*
     In the getTotal method, there's a base case check using an if statement. If the size of the arr is 0 (empty list), it means there are no integers to sum, so it returns 0 as the total. 
    */
    if(arr.size() == 0){
      return 0;
    }
    /*
    If the base case is not met (i.e., the list is not empty), it calculates the sum recursively. It retrieves the first element of the arr using arr.get(0) and adds it to the total sum of the remaining elements.
    */
    
    /*
     To calculate the sum of the remaining elements, it makes a recursive call to getTotal by passing a new ArrayList containing the sublist of arr starting from index 1 (arr.subList(1, arr.size())). 
     This sublist contains all the elements from index 1 to the end of the list.
     */
    return arr.get(0) + getTotal(new ArrayList<Integer>(arr.subList(1, arr.size())));
    /*
     The recursive call effectively reduces the size of the list by removing the first element and calculates the sum of the remaining elements in the updated sublist.

     This process continues recursively until the base case is met (empty list), and then the sum is calculated by adding each element in the call stack.
     */
     
     /*
      To understand the return of this function, lets first see the values on each call of the function:
      We know that this is the array being passed in: getTotal([3, 5, 6, 9])

      First call of the function will be: 3 + getTotal([5, 6, 9])
      Second call of the function will be: 5 + getTotal([6, 9])
      Third call of the function will be: 6 + getTotal([9])
      Fourth call of the function will be: 9 + getTotal([])
      Fifth call of the function will be: 0

      Now, lets see the return of each call to see how we reach the total sum:
      Fifth call of the function will be: 0
      Fourth call of the function will be: 9 + 0 = 9
      Third call of the function will be: 6 + 9 = 15
      Second call of the function will be: 5 + 15 = 20
      First call of the function will be: 3 + 20 = 23

      The final return of the function will be 23.

      One thing to note is on each call of the function, a new frame is put on to the stack, that frame has its own local variables and parameters. 
      So, when we call getTotal([5, 6, 9]), the frame for getTotal([3, 5, 6, 9]) is still on the stack,  but it is not being used until the function call is complete.

      */
  }

  public static void main(String[] args) {
    /*
     Visualizing the array in a Javscript context: const myArrayLs = [3, 5, 6, 9];
     */
    ArrayList<Integer> myArrayLs = new ArrayList<Integer>();
    myArrayLs.add(3);
    myArrayLs.add(5);
    myArrayLs.add(6);
    myArrayLs.add(9);
  
    int total = getTotal(myArrayLs);
    System.out.println(total);
  }
}