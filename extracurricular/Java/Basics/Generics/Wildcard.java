public class Wildcard {

    public static void main(String[] args) {
        // Create a Bag of Strings
        Bag<String> stringBag = new Bag<>("Hello");
        System.out.println("String Bag: " + stringBag.getData());

        // Create a Bag of Integers
        Bag<Integer> integerBag = new Bag<>(10);
        System.out.println("Integer Bag: " + integerBag.getData());

        // Use the generic method to get the Bag of the same type
        Bag<String> newStringBag = getBag(stringBag);
        System.out.println("New String Bag: " + newStringBag.getData());

        Bag<Integer> newIntegerBag = getBag(integerBag);
        System.out.println("New Integer Bag: " + newIntegerBag.getData());
    }

    /**
     * Generic method that accepts a Bag object of type T
     * and returns a Bag object of the same type T.
     */
    public static <T> Bag<T> getBag(Bag<T> bag) {
        return bag;
    }

    /**
     * Generic class representing a Bag that holds data of type T.
     */
    public static class Bag<T> {
        private T data;

        public Bag(T data) {
            this.data = data;
        }

        public T getData() {
            return data;
        }
    }
}