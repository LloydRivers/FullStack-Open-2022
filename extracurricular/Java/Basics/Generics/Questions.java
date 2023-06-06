public class Questions {
    /* 
     * 1. What is the purpose of using generics in Java?
     * Generics allow you to write code that can be reused for different types.
     * This is useful when you want to write code that can be used for different
     * types of objects, but you don't want to write the same code over and over again.
     */

    /*
     * 2. Explain the concept of type parameters in generics.
     * Type parameters are used to specify the type of object that a generic
     * class or interface can be used with. For example, if you have a generic
     * class called `Box`, you can specify the type of object that the `Box`
     * class can be used with by using a type parameter. For example, if you
     * want to create a `Box` that can hold `String` objects, you can specify
     * the type parameter as `String` when you instantiate the `Box` class.
     */

    /*
     * 3. How do you declare a generic class or interface in Java?
     * You can declare a generic class or interface by using the following syntax:
     *
     * public class ClassName<T> {
     *    // class body
     * }
     *
     * public interface InterfaceName<T> {
     *    // interface body
     * }
     */

    /*
     * 4. What is the difference between a generic class and a parameterized type?
     * A generic class is a class that has a type parameter. A parameterized type
     * is a type that has been instantiated with a specific type argument. For
     * example, if you have a generic class called `Box`, you can instantiate
     * the `Box` class with a specific type argument. For example, if you want
     * to create a `Box` that can hold `String` objects, you can instantiate
     * it as `Box<String>`.
     */

    /*
     * 5. What is the purpose of type arguments in generics?
     * Type arguments are used to specify the specific type that will be used with a generic class or interface. They allow you to create instances of a generic class with a specific type and provide compile-time type safety.
     */

    /*
     * 6. How do you use the diamond operator (`<>`) for type inference?
     * The diamond operator (`<>`) is used for type inference when creating an instance of a generic class.
     * Instead of explicitly specifying the type argument, you can use the diamond operator to let the compiler  infer the type based on the context.
     */

    /*
     * 7. What is the significance of the `extends` and `super` keywords when working with bounded type parameters?
     * The `extends` and `super` keywords are used in bounded type parameters to define the upper and lower bounds
     * of the type that can be used as a type argument. `extends` is used for an upper bound, where the type argument
     * must be a subtype of the specified type. `super` is used for a lower bound, where the type argument must be
     * a supertype of the specified type.
     */

    /*
     * 8. Can you have multiple type parameters in a single class or interface? If so, how do you declare them?
     * Yes, you can have multiple type parameters in a single class or interface. To declare multiple type parameters,
     * you separate them with commas.
     */

    /*
     * 9. How do you instantiate a generic class with a specific type argument?
     * To instantiate a generic class with a specific type argument, you provide the type argument in the angle brackets (`<>`)
     * when creating an instance of the class.
     */

    /*
     * 10. Explain the concept of type erasure in Java generics.
     * Type erasure is a process in Java generics where the type information specified by the type parameters is removed at compile time.
     * This means that the generic types are treated as their upper bound (or `Object` if no upper bound is specified) at runtime.
     * The type erasure mechanism allows for compatibility with pre-generic Java code and helps to ensure type safety during compilation.
     */

    public static void main(String[] args) {
        // Code here
    }
}
