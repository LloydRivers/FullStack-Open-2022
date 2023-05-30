package Inheritance.Factory;

// Factory.java

public class Factory {
    private int productionCapacity;
    protected String factoryLocation;
    public String factoryName;

    // Constructor
    public Factory(int capacity, String location, String name) {
        productionCapacity = capacity;
        factoryLocation = location;
        factoryName = name;
    }

    private void assembleCar() {
        // Private method for assembling a car
    }

    protected void paintCar() {
        // Protected method for painting a car
    }

    public void shipCar() {
        // Public method for shipping a car
    }
}

/*
 In this example, we have a Factory class with private, protected, and public members (fields and methods). The Car class extends the Factory class, inheriting its protected and public members. The Car class also overrides the paintCar() method inherited from the Factory class.

By using the protected access modifier, the protectedField and protectedMethod() in the Factory class are accessible to the Car class, allowing it to use and override those members. However, the privateField, privateMethod(), and publicField in the Factory class are not accessible directly in the Car class.

This demonstrates how protected access modifier provides a level of accessibility between classes, allowing child classes to access and manipulate certain members of the parent class while still maintaining encapsulation and privacy.
 */
