
// Import: packages
import java.io.Serializable;
import java.io.FileOutputStream;
import java.io.ObjectOutputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

public class Person implements Serializable {
    // Private variables are not inherited by subclasses
    private String name;
    private int age;
    /*
     Breaking down access modifier terminology:
        - public: accessible from anywhere
        - private: accessible only from within the class
        - protected: accessible from within the class and subclasses
    */

    /*
     The below line explained:
        - serialVersionUID is a unique identifier for the class
        - It is used during deserialization to verify that the sender and receiver
          of a serialized object have loaded classes for that object that are
          compatible with respect to serialization.

        - If the receiver has loaded a class for the object that has a different
          serialVersionUID than that of the corresponding sender's class, then
          deserialization will result in an InvalidClassException.

        - A serializable class can declare its own serialVersionUID explicitly by
          declaring a field named "serialVersionUID" that must be static, final,
          and of type long.

        - Undertanding static, final and long:
            - static: a static variable is common to all the instances (or objects)
              of the class because it is a class level variable. In other words you
              can say that only a single copy of static variable is created and
              shared among all the instances of the class. Memory allocation for
              such variables only happens once when the class is loaded in the
              memory.

            - final: a final variable is a variable whose value cannot be changed
              once it has been assigned. Final variables, like static variables,
              are stored in the Class area and not in the stack.

            - long: a long data type is a 64-bit signed two's complement integer.
              It has a minimum value of -9,223,372,036,854,775,808 and a maximum
              value of 9,223,372,036,854,775,807 (inclusive). Use this data type
              when you need a range of values wider than those provided by int.
              The Long class also contains methods like compareUnsigned, divideUnsigned
              etc to support arithmetic operations for unsigned long.

        - If a serializable class does not explicitly declare a serialVersionUID,
          then the serialization runtime will calculate a default serialVersionUID
          value for that class based on various aspects of the class, as described
          in the Java Object Serialization Specification.

        - However, it is strongly recommended that all serializable classes
          explicitly declare serialVersionUID values, since the default
          serialVersionUID computation is highly sensitive to class details that
          may vary depending on compiler implementations, and can thus result in
          unexpected InvalidClassExceptions during deserialization.

        - Therefore, to guarantee a consistent serialVersionUID value across
          different java compiler implementations, a serializable class must
          declare an explicit serialVersionUID value.
          
        - It is also strongly advised that explicit serialVersionUID declarations
          use the private modifier where possible, since such declarations apply
          only to the immediately declaring class--serialVersionUID fields are
          not useful as inherited members
     */
    private static final long serialVersionUID = 1L;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public static void main(String[] args) throws FileNotFoundException, IOException {
        Person michael = new Person("Michael", 26);
        Person peter = new Person("Peter", 37);

        // Create a FileOutputStream object to write bytes to a file named persons.txt
        FileOutputStream fileOutputStream = new FileOutputStream("persons.txt");

        // Create an ObjectOutputStream object to serialize objects and write them to
        // the output stream
        ObjectOutputStream objectOutputStream = new ObjectOutputStream(fileOutputStream);

        // Serialize the michael and peter objects and write them to the output stream
        objectOutputStream.writeObject(michael);
        objectOutputStream.writeObject(peter);

        // Close the ObjectOutputStream and FileOutputStream
        objectOutputStream.close();
        fileOutputStream.close();
    }
}
