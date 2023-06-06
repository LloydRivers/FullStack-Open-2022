package Computer;
import java.io.*;

/**
 * The Computer class represents a computer object that can be serialized.
 * It contains a keyboard and a monitor as its components.
 */
public class Computer implements Serializable {
    private static final long serialVersionUID = 1L;
    Keyboard keyboard;
    Monitor monitor;

    /**
     * The main method creates a Computer object, initializes its components,
     * and performs serialization to store the object in a file.
     */
    public static void main(String[] args) {
        Computer computer = new Computer();
        computer.keyboard = new Keyboard();
        computer.monitor = new Monitor();
        try {
          // Create a FileOutputStream to write the serialized object to a file named "computerStorage.txt"
          FileOutputStream fileOutputStream = new FileOutputStream("computerStorage.txt");
      
          // Create an ObjectOutputStream to write the object to the FileOutputStream
          ObjectOutputStream objectOutputStream = new ObjectOutputStream(fileOutputStream);
      
          // Write the "computer" object to the ObjectOutputStream, performing serialization
          objectOutputStream.writeObject(computer);
      
          // Close the ObjectOutputStream to flush any buffered data and release system resources
          objectOutputStream.close();
      
          // Close the FileOutputStream to release system resources
          fileOutputStream.close();
      } catch (IOException e) {
          // If an IOException occurs during serialization, catch the exception and print an error message
          System.out.println("Something went wrong...");
      }
      
        System.out.println("Everything is good here! Serialization complete!");
    }
}
