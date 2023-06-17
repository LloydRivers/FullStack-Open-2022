public class Node {
    private String data;
    private Node next;

    public Node(String data) {
        this.data = data;
        this.next = null;
    }

    public void setNextNode(Node node) {
        this.next = node;
    }

    public Node getNext(){
        return this.next;
    }
    
   
    public static void main(String[] args) {
        Node nodeOne = new Node("Number One");
        Node nodeTwo = new Node("Number Two");
        nodeOne.setNextNode(nodeTwo);
        System.out.println(nodeOne.getNext().data);
    }
}