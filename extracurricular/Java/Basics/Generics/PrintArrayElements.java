/*
Exercise 2:
Write a generic method called printArrayElements that takes an array of elements of type T, where T is a class that implements the Comparable interface. The method should iterate over the array and print each element on a new line. Test your method by creating an array of strings and an array of integers, and calling the printArrayElements method with both arrays.
 */

public class PrintArrayElements {
    public static <T extends Comparable<T>> void printArrayElements(T[] array) {
        for (T element : array) {
            System.out.println(element);
        }
    }

    public static void main(String[] args) {
        String[] stringArray = {"Hello", "World"};
        Integer[] intArray = {1, 2, 3, 4, 5};

        printArrayElements(stringArray);
        printArrayElements(intArray);
    }
}