import java.util.Queue;
import java.util.LinkedList;
import java.util.PriorityQueue;
/*
    * This program demonstrates the use of the Queue interface and its implementations.

    A Linked List is a data structure consisting of nodes, where each node contains a value and a reference to the next node. In this case, the LinkedList implementation is used to represent a queue, where elements are added to the end and removed from the front.

    In the processAlphabetically method, you've explained the concepts of removing the head element using remove() and accessing the head element without removing it using peek() correctly. The while loop iterates until the queue becomes empty by removing the head element from the alphabeticalQueue and printing it.
 */

public class QueueExample {
  public static void main(String[] args) {
    // A Queue is a data structure that follows the First-In-First-Out (FIFO) principle.
    // Here, we create a Queue of type String using LinkedList implementation.
    Queue<String> line = new LinkedList<>();
    line.add("Mike");
    line.add("Isabel");
    line.add("Jenny");

    // Iterating through the elements of the Queue using an enhanced for-loop.
    for (String name : line) {
      System.out.println(name);
    }
    
    // Calling the processAlphabetically method to process the elements in alphabetical order.
    processAlphabetically(line);
  }

  public static void processAlphabetically(Queue<String> queue) {
    // We create another Queue called alphabeticalQueue using PriorityQueue implementation.
    // PriorityQueue orders the elements based on their natural ordering or a custom comparator.
    // In this case, the elements will be ordered alphabetically.
    Queue<String> alphabeticalQueue = new PriorityQueue<>();

    // Adding the elements from the original queue to the alphabeticalQueue.
    for (String name : queue) {
      alphabeticalQueue.offer(name);
    }

    // Removing and printing the elements from the alphabeticalQueue until it becomes empty.
    // The peek() method returns the head of the queue without removing it.
    // The remove() method removes and returns the head of the queue.
    while (alphabeticalQueue.peek() != null) {
      String headElement = alphabeticalQueue.remove();
      System.out.println("Processing: " + headElement);
    }
  }
}
