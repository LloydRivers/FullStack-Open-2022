/*
 We want to calculate how much tip to give the cashier, which is the largest digit in your budget multiplied by 900.

 In the .getTip() method, set maxDigit to the largest digit in budget. For  example, if the budget is 281, then the maxDigit should be 8.
 */

public class BurritoCalculatorThree {
    public static int getTip(int budget) {
        int maxDigit = 0;
    /*
     There’s a couple of things to take note of here. The first is that we use % 10 to find the digit in the ones place. For example, 73 % 10 will give you 3. After we find the ones digit, we compare that digit to our previous maximum and update that maximum accordingly. Finally, we look at the next digit by dividing by 10. This will essentially chop off the last digit — 73 / 10 will give us 7 — the 3 has been chopped off! We’ll keep doing this until we chop off the last digit. What does it mean to chop off the last digit? Well if we divide 7 by 10, we’ll end up with 0. So we know we have digits to cut off as long as budget > 0.
     */
        while (budget > 0) {
            int digit = budget % 10;
            if (digit > maxDigit) {
                maxDigit = digit;
            }
            budget /= 10;
        }


            
        return maxDigit * 900;
      }
        
      public static void main(String []args) {
        // Try passing different arguments for your budget with varying numbers of digits, like 62, 374, 599, etc
        System.out.println(getTip(123));
      }
}


  
  
  