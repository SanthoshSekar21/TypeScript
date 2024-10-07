//Hybrid inheritance is a combination of two or more types of inheritance, such as single, multiple, and hierarchical inheritance. 
// TypeScript allows you to create complex relationships using interfaces and classes.

// However, TypeScript does not allow for direct multiple inheritance (a class inheriting from multiple classes).
//  Instead, you can achieve hybrid inheritance by combining classes and interfaces.
class Engine {
    public start(): void {
        console.log("Engine started");
    }
}

class Vehicle extends Engine {
    public drive(): void {
        console.log("Vehicle is driving");
    }
}

interface Flyable {
    fly(): void;
}

class FlyingCar extends Vehicle implements Flyable {
    public fly(): void {
        console.log("Flying car is flying");
    }
}

const myFlyingCar = new FlyingCar();
myFlyingCar.start(); // Output: Engine started
myFlyingCar.drive(); // Output: Vehicle is driving
myFlyingCar.fly();   // Output: Flying car is flying
