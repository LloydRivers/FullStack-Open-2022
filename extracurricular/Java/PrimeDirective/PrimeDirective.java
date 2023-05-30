package PrimeDirective;
import java.util.ArrayList;

public class PrimeDirective {

    // Method to check if a number is prime
    public boolean isPrime(int number) {
        if (number == 2) {
            return true;
        } else if (number < 2) {
            return false;
        }

        // Iterate from 2 to number - 1 to check for factors
        for (int i = 2; i < number; i++) {
            if (number % i == 0) {
                return false;  
            }
        }

        return true;
    }
     
    // Method to return an ArrayList of only prime numbers from an array
    public ArrayList<Integer> onlyPrimes(int[] numbers) {
        ArrayList<Integer> primes = new ArrayList<Integer>();

        // Iterate over each number in the input array
        for (int number : numbers) {
            if (isPrime(number)) {
                primes.add(number); // Add the prime number to the ArrayList
            }
        }

        return primes;
    }

    public static void main(String[] args) {

        PrimeDirective pd = new PrimeDirective();
        int[] numbers = {6, 29, 28, 33, 11, 100, 101, 43, 89};

        // Test the isPrime method
        System.out.println(pd.isPrime(7));   // Output: true
        System.out.println(pd.isPrime(28));  // Output: false
        System.out.println(pd.isPrime(2));   // Output: true
        System.out.println(pd.isPrime(0));   // Output: false
        System.out.println(pd.isPrime(1));   // Output: false

        // Get the ArrayList of only prime numbers from the input array
        System.out.println(pd.onlyPrimes(numbers)); // Output: [29, 11, 101, 43, 89]
    
    }  
    
}
