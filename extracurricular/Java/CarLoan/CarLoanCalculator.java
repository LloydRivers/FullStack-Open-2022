package CarLoan;

public class CarLoanCalculator {
    // The MONTHS_IN_YEAR variable is declared as static because it represents a constant value
    // that is not specific to any instance of the class. It is in capital letters to indicate
    // that it is a constant value and follows the naming convention for constants in Java.
    // The final keyword is used to make the variable unmodifiable once assigned a value.
    private static final int MONTHS_IN_YEAR = 12;
    private static final int INTEREST_FACTOR = 100;
    
    // The private access modifier is used here to encapsulate the instance variables.
    // It restricts direct access to these variables from outside the class, promoting
    // encapsulation and information hiding.
    private int carLoan;
    private int loanLength;
    private int interestRate;
    private int downPayment;

    public CarLoanCalculator(int carLoan, int loanLength, int interestRate, int downPayment) {
        this.carLoan = carLoan;
        this.loanLength = loanLength;
        this.interestRate = interestRate;
        this.downPayment = downPayment;
    }

    public void calculateMonthlyPayment() {
        if (loanLength <= 0 || interestRate <= 0) {
            System.out.println("Error! You must take out a valid car loan.");
        } else if (downPayment >= carLoan) {
            System.out.println("The car can be paid in full.");
        } else {
            int remainingBalance = carLoan - downPayment;
            int months = loanLength * MONTHS_IN_YEAR;
            int monthlyBalance = remainingBalance / months;
            int interest = (monthlyBalance * interestRate) / INTEREST_FACTOR;
            int monthlyPayment = monthlyBalance + interest;
            System.out.println(monthlyPayment);
        }
    }

    public static void main(String[] args) {
        CarLoanCalculator carLoanCalculator = new CarLoanCalculator(10000, 3, 5, 2000);
        carLoanCalculator.calculateMonthlyPayment();
    }
}
