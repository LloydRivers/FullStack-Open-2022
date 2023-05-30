package Inheritance.Factory;
/*
 +-------------+--------------+-------------+--------------+-------------+
|  Modifier   |    Class     |   Package   | Child Class  |   Global    |
+-------------+--------------+-------------+--------------+-------------+
|   public    |      ✔       |      ✔      |      ✔       |      ✔      |
+-------------+--------------+-------------+--------------+-------------+
|  protected  |      ✔       |      ✔      |      ✔       |      X      |
+-------------+--------------+-------------+--------------+-------------+
|  no modifier|      ✔       |      ✔      |      X       |      X      |
+-------------+--------------+-------------+--------------+-------------+
|   private   |      ✔       |      X      |      X       |      X      |
+-------------+--------------+-------------+--------------+-------------+

 */

// Car.java

public class Car extends Factory {
    private String carModel;

    // Constructor
    public Car(int capacity, String location, String name, String model) {
        // Call the parent class constructor using super()
        super(capacity, location, name);  
        carModel = model;
    }

    public void startEngine() {
        // Method specific to the Car class
    }

    // Override the protected method from the parent class
    @Override
    protected void paintCar() {
        // Call the parent class's paintCar() method using super()
        // Additional logic specific to painting a car in the Car class
        super.paintCar();  
    }
}

