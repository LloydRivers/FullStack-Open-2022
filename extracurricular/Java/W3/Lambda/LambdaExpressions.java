package W3.Lambda;

public class LambdaExpressions {
    
    public static void main(String[] args) {
        // Example 1: Lambda expression without parameters
        MyFunctionalInterface func1 = () -> {
            System.out.println("Hello, World!");
        };
        func1.myMethod();

        // Example 2: Lambda expression with single parameter
        AnotherFunctionalInterface func2 = (num) -> {
            int result = num * 2;
            System.out.println("Result: " + result);
        };
        func2.myMethod(5);

        // Example 3: Lambda expression with multiple parameters
        MathOperation add = (a, b) -> a + b;
        int result = add.operation(3, 4);
        System.out.println("Result: " + result);
    }

    interface MyFunctionalInterface {
        void myMethod();
    }

    interface AnotherFunctionalInterface {
        void myMethod(int num);
    }

    interface MathOperation {
        int operation(int a, int b);
    }
}
