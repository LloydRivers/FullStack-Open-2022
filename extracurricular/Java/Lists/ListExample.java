import java.util.ArrayList;
import java.util.List;
/*

- `List<String>`: This declares a variable named `stringList` of type `List<String>`, which means it can hold a collection of elements of type `String`. The `List` interface represents a sequence of elements, and `<String>` specifies the type of elements that the list will contain.

- `new ArrayList<>()`: This creates a new instance of the `ArrayList` class, which is an implementation of the `List` interface. The diamond operator `<>` is used to indicate that the type of elements in the `ArrayList` will be the same as the type specified in `List<String>`.

So, the line of code `List<String> stringList = new ArrayList<>();` initializes a new `ArrayList` and assigns it to the `stringList` variable, which is declared as a `List` that can hold `String` elements.

This allows you to perform operations and use methods defined in the `List` interface on the `stringList` object. You can add, remove, retrieve, and manipulate `String` elements in the list using various methods provided by the `List` interface and implemented by the `ArrayList` class.

 */

public class ListExample {
    public static void main(String[] args) {
        // Create a List of Strings
        List<String> fruits = new ArrayList<>();

        // Add elements to the List
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Orange");
        fruits.add("Mango");

        // Iterate through the List using enhanced for-loop
        for (String fruit : fruits) {
            System.out.println(fruit);
        }
    }
}
