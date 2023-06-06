package Traversing2DArrays;

public class ArrayTraversal {
  
    public static void main(String[] args) {
      // Row-Major Order Traversal
      int[][] matrix = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
      };
      
      // Traversing the array in row-major order
      System.out.println("Row-Major Order Traversal:");
      traverseRowMajor(matrix);
      System.out.println();
      
      // Column-Major Order Traversal
      int[][] matrix2 = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
      };
      
      // Traversing the array in column-major order
      System.out.println("Column-Major Order Traversal:");
      traverseColumnMajor(matrix2);
    }
    
    // Method to traverse the 2D array in row-major order
    public static void traverseRowMajor(int[][] matrix) {
      for (int row = 0; row < matrix.length; row++) {
        for (int col = 0; col < matrix[row].length; col++) {
          int element = matrix[row][col];
          System.out.print(element + " ");
        }
        System.out.println();
      }
    }
    
    // Method to traverse the 2D array in column-major order
    public static void traverseColumnMajor(int[][] matrix) {
      int numRows = matrix.length;
      int numCols = matrix[0].length;
      
      for (int col = 0; col < numCols; col++) {
        for (int row = 0; row < numRows; row++) {
          int element = matrix[row][col];
          System.out.print(element + " ");
        }
        System.out.println();
      }
    }
  }
  
