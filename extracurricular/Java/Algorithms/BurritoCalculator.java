/*
  Update .hasLeftoverFunds() to return a boolean that is true if there is leftover money, and false if you spent all your money.
 */
public class BurritoCalculator {
    // The first call we pass in 7.
    public static boolean hasLeftoverFunds(int burritoCost) {
        // Initialize budget is 100
        int budget = 100;
        // Initialize numBurritos is 0
        int numBurritos = 0;

        while (budget >= burritoCost) {
            /*
             This is true so we enter the loop. We increment numBurritos by 1, and decrement budget by burritoCost.

             Since the calulation is essentially 100 - 7, we should be able to buy 14 burritos with 2 dollars left over.
             */
            numBurritos++;
            budget -= burritoCost;
        }

        System.out.println("Remaining budget: " + budget);
        return budget > 0;

    }

    public static void main(String[] args) {
        // Below are some sample values you can use to run your code.
        // When you're ready, uncomment the following lines one at a time to test each
        // case. Before running each test case, think about what value you expect to see
        // printed out.
         System.out.println(hasLeftoverFunds(7));
         System.out.println(hasLeftoverFunds(10));

    }
}
