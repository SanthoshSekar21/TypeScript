//Single inheritance is a type of inheritance where a class (child or subclass) inherits properties and behaviors (methods) from a single parent class (superclass). 
//It is the most straightforward form of inheritance, establishing a one-to-one relationship between the parent and child classes.
//This pattern is widely used when there is a clear hierarchy, and a class needs to extend the functionality of a single base class.

class Vehicle {
        public start(): void {
            console.log("Vehicle started");
        }
    }
    
    class Car extends Vehicle {
        public start(): void {
            console.log("Car started with key ignition");
        }
    }
    
    const car = new Car();
    car.start(); // Car started with key ignition
    
    





    