//In TypeScript, classes provide a blueprint for creating objects. 
// They encapsulate data for the object and methods to manipulate that data. 
// Classes in TypeScript are similar to those in other object-oriented languages, such as C# and Java,  but they come with additional type-checking features.
//Basic class
class Person {
    name: string;
    age: number;
  
    // Constructor to initialize class properties
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    // Method to greet
    greet(): void {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // Creating an instance of the class
  let person1 = new Person("Santhosh", 21);
  person1.greet();  // Outputs: Hello, my name is Santhosh and I am 21 years old.
//   Constructor:
// A constructor is a special method that is called when creating an object. 
// It’s used to initialize the properties of the class.
class Point {
    x: number;
    y: number;
  
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  
    displayPoint(): void {
      console.log(`Point is at (${this.x}, ${this.y})`);
    }
  }
  
  let p1 = new Point(2, 3);
  p1.displayPoint();  // Outputs: Point is at (2, 3)
  
  //Access Modifiers
// TypeScript supports three access modifiers for class members: public, private, and protected.

// public (default):

// Members are accessible from anywhere.
// You don’t need to explicitly declare members as public.
class Employee {
    public name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  }
  
  let emp = new Employee("Santhosh");
  console.log(emp.name);  // Outputs: Santhosh
//   private:
// Members are only accessible within the class. 
// They cannot be accessed or modified outside the class.
class BankAccount {
    private balance: number;
  
    constructor(initialBalance: number) {
      this.balance = initialBalance;
    }
  
    showBalance(): void {
      console.log(`The balance is ${this.balance}`);
    }
  }
  
  let account = new BankAccount(1000);
  // console.log(account.balance); // Error: 'balance' is private
  account.showBalance();  // Outputs: The balance is 1000
//   protected:
// Members are accessible within the class and in subclasses but not from outside
class Vehicle {
    protected speed: number;
  
    constructor(speed: number) {
      this.speed = speed;
    }
  }
  
  class Car extends Vehicle {
    showSpeed(): void {
      console.log(`The speed is ${this.speed}`);
    }
  }
  
  let car = new Car(120);
  car.showSpeed();  // Outputs: The speed is 120
//   Abstract Classes
// An abstract class is a class that cannot be instantiated and is meant to be subclassed. It often includes abstract methods that must be implemented by derived classes.
// Use the abstract keyword to define an abstract class or method.
abstract class Shape {
    abstract getArea(): number; // Abstract method
  
    printArea(): void {
      console.log(`The area is ${this.getArea()}`);
    }
  }
  
  class Circle extends Shape {
    radius: number;
  
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
  
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  let circle = new Circle(5);
  circle.printArea();  // Outputs: The area is 78.53981633974483

  //Getter and Setter methods
  // Getters and Setters allow encapsulating the internal state of a class while still providing access to read and update it. 
  // They look like regular properties but use the get and set keywords.
  class User {
  private _username: string;

  get username(): string {
    return this._username;
  }

  set username(name: string) {
    if (name.length > 3) {
      this._username = name;
    } else {
      console.log("Username must be at least 4 characters long.");
    }
  }
}

let user = new User();
user.username = "Sam";      // Output: Username must be at least 4 characters long.
user.username = "Samuel";   // Valid
console.log(user.username); // Output: Samuel
//Static Properties and Methods
// Static members belong to the class itself rather than to instances of the class. 
// They are accessed using the class name.
class MathHelper {
  static pi: number = 3.14;

  static circleArea(radius: number): number {
    return this.pi * radius * radius;
  }
}

console.log(MathHelper.pi);               // Output: 3.14
console.log(MathHelper.circleArea(5));     // Output: 78.5
