public class SumOfDigits {
    public static int sumDigits(int n) {
        // The base case checks if n is equal to 0. If it is, it means there are no more digits left to process, so we return 0.
        if (n == 0) {
            return 0;
        }
        // We use the modulus operator % to extract the last digit of n by calculating n % 10. We add the last digit to the sum of the remaining digits. To get the remaining digits, we divide n by 10 using integer division n / 10.
        return n % 10 + sumDigits(n / 10);

    }

    public static void main(String[] args) {
        int number = 12345; // Adjust the value of the number as needed
        int sum = sumDigits(number);
        System.out.println("Sum of digits in " + number + " is: " + sum);
    }
}

/*
Visualizing the call stack:
Calculating sumDigits(12345)
    |
    --- sumDigits(1234)
        |
        --- sumDigits(123)
            |
            --- sumDigits(12)
                |
                --- sumDigits(1)
                    |
                    --- sumDigits(0) 
*/
/*
Visualizing the return values as each function gets popped off the stack:
sumDigits(0) = 0
sumDigits(1) = 1 + sumDigits(0) = 1 + 0 = 1
sumDigits(12) = 2 + sumDigits(1) = 2 + 1 = 3
sumDigits(123) = 3 + sumDigits(12) = 3 + 3 = 6
sumDigits(1234) = 4 + sumDigits(123) = 4 + 6 = 10
sumDigits(12345) = 5 + sumDigits(1234) = 5 + 10 = 15

 */
