public class BurritoCalculatorTwo {
    
    public static int getNumDivisibleOrders(int lastOrderNumber) {
        int numDivisbleOrders = 0;

        for(int i = 1; i <= lastOrderNumber; i++) {
            if(i % 9 == 0) {
                numDivisbleOrders++;
            }
        }
    
    
        return numDivisbleOrders;
      }
      
      public static void main(String []args) {
        // Try running the getDivisibleOrders method with different order numbers.
        // Before you run your code, think about what value you expect to be printed in the output.
        System.out.println(getNumDivisibleOrders(18));
      }
}


  
  