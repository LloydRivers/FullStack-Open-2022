

/*
 * Notes to test my understanding:
 * In terms of the stack, the first frame that goes on there has to be the main method.
 */

 public class sumDigits {
    // We know the number passed into this function is 12345
    public static int sumDigits(int number) {
        // Base case
        if (number == 0) {
            return 0;
        } else {
            /*
             * 1. First call:
             *    - Param of function: int number = 12345.
             *    - Therefore, (number % 10) = (12345 % 10) which is 5.
             *    - sumDigits(number / 10) = sumDigits(12345 / 10) = sumDigits(1234)
             *    - The real return statement looks like this: return 5 + sumDigits(1234);
             *    - Since we are now calling a function, we must build a new stack frame.
             * 
             * 2. Second call:
             *    - Param of function: int number = 1234.
             *    - Therefore, (number % 10) = (1234 % 10) which is 4.
             *    - sumDigits(number / 10) = sumDigits(1234 / 10) = sumDigits(123)
             *    - The real return statement looks like this: return 4 + sumDigits(123);
             *    - Since we are now calling a function, we must build a new stack frame.
             * 
             * 3. Third call:
             *    - Param of function: int number = 123.
             *    - Therefore, (number % 10) = (123 % 10) which is 3.
             *    - sumDigits(number / 10) = sumDigits(123 / 10) = sumDigits(12)
             *    - The real return statement looks like this: return 3 + sumDigits(12);
             *    - Since we are now calling a function, we must build a new stack frame.
             * 
             * 4. Fourth call:
             *    - Param of function: int number = 12.
             *    - Therefore, (number % 10) = (12 % 10) which is 2.
             *    - sumDigits(number / 10) = sumDigits(12 / 10) = sumDigits(1)
             *    - The real return statement looks like this: return 2 + sumDigits(1);
             *    - Since we are now calling a function, we must build a new stack frame.
             * 
             * 5. Fifth call:
             *    - Param of function: int number = 1.
             *    - Therefore, (number % 10) = (1 % 10) which is 1.
             *    - sumDigits(number / 10) = sumDigits(1 / 10) = sumDigits(0)
             *    - The real return statement looks like this: return 1 + sumDigits(0);
             *    - Since we are now calling a function, we must build a new stack frame.
             * 
             * 6. Sixth call:
             *    - Param of function: int number = 0.
             *    - This statement if (number == 0) is true, so we return 0.
             * 
             * Now the stack starts to unwind:
             *    - return 1 + sumDigits(0) = 1 + 0 = 
             * Now the stack starts to unwind:
             *    - return 1 + sumDigits(0) = 1 + 0 = 1
             *    - return 2 + sumDigits(1) = 2 + 1 = 3
             *    - return 3 + sumDigits(12) = 3 + 3 = 6
             *    - return 4 + sumDigits(123) = 4 + 6 = 10
             *    - return 5 + sumDigits(1234) = 5 + 10 = 15
             */
             
             return (number % 10) + sumDigits(number / 10);
            }
        }
    
        public static void main(String[] args) {
            // This is the very first call to the function, after this all other stack
            // frames are built by the public class sumDigits calling itself.
            int result = sumDigits(12345);
            System.out.println("Sum of digits: " + result);
        }
    }
    
    /*
     * Frame 1: main method
     * Frame 2: sumDigits(12345)
     * Frame 3: sumDigits(1234)
     * Frame 4: sumDigits(123)
     * Frame 5: sumDigits(12)
     * Frame 6: sumDigits(1)
     * Frame 7: sumDigits(0)
     */
    