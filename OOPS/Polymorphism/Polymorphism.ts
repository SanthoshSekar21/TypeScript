
// Parent class
class Employee {
    constructor(public name: string) {}

    // This method will be overridden by subclasses
    work(): void {
        console.log(`${this.name} is working.`);
    }
}

// Child class 1
class Developer extends Employee {
    // Overriding the work method
    work(): void {
        console.log(`${this.name} is writing code.`);
    }
}

// Child class 2
class Designer extends Employee {
    // Overriding the work method
    work(): void {
        console.log(`${this.name} is creating designs.`);
    }
}

// Creating instances
const emp1: Employee = new Developer("Alice");
const emp2: Employee = new Designer("Bob");

// Polymorphic behavior: Each class responds differently to the same method
emp1.work(); // Output: Alice is writing code.
emp2.work(); // Output: Bob is creating designs.
