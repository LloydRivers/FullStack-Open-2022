import java.util.ArrayList;
import java.util.List;

// Review of Generics

// Generics help us make generic, scalable code.
// We can define generic classes, interfaces, or methods using the diamond operator (<>).
public class GenericsReview {

    // Generics provide compile-time type safety and bug detection as opposed to raw types.
    public static class Box<T> {
        private T data;

        public Box(T data) {
            this.data = data;
        }

        public T getData() {
            return data;
        }
    }

    public static void main(String[] args) {
        // Creating a generic class instance
        Box<String> stringBox = new Box<>("Hello");
        String str = stringBox.getData(); // No type casting needed
        System.out.println(str);

        // Wildcards are used to define unknown types.
        // Exploring super and extends on wildcard types.

        // Upper bound wildcard (extends) allows reading from the reference, but only guarantees it to be of a specific type or its subclass.
        List<? extends Number> numbers = new ArrayList<>();
        numbers.add(null); // Allowed, but can't add any specific number
        Number number = numbers.get(0); // Can read as Number type

        // Lower bound wildcard (super) allows writing to the reference, but only accepts a specific type or its superclass.
        List<? super Integer> integers = new ArrayList<>();
        integers.add(10); // Can add Integer or any of its subclasses
        Object object = integers.get(0); // Can read as Object type

        // Multiple upper bounds when using type parameters.
        // Type parameter T must satisfy multiple bounds.
        class DataProcessor<T extends Number & Comparable<T>> {
            // Class body
        }
    }
}
