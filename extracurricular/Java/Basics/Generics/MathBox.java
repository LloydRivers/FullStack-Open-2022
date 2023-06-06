/*
Exercise 1:
Create a generic class called MathBox that has a type parameter T with an upper bound of Number. The MathBox class should have a constructor that takes an argument of type T and stores it in an instance variable. Implement a method called multiplyByTwo() that multiplies the value stored in the instance variable by 2 and returns the result. Test your implementation by creating instances of MathBox with different numeric types.
 */

public class MathBox <T extends Number> {
    private T value;

    public MathBox(T value) {
        this.value = value;
    }

    public T multiplyByTwo() {
        return (T) new Integer(value.intValue() * 2);
    }

    public static void main(String[] args) {
        MathBox<Integer> mathBox = new MathBox<>(5);
        System.out.println(mathBox.multiplyByTwo());
    }
}


