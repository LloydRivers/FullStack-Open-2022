import java.util.ArrayList;

public class TreeNode {

  public Object data;
  public ArrayList<TreeNode> children;

  // Constructor
  public TreeNode(Object data) {
    this.data = data;
    this.children = new ArrayList<TreeNode>();
  }

  // addChild() method with parameter TreeNode child
  public void addChild(TreeNode child) {
    this.children.add(child);
  }

  // addChild() method with parameter Object data
  public void addChild(Object childData) {
    this.children.add(new TreeNode(childData));
  }

  public static void main(String[] args) {
    // Create the root node with data 20. Just to be absolutely clear, this is the root node because it is the first node created.
    TreeNode root = new TreeNode(20);
    // Also, this root variabe will have a data property of 20 and a children property that is an empty ArrayList.

    // Create a new TreeNode with data 30
    TreeNode biggerChild = new TreeNode(30);

    // Add a child to the root node with data 15. When we add a child, since we are creating another instance of TreeNode, we are creating a new node which itself has a data property and a children property.
    root.addChild(15);

    // Add the biggerChild as a child to the root node
    root.addChild(biggerChild);

    // Print the size of the children list of the root node
    System.out.println(root.children.size()); 
  }
}
