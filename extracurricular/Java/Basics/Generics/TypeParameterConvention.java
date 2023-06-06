/*
 Text take from Codecademy:

 When defining type parameters, although not being a hard requirement, it’s best practice to make them single, uppercase letters to easily distinguish them from the names of classes or variables. By convention, type parameters are E (Elements), K (Key), N (Number), T (Type), V (Value), and S (or U or V) for multiple type parameters.
 */

public class TypeParameterConvention {
    // Single Type Parameter
    public class Box<T> {
        private T data;

        public Box(T data) {
            this.data = data;
        }

        public T getData() {
            return this.data;
        }
    }

    // Multiple Type Parameters
    public class Pair<K, V> {
        private K key;
        private V value;

        public Pair(K key, V value) {
            this.key = key;
            this.value = value;
        }

        public K getKey() {
            return this.key;
        }

        public V getValue() {
            return this.value;
        }

        public void setKey(K key) {
            this.key = key;
        }

        public void setValue(V value) {
            this.value = value;
        }
    }

    public static void main(String[] args) {
        TypeParameterConvention instance = new TypeParameterConvention();

        // Single Type Parameter usage
        Box<String> stringBox = instance.new Box<>("Hello");
        System.out.println(stringBox.getData());

        // Multiple Type Parameters usage
        Pair<Integer, String> pair = instance.new Pair<>(1, "One");
        System.out.println(pair.getKey() + ": " + pair.getValue());
    }
}
