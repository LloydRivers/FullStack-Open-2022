package Inheritance;

class Parent {
    private int value;

    public Parent(int value) {
        this.value = value;
    }

    // Other methods and fields...
}

class Child extends Parent {
    private String name;

    public Child(int value, String name) {
        // Call to the Parent class constructor
        super(value); 
        this.name = name;
    }

    // Other methods and fields...
}

/*
 In the above example, the Child class extends the Parent class. The Child class has its own additional field name, but it also needs to initialize the value field from the Parent class. To achieve this, the Child class constructor calls super(value) to invoke the constructor of the Parent class, passing the value parameter.

By explicitly calling the parent class constructor using super(), we ensure that the inherited fields are properly initialized, and any necessary initialization logic in the parent class constructor is executed.

So, while the child class does not automatically inherit the constructor of the parent class, it can invoke the parent class constructor explicitly using super() to properly initialize the inherited fields.
 */
