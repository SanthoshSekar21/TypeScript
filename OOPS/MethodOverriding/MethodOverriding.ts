//Method overriding allows a subclass to change or extend the behavior of its parent class method according to its specific requirements.
class Vehicle {
    constructor(public brand: string) {}

    // Method to be overridden
    startEngine(): void {
        console.log(`Starting the engine of the vehicle (${this.brand})...`);
    }
}

// Derived class
class Car extends Vehicle {
    constructor(brand: string, public model: string) {
        super(brand);
    }

    // Overriding the parent method
    startEngine(): void {
        super.startEngine();//using super keyword accessing the  parent class method implementation
        console.log(`Starting the engine of the car (${this.brand} - ${this.model})...`);
    }
}

// Creating instances
const genericVehicle = new Vehicle("Generic Brand");
const myCar = new Car("Toyota", "Corolla");

// Calling the method
genericVehicle.startEngine(); // Output: Starting the engine of the vehicle (Generic Brand)...
myCar.startEngine();          // Output: Starting the engine of the car (Toyota - Corolla)...
 