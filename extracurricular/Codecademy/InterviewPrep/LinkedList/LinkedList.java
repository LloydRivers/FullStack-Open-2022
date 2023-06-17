public class LinkedList {
public Node head;

public LinkedList(){
    this.head = null;
}

public void addToHead(String data) {
    Node newHead = new Node("New Node");
    Node currentHead = this.head;
    this.head = newHead;

    if(currentHead != null) {
        this.head.setNextNode(currentHead);
    }
}

public void addToTail(String data) {

    Node tail = this.head;

    if(tail == null) {
        this.head = new Node("New Node goes here");
    } else {
        while(tail.getNext() != null){
        tail = tail.getNext();
        }
        tail.setNextNode(new Node("data "));
    }
}

/*
  Now we’re going to learn how to remove from the head of the list. To do this, we are first going to check to see if the list has a head. If it doesn’t, there is nothing to return. If there is a head, we will remove it by setting the list’s head equal to the original head’s next node, and then return that original head.
 */


}